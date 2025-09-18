// src/components/formas.jsx
import React from 'react';

const BlobShapes = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMinYMin meet">
      {/* Mancha 1: la forma más grande y alargada */}
      <path
        fill="#f7b733" // Puedes cambiar este color
        opacity="0.2"
        d="M935.9,461.5c-19-140-109-224-219-242s-227-24-345-31s-219,30-295,123s-143,260-17,458s307,267,495,206s341-285,178-439Z"
      />
      
      {/* Mancha 2: la forma más pequeña y redondeada */}
      <path
        fill="#fc4a1a" // Puedes cambiar este color
        opacity="0.2"
        d="M748.2,746.5c-48.4,72.4-124.5,108.5-223.1,108.5c-143.5,0-239.1-137.9-225-273.7c14.1-135.8,111.9-203.7,210.6-203.7c130.6,0,217.4,136.9,203.3,272.7C700.5,650.5,796.6,674.1,748.2,746.5Z"
      />
    </svg>
  );
};

export default BlobShapes;