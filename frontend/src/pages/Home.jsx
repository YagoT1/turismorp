// src/pages/Home.jsx

import Hero from '../components/Hero';
import Historia from '../components/Historia';
import QueVisitar from './servicios/QueVisitar';
import ComoLlegar from './servicios/ComoLlegar';

const Home = () => {
  return (
    <div id="inicio" className="pt-32">
      <Hero />
      <div className="bg-gray-100 flex-grow pt-18">
        <section id="historia-resumen">
          <Historia />
        </section>
        <section id="que-visitar">
          <QueVisitar />
        </section>
        <section id="como-llegar">
          <ComoLlegar />
        </section>
      </div>
    </div>
  );
};

export default Home;