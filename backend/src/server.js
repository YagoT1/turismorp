// server.js
// Este es el archivo principal de tu servidor Node.js/Express.
// Maneja las peticiones HTTP, la autenticación y la interacción con Firestore.

// Importaciones necesarias
const express = require('express');
const cors = require('cors'); // Para permitir peticiones desde el frontend
const bodyParser = require('body-parser'); // Para parsear el cuerpo de las peticiones JSON
const { initializeApp } = require('firebase/app');
const { getAuth, signInWithCustomToken, signInAnonymously } = require('firebase/auth');
const { getFirestore, doc, getDoc, setDoc, collection, query, where, getDocs, addDoc } = require('firebase/firestore');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors()); // Habilita CORS para que el frontend pueda comunicarse con el backend
app.use(bodyParser.json()); // Permite a Express leer JSON en el cuerpo de las peticiones

// Variables globales para Firebase (serán proporcionadas por el entorno de Canvas o configuradas localmente)
// Si estás fuera del entorno Canvas, deberías reemplazar estas variables con tu propia configuración.
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// Variables para Firebase y Firestore
let firebaseApp;
let db;
let auth;
let userId; // Variable para almacenar el ID de usuario

// Función de inicialización de Firebase y autenticación
const initializeFirebaseAndAuth = async () => {
    try {
        if (Object.keys(firebaseConfig).length === 0) {
            console.warn("Firebase config no encontrada. Ejecutándose en modo limitado sin todas las funciones de Firebase.");
            // Esto es solo para que el servidor no falle si se ejecuta fuera de Canvas sin config
            // En un entorno de producción, esto sería un error crítico.
            return;
        }

        firebaseApp = initializeApp(firebaseConfig);
        db = getFirestore(firebaseApp);
        auth = getAuth(firebaseApp);

        // Autenticación con token personalizado si está disponible, o anónimamente
        if (initialAuthToken) {
            await signInWithCustomToken(auth, initialAuthToken);
            console.log("Firebase autenticado con token personalizado.");
        } else {
            await signInAnonymously(auth);
            console.log("Firebase autenticado anónimamente.");
        }

        // Una vez autenticado, obtenemos el UID del usuario
        userId = auth.currentUser?.uid || crypto.randomUUID();
        console.log(`ID de usuario: ${userId}`);

        // Opcional: Guardar un dato de ejemplo en Firestore para verificar la conexión
        // Esto es solo para demostración. En una app real, guardarías datos de tu oficina.
        const exampleDocRef = doc(db, `artifacts/${appId}/users/${userId}/example_data`, 'hello_world');
        await setDoc(exampleDocRef, { message: 'Hola desde tu backend!', timestamp: new Date() });
        console.log("Datos de ejemplo escritos en Firestore.");

    } catch (error) {
        console.error("Error al inicializar Firebase o autenticar:", error);
    }
};

// Llama a la función de inicialización al iniciar el servidor
initializeFirebaseAndAuth();

// --- Rutas de la API ---

// Ruta de autenticación (ejemplo simplificado)
app.post('/auth/login', async (req, res) => {
    const { username, password } = req.body;

    // TODO: En una aplicación real, aquí verificarías las credenciales contra una base de datos de usuarios
    // (por ejemplo, con Firebase Authentication o tu propia base de datos)
    // y emitirías un token JWT si son válidas.
    // Por simplicidad, simularemos un login exitoso con credenciales fijas.
    if (username === 'admin' && password === 'password123') {
        // En una app real, aquí generarías un token JWT real
        const user = { username: 'admin', role: 'admin', token: 'fake-jwt-token-123' };
        return res.status(200).json(user);
    } else {
        return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
    }
});

// Ruta de ejemplo para obtener destinos turísticos desde Firestore
app.get('/api/destinations', async (req, res) => {
    // Asegurarse de que Firebase y el ID de usuario estén inicializados
    if (!db || !userId) {
        return res.status(500).json({ message: "El servidor aún no está listo. Inténtalo de nuevo en unos segundos." });
    }

    try {
        // Acceder a una colección "pública" de destinos
        // IMPORTANTE: La ruta para datos públicos en Firestore en Canvas es /artifacts/{appId}/public/data/{your_collection_name}
        const destinationsCollectionRef = collection(db, `artifacts/${appId}/public/data/destinations`);
        const q = query(destinationsCollectionRef);
        const querySnapshot = await getDocs(q);

        const destinations = [];
        querySnapshot.forEach((doc) => {
            destinations.push({ id: doc.id, ...doc.data() });
        });

        // Si no hay destinos, agregar algunos de ejemplo para demostrar
        if (destinations.length === 0) {
            const initialDestinations = [
                { name: "Cataratas del Iguazú", description: "Impresionantes caídas de agua en la selva.", image: "https://placehold.co/400x300/1E90FF/FFFFFF?text=Iguazu" },
                { name: "Glaciar Perito Moreno", description: "Un imponente glaciar en la Patagonia Argentina.", image: "https://placehold.co/400x300/87CEEB/FFFFFF?text=Perito+Moreno" },
                { name: "Bariloche", description: "Nieve, lagos y chocolates en la Patagonia Andina.", image: "https://placehold.co/400x300/4682B4/FFFFFF?text=Bariloche" }
            ];
            for (const dest of initialDestinations) {
                await addDoc(destinationsCollectionRef, dest);
            }
            console.log("Agregados destinos de muestra iniciales a Firestore.");
            return res.status(200).json(initialDestinations); // Devuelve los recién agregados
        }

        res.status(200).json(destinations);
    } catch (error) {
        console.error("Error al obtener destinos:", error);
        res.status(500).json({ message: "Error al obtener destinos turísticos." });
    }
});


// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
