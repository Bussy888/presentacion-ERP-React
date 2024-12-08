import React, { useState } from 'react';
import Fase from './Fase';
import ishikawa from './ishikawa.png';
const Presentacion = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const fases = [
    {
      titulo: "Fase de Inicio",
      contenido: (
        <>
      <h3>1.1 Análisis de la problemática, objetivos, límites y alcances</h3>
      <p>
        Pollos Copacabana, una empresa líder en la industria alimenticia en Bolivia, enfrenta desafíos significativos en la optimización de sus operaciones. Estos desafíos incluyen la falta de automatización de procesos, problemas en el control de inventarios, dificultad para supervisar sucursales de manera eficiente y la necesidad de generación de informes financieros precisos y en tiempo real.
      </p>
      <p>
        Para abordar estos problemas, se plantea implementar un sistema ERP que permita optimizar los procesos administrativos y operativos, mejorar la eficiencia en la gestión de inventarios, y facilitar el monitoreo del desempeño de las sucursales. 
      </p>
      <p><b>Los objetivos</b> de este proyecto incluyen:</p>
      <ul>
        <li>Reducir errores y tiempos operativos mediante la automatización.</li>
        <li>Implementar un sistema de inventarios en tiempo real.</li>
        <li>Facilitar la toma de decisiones con informes financieros precisos.</li>
        <li>Garantizar la escalabilidad y seguridad de los datos.</li>
      </ul>
      <h3>Matriz de Coherencia</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>TÍTULO</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>PREGUNTA</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>OBJETIVO GENERAL</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>OBJETIVOS ESPECÍFICOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Sistema ERP para estructurar las operaciones e integrar las áreas de una empresa. Caso: Pollos Copacabana
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              ¿Cómo solucionar la falta de un sistema ERP en Pollos Copacabana para estructurar las operaciones e integrar sus áreas?
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Desarrollar un sistema ERP que permita estructurar las operaciones de la empresa, integrando sus áreas.
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <ol>
                <li>
                  Identificar los requerimientos del sistema y los usuarios mediante entrevistas y observación para comprender las necesidades del cliente y establecer los requisitos del sistema.
                </li>
                <li>
                  Diseñar la arquitectura del sistema, los módulos clave, y crear prototipos para que el sistema cumpla con los requerimientos de las partes interesadas.
                </li>
                <li>
                  Desarrollar los módulos del ERP (frontend y backend), integrar la lógica del negocio para proporcionar una solución funcional que conecte todas las áreas de la empresa.
                </li>
                <li>
                  Realizar pruebas unitarias, de integración, de rendimiento y seguridad para verificar que el sistema funcione correctamente.
                </li>
                <li>
                  Desplegar el sistema ERP y configurar servidores para que el sistema esté listo para su operación y en producción.
                </li>
                <li>
                  Establecer un plan de mantenimiento continuo, realizar ajustes según la retroalimentación y documentar el cierre del proyecto con entregables finales para el cumplimiento de los objetivos del sistema.
                </li>
              </ol>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <b>Límites y alcances:</b> El sistema será diseñado específicamente para las necesidades de Pollos Copacabana, cubriendo únicamente los procesos internos y excluyendo integraciones con proveedores externos en esta etapa inicial.
      </p>
      <p>
        A continuación, se presenta un análisis visual de las principales causas y efectos de la problemática actual mediante un diagrama de Ishikawa:
      </p>
      <img 
        src={ishikawa}
        alt="Diagrama de Ishikawa" 
        style={{ width: "100%", maxWidth: "600px", margin: "20px 0" , justifyItems: "center"}} 
      />
          <h3>1.2 Términos de Referencia (TDR)</h3>
          <p>
            El TDR establece los requerimientos para el desarrollo de un software ERP que cubra los módulos de Ventas, Inventarios, Control de Usuarios, Finanzas y Clientes. Estos módulos permitirán a Pollos Copacabana:
          </p>
          <ul>
            <li>Automatizar procesos administrativos y operativos.</li>
            <li>Controlar eficientemente el inventario y las ventas.</li>
            <li>Supervisar el rendimiento de sucursales.</li>
            <li>Generar informes financieros en tiempo real.</li>
          </ul>
          <h3>1.3 Módulos de Desarrollo</h3>
          <p>
            Los módulos clave del sistema incluirán:
          </p>
          <ul>
            <li>
              <b>Módulo de Ventas:</b> Desarrollo de interfaces para registro de pedidos, facturación, y análisis de ventas.
            </li>
            <li>
              <b>Módulo de Inventarios:</b> Control de stock en tiempo real, alertas de reabastecimiento, y reportes sobre productos más vendidos.
            </li>
            <li>
              <b>Módulo de Control de Usuarios:</b> Gestión de roles y permisos, auditorías, y registro de actividades.
            </li>
            <li>
              <b>Módulo de Finanzas:</b> Seguimiento de ingresos y egresos, generación de reportes automáticos y proyecciones económicas.
            </li>
            <li>
              <b>Módulo de Clientes:</b> Registro de clientes, sistema de fidelización y análisis de comportamiento.
            </li>
          </ul>
          
          <p></p>
            <b>DESCARGAR ARCHIVOS:</b>
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
          <p>El cronograma del proyecto establece los principales hitos y actividades con sus respectivos plazos para garantizar el éxito del sistema ERP.</p>
          <h3>6. CALENDARIO DE HITOS</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>Hito</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Actividad Principal</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Plazo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>Hito 1</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>Recolección de requisitos y diseño inicial</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>1 a 20 días</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>Hito 2</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>Desarrollo de módulos de ventas e inventarios</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>21 a 60 días</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>Hito 3</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>Desarrollo de módulos de control de sucursales y finanzas</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>61 a 90 días</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>Hito 4</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>Pruebas funcionales y ajustes finales</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>91 a 110 días</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>Hito 5</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>Capacitación, instalación y entrega final</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>111 a 120 días</td>
              </tr>
            </tbody>
          </table>
    
          <h3>2.2 Uso de herramientas</h3>
          <p>Para la planificación del proyecto se utilizaron las siguientes herramientas:</p>
          <ul>
            <li>Trello: Gestión de tareas y seguimiento del proyecto.</li>
            <li>Draw.io: Creación de diagramas de flujo y procesos.</li>
            <li>AllFusion Process Modeler: Diseño de diagramas IDEF0 para modelar procesos.</li>
            <li>Notion: Organización y documentación del proyecto.</li>
            <li>Google Docs: Colaboración y redacción de documentos.</li>
            <li>Figma: Creación de mockups para la interfaz de usuario.</li>
            <li>GitHub: Control de versiones y colaboración en el desarrollo del código.</li>
            <li>Visual Studio Code: Entorno de desarrollo integrado (IDE).</li>
            <li>Node.js: Desarrollo backend.</li>
            <li>React: Desarrollo frontend.</li>
            <li>Postman: Pruebas de APIs.</li>
            <li>Amazon Web Services (AWS): Infraestructura en la nube.</li>
          </ul>
    
          <h3>2.3 Gestión de riesgos</h3>
      <p>Para garantizar el éxito del proyecto, se documentaron los riesgos y sus respectivos planes de contingencia utilizando el siguiente formato:</p>
      <h4>Riesgos Identificados</h4>
      <ul>
        <li>
          <strong>Problema:</strong> Fallas en la seguridad.<br />
          <strong>Probabilidad:</strong> Alta.<br />
          <strong>Impacto:</strong> Alto.<br />
          <strong>Descripción:</strong> Vulnerabilidades en el sistema podrían comprometer datos sensibles y generar pérdidas económicas.<br />
          <strong>Plan de contingencia:</strong> Implementar auditorías de seguridad periódicas, usar cifrado avanzado y realizar pruebas de penetración antes del despliegue.
        </li>
        <p></p>
        <li>
          <strong>Problema:</strong> Falta de capacitación del personal.<br />
          <strong>Probabilidad:</strong> Media.<br />
          <strong>Impacto:</strong> Moderado.<br />
          <strong>Descripción:</strong> El personal no capacitado podría tener dificultades para usar el sistema de manera eficiente, lo que afectaría la productividad.<br />
          <strong>Plan de contingencia:</strong> Organizar talleres de capacitación previos al despliegue y proporcionar manuales de usuario detallados.
        </li>
        <p></p>
        <li>
          <strong>Problema:</strong> Fallos técnicos en los servidores durante el despliegue.<br />
          <strong>Probabilidad:</strong> Baja.<br />
          <strong>Impacto:</strong> Alto.<br />
          <strong>Descripción:</strong> Problemas con la configuración o capacidad de los servidores podrían retrasar la puesta en producción.<br />
          <strong>Plan de contingencia:</strong> Configurar servidores de respaldo y realizar pruebas de estrés antes del despliegue final.
        </li>
      </ul>
    </>
      )
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
