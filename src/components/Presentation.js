import React, { useState } from 'react';
import Fase from './Fase';

const Presentacion = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const fases = [
    {
      titulo: "Fase de Inicio",
      contenido: (
        <>
          <h3>1.1 Análisis de la problemática, objetivos, límites y alcances</h3>
          <p>Descripción de la fase de análisis...</p>
        </>
      ),
      archivos: [
        { nombre: "TDR1.pdf", url: "/path/to/TDR1.pdf" },
        { nombre: "Carta_inicio.pdf", url: "/path/to/Carta_inicio.pdf" }
      ]
    },
    {
      titulo: "Fase de Planificación",
      contenido: (
        <>
          <h3>2.1 Plan del proyecto “Cronogramas”</h3>
          <p>Descripción del plan...</p>
        </>
      ),
      archivos: [{ nombre: "Cronograma.pdf", url: "/path/to/Cronograma.pdf" }]
    },
    {
      titulo: "Fase de Diseño y Desarrollo",
      contenido: (
        <>
          <h3>3.1 Metodologías de desarrollo</h3>
          <p>Descripción de metodologías...</p>
          <h3>3.2 Herramientas</h3>
          <p>Descripción de herramientas...</p>
          <h3>3.3 Diseño de pantallas</h3>
          <p>Descripción de diseño...</p>
          <h3>3.4 Análisis de requerimientos y diagramas UML, C4</h3>
          <p>Descripción de los diagramas...</p>
        </>
      ),
      archivos: []
    },
    {
      titulo: "Fase de Control de Calidad e Implementación",
      contenido: (
        <>
          <h3>4.1 Pruebas y control de calidad</h3>
          <p>Descripción de pruebas...</p>
          <h3>4.2 Selección del servidor y configuración</h3>
          <p>Descripción de la configuración...</p>
        </>
      ),
      archivos: [
        { nombre: "Pruebas_y_control.pdf", url: "/path/to/Pruebas_y_control.pdf" }
      ]
    },
    {
      titulo: "Fase de Cierre",
      contenido: (
        <>
          <h3>5.1 Evaluación y feedback</h3>
          <p>Descripción de evaluación...</p>
          <h3>5.2 Manuales</h3>
          <p>Descripción de manuales...</p>
          <h3>5.3 Carta de entrega de producto</h3>
          <p>Descripción de la carta de entrega...</p>
        </>
      ),
      archivos: [
        { nombre: "Manuales.pdf", url: "/path/to/Manuales.pdf" },
        { nombre: "Carta_de_cierre.pdf", url: "/path/to/Carta_de_cierre.pdf" }
      ]
    },
  ];

  const handleNavClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="presentacion">
      {/* Navbar */}
      <div className="navbar">
        {fases.map((fase, index) => (
          <button 
            key={index} 
            onClick={() => handleNavClick(index)} 
            className={currentSlide === index ? "active" : ""}
          >
            {fase.titulo}
          </button>
        ))}
      </div>

      {/* Contenido de la Fase */}
      <Fase
        titulo={fases[currentSlide].titulo}
        contenido={fases[currentSlide].contenido}
        archivos={fases[currentSlide].archivos}
      />
    </div>
  );
};

export default Presentacion;
