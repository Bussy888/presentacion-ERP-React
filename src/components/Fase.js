import React from 'react';

const Fase = ({ titulo, contenido, archivos }) => {
  return (
    <div className="fase">
      <h2>{titulo}</h2>
      <div>{contenido}</div>
      {archivos &&
        archivos.map((archivo, index) => (
          <div key={index}>
            <a href={archivo.url} download>{archivo.nombre}</a>
          </div>
        ))}
    </div>
  );
};

export default Fase;
