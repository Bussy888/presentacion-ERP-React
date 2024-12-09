import React, { useState } from "react";
import Fase from "./Fase";
import ishikawa from "./ishikawa.png";
import facturas from "./facturas.png";
import controlusuarios from "./controlusuarios.png";
import fidelizacionclientes from "./fidelizacionclientes.png";
import ingresosEgresos from "./ingresosEgresos.png";
import inventarios from "./inventarios.png";
import login from "./login.png";
import mainpage from "./mainpage.png";
import mainpageandmenu from "./mainpageandmenu.png";
import ventas from "./ventas.png";
import c4 from "./c4.png";
import casos from "./casos.png";
import diact from "./diaact.png";
import diacla from "./diacla.png";
import diasec from "./diasec.png";
import diawue from "./diawue.png";
import req1 from "./req1.jpg";
import reqq from "./reqq.jpg";

const Presentacion = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fases = [
    {
      titulo: "Fase de Inicio",
      contenido: (
        <>
          <h3>
            1.1 Análisis de la problemática, objetivos, límites y alcances
          </h3>
          <p>
            Pollos Copacabana, una empresa líder en la industria alimenticia en
            Bolivia, enfrenta desafíos significativos en la optimización de sus
            operaciones. Estos desafíos incluyen la falta de automatización de
            procesos, problemas en el control de inventarios, dificultad para
            supervisar sucursales de manera eficiente y la necesidad de
            generación de informes financieros precisos y en tiempo real.
          </p>
          <p>
            Para abordar estos problemas, se plantea implementar un sistema ERP
            que permita optimizar los procesos administrativos y operativos,
            mejorar la eficiencia en la gestión de inventarios, y facilitar el
            monitoreo del desempeño de las sucursales.
          </p>
          <p>
            <b>Los objetivos</b> de este proyecto incluyen:
          </p>
          <ul>
            <li>
              Reducir errores y tiempos operativos mediante la automatización.
            </li>
            <li>Implementar un sistema de inventarios en tiempo real.</li>
            <li>
              Facilitar la toma de decisiones con informes financieros precisos.
            </li>
            <li>Garantizar la escalabilidad y seguridad de los datos.</li>
          </ul>
          <h3>Matriz de Coherencia</h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              margin: "20px 0",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  TÍTULO
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  PREGUNTA
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  OBJETIVO GENERAL
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  OBJETIVOS ESPECÍFICOS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Sistema ERP para estructurar las operaciones e integrar las
                  áreas de una empresa. Caso: Pollos Copacabana
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ¿Cómo solucionar la falta de un sistema ERP en Pollos
                  Copacabana para estructurar las operaciones e integrar sus
                  áreas?
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Desarrollar un sistema ERP que permita estructurar las
                  operaciones de la empresa, integrando sus áreas.
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  <ol>
                    <li>
                      Identificar los requerimientos del sistema y los usuarios
                      mediante entrevistas y observación para comprender las
                      necesidades del cliente y establecer los requisitos del
                      sistema.
                    </li>
                    <li>
                      Diseñar la arquitectura del sistema, los módulos clave, y
                      crear prototipos para que el sistema cumpla con los
                      requerimientos de las partes interesadas.
                    </li>
                    <li>
                      Desarrollar los módulos del ERP (frontend y backend),
                      integrar la lógica del negocio para proporcionar una
                      solución funcional que conecte todas las áreas de la
                      empresa.
                    </li>
                    <li>
                      Realizar pruebas unitarias, de integración, de rendimiento
                      y seguridad para verificar que el sistema funcione
                      correctamente.
                    </li>
                    <li>
                      Desplegar el sistema ERP y configurar servidores para que
                      el sistema esté listo para su operación y en producción.
                    </li>
                    <li>
                      Establecer un plan de mantenimiento continuo, realizar
                      ajustes según la retroalimentación y documentar el cierre
                      del proyecto con entregables finales para el cumplimiento
                      de los objetivos del sistema.
                    </li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Límites y alcances:</b> El sistema será diseñado específicamente
            para las necesidades de Pollos Copacabana, cubriendo únicamente los
            procesos internos y excluyendo integraciones con proveedores
            externos en esta etapa inicial.
          </p>
          <p>
            A continuación, se presenta un análisis visual de las principales
            causas y efectos de la problemática actual mediante un diagrama de
            Ishikawa:
          </p>
          <img
            src={ishikawa}
            alt="Diagrama de Ishikawa"
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px 0",
              justifyItems: "center",
            }}
          />
          <h3>1.2 Términos de Referencia (TDR)</h3>
          <p>
            El TDR establece los requerimientos para el desarrollo de un
            software ERP que cubra los módulos de Ventas, Inventarios, Control
            de Usuarios, Finanzas y Clientes. Estos módulos permitirán a Pollos
            Copacabana:
          </p>
          <ul>
            <li>Automatizar procesos administrativos y operativos.</li>
            <li>Controlar eficientemente el inventario y las ventas.</li>
            <li>Supervisar el rendimiento de sucursales.</li>
            <li>Generar informes financieros en tiempo real.</li>
          </ul>
          <h3>1.3 Módulos de Desarrollo</h3>
          <p>Los módulos clave del sistema incluirán:</p>
          <ul>
            <li>
              <b>Módulo de Ventas:</b> Desarrollo de interfaces para registro de
              pedidos, facturación, y análisis de ventas.
            </li>
            <li>
              <b>Módulo de Inventarios:</b> Control de stock en tiempo real,
              alertas de reabastecimiento, y reportes sobre productos más
              vendidos.
            </li>
            <li>
              <b>Módulo de Control de Usuarios:</b> Gestión de roles y permisos,
              auditorías, y registro de actividades.
            </li>
            <li>
              <b>Módulo de Finanzas:</b> Seguimiento de ingresos y egresos,
              generación de reportes automáticos y proyecciones económicas.
            </li>
            <li>
              <b>Módulo de Clientes:</b> Registro de clientes, sistema de
              fidelización y análisis de comportamiento.
            </li>
          </ul>

          <p></p>
          <b>DESCARGAR ARCHIVOS:</b>
        </>
      ),
      archivos: [
        { nombre: "TDR1.pdf", url: "/downloads/TDR1.pdf" },
        { nombre: "Carta_inicio.pdf", url: "/downloads/Carta_inicio.pdf" },
      ],
    },
    {
      titulo: "Fase de Planificación",
      contenido: (
        <>
          <h3>2.1 Plan del proyecto “Cronogramas”</h3>
          <p>
            El cronograma del proyecto establece los principales hitos y
            actividades con sus respectivos plazos para garantizar el éxito del
            sistema ERP.
          </p>
          <h3>6. CALENDARIO DE HITOS</h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              margin: "20px 0",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  Hito
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  Actividad Principal
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  Plazo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Hito 1
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Recolección de requisitos y diseño inicial
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  1 a 20 días
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Hito 2
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Desarrollo de módulos de ventas e inventarios
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  21 a 60 días
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Hito 3
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Desarrollo de módulos de control de sucursales y finanzas
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  61 a 90 días
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Hito 4
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Pruebas funcionales y ajustes finales
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  91 a 110 días
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Hito 5
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Capacitación, instalación y entrega final
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  111 a 120 días
                </td>
              </tr>
            </tbody>
          </table>

          <h3>2.2 Uso de herramientas</h3>
          <p>
            Para la planificación del proyecto se utilizaron las siguientes
            herramientas:
          </p>
          <ul>
            <li>Trello: Gestión de tareas y seguimiento del proyecto.</li>
            <li>Draw.io: Creación de diagramas de flujo y procesos.</li>
            <li>
              AllFusion Process Modeler: Diseño de diagramas IDEF0 para modelar
              procesos.
            </li>
            <li>Notion: Organización y documentación del proyecto.</li>
            <li>Google Docs: Colaboración y redacción de documentos.</li>
            <li>Figma: Creación de mockups para la interfaz de usuario.</li>
            <li>
              GitHub: Control de versiones y colaboración en el desarrollo del
              código.
            </li>
            <li>Visual Studio Code: Entorno de desarrollo integrado (IDE).</li>
            <li>Node.js: Desarrollo backend.</li>
            <li>React: Desarrollo frontend.</li>
            <li>Postman: Pruebas de APIs.</li>
            <li>Amazon Web Services (AWS): Infraestructura en la nube.</li>
          </ul>

          <h3>2.3 Gestión de riesgos</h3>
          <p>
            Para garantizar el éxito del proyecto, se documentaron los riesgos y
            sus respectivos planes de contingencia utilizando el siguiente
            formato:
          </p>
          <h4>Riesgos Identificados</h4>
          <ul>
            <li>
              <strong>Problema:</strong> Fallas en la seguridad.
              <br />
              <strong>Probabilidad:</strong> Alta.
              <br />
              <strong>Impacto:</strong> Alto.
              <br />
              <strong>Descripción:</strong> Vulnerabilidades en el sistema
              podrían comprometer datos sensibles y generar pérdidas económicas.
              <br />
              <strong>Plan de contingencia:</strong> Implementar auditorías de
              seguridad periódicas, usar cifrado avanzado y realizar pruebas de
              penetración antes del despliegue.
            </li>
            <p></p>
            <li>
              <strong>Problema:</strong> Falta de capacitación del personal.
              <br />
              <strong>Probabilidad:</strong> Media.
              <br />
              <strong>Impacto:</strong> Moderado.
              <br />
              <strong>Descripción:</strong> El personal no capacitado podría
              tener dificultades para usar el sistema de manera eficiente, lo
              que afectaría la productividad.
              <br />
              <strong>Plan de contingencia:</strong> Organizar talleres de
              capacitación previos al despliegue y proporcionar manuales de
              usuario detallados.
            </li>
            <p></p>
            <li>
              <strong>Problema:</strong> Fallos técnicos en los servidores
              durante el despliegue.
              <br />
              <strong>Probabilidad:</strong> Baja.
              <br />
              <strong>Impacto:</strong> Alto.
              <br />
              <strong>Descripción:</strong> Problemas con la configuración o
              capacidad de los servidores podrían retrasar la puesta en
              producción.
              <br />
              <strong>Plan de contingencia:</strong> Configurar servidores de
              respaldo y realizar pruebas de estrés antes del despliegue final.
            </li>
          </ul>
        </>
      ),
    },
    {
      titulo: "Fase de Diseño y Desarrollo",
      contenido: (
        <>
          <h3>3.1 Metodologías de desarrollo</h3>
          <div className="scrum-plan">
            <section>
              <h4>1. Roles en Scrum</h4>
              <ul>
                <li>
                  <strong>Product Owner:</strong> Define los requerimientos y
                  prioridades.
                </li>
                <li>
                  <strong>Scrum Master:</strong> Asegura que el equipo siga
                  Scrum correctamente.
                </li>
                <li>
                  <strong>Equipo de Desarrollo:</strong> Programadores,
                  diseñadores y testers.
                </li>
              </ul>
            </section>

            <section>
              <h4>2. Backlog del Producto</h4>
              <p>Las tareas se organizan por módulos del sistema ERP:</p>
              <ul>
                <li>
                  <strong>Gestión de Inventarios:</strong>
                  <ul>
                    <li>Actualizar el stock.</li>
                    <li>Recibir alertas cuando el stock esté bajo.</li>
                    <li>Consultar el stock actual.</li>
                  </ul>
                </li>
                <li>
                  <strong>Gestión de Ventas:</strong>
                  <ul>
                    <li>Registrar ventas.</li>
                    <li>Generar reportes de ventas.</li>
                  </ul>
                </li>
                <li>
                  <strong>Gestión de Clientes:</strong>
                  <ul>
                    <li>Registrar nuevos clientes.</li>
                    <li>Gestionar preferencias de clientes.</li>
                  </ul>
                </li>
                <li>
                  <strong>Gestión Financiera:</strong>
                  <ul>
                    <li>Registrar movimientos financieros.</li>
                    <li>Generar reportes financieros.</li>
                  </ul>
                </li>
                <li>
                  <strong>Gestión de Usuarios:</strong>
                  <ul>
                    <li>Asignar roles a los usuarios.</li>
                    <li>Gestionar permisos de usuarios.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h4>3. Planificación de Sprints</h4>
              <p>
                El desarrollo se divide en <strong>4 Sprints</strong> de 2
                semanas cada uno:
              </p>
              <div className="sprints">
                <article>
                  <h4>Sprint 1: Configuración Base</h4>
                  <p>Preparar el entorno y definir la estructura inicial.</p>
                  <ul>
                    <li>Configurar el entorno de desarrollo.</li>
                    <li>
                      Implementar la clase base (<code>EntidadBase</code>).
                    </li>
                    <li>Configurar la base de datos y estructura inicial.</li>
                  </ul>
                </article>
                <article>
                  <h4>Sprint 2: Inventarios y Ventas</h4>
                  <ul>
                    <li>
                      Crear funcionalidades de inventarios (actualización y
                      alertas).
                    </li>
                    <li>Implementar registro y reportes de ventas.</li>
                  </ul>
                </article>
                <article>
                  <h4>Sprint 3: Gestión de Clientes y Usuarios</h4>
                  <ul>
                    <li>Registrar clientes y gestionar preferencias.</li>
                    <li>Asignar roles y gestionar permisos de usuarios.</li>
                  </ul>
                </article>
                <article>
                  <h4>Sprint 4: Finanzas e Integración</h4>
                  <ul>
                    <li>
                      Registrar movimientos financieros y generar reportes.
                    </li>
                    <li>
                      Integrar todos los módulos y realizar pruebas finales.
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            <section>
              <h4>4. Ceremonias de Scrum</h4>
              <ul>
                <li>
                  <strong>Reunión de planificación:</strong> Definir tareas
                  específicas para cada Sprint.
                </li>
                <li>
                  <strong>Daily Scrum:</strong> Revisar avances y bloqueos
                  diariamente.
                </li>
                <li>
                  <strong>Revisión del Sprint:</strong> Presentar el trabajo
                  completado.
                </li>
                <li>
                  <strong>Retrospectiva:</strong> Identificar mejoras en el
                  proceso.
                </li>
              </ul>
            </section>

            <section>
              <h4>5. Herramientas Sugeridas</h4>
              <ul>
                <li>
                  <strong>Gestión del proyecto:</strong> Jira, Trello o Notion.
                </li>
                <li>
                  <strong>Control de versiones:</strong> Git y GitHub/GitLab.
                </li>
                <li>
                  <strong>Comunicación:</strong> Slack o Microsoft Teams.
                </li>
              </ul>
            </section>
          </div>
          <h3>3.2 Herramientas</h3>
          <p>
            <div>
              <ul>
                <li>
                  <strong>Trello:</strong> Una herramienta de gestión de tareas
                  que permite organizar y realizar el seguimiento de actividades
                  y hitos del proyecto.
                </li>
                <li>
                  <strong>Draw.io:</strong> Utilizada para crear diagramas de
                  flujo y procesos que ayudan a visualizar el funcionamiento del
                  sistema.
                </li>
                <li>
                  <strong>AllFusion Process Modeler:</strong> Herramienta para
                  diseñar diagramas IDEF0, esenciales para modelar procesos de
                  negocio de manera estructurada.
                </li>
                <li>
                  <strong>Notion:</strong> Plataforma para la organización y
                  documentación del proyecto, integrando notas, tareas y
                  cronogramas en un solo lugar.
                </li>
                <li>
                  <strong>Google Docs:</strong> Herramienta colaborativa para
                  redactar y compartir documentos entre los miembros del equipo.
                </li>
                <li>
                  <strong>Figma:</strong> Utilizada para diseñar y prototipar la
                  interfaz de usuario mediante mockups interactivos.
                </li>
                <li>
                  <strong>GitHub:</strong> Plataforma para el control de
                  versiones y la colaboración en el desarrollo del código,
                  facilitando el trabajo en equipo.
                </li>
                <li>
                  <strong>Visual Studio Code:</strong> Un entorno de desarrollo
                  integrado (IDE) que proporciona herramientas y extensiones
                  para facilitar la programación.
                </li>
                <li>
                  <strong>Node.js:</strong> Entorno de tiempo de ejecución que
                  permite desarrollar aplicaciones backend escalables.
                </li>
                <li>
                  <strong>React:</strong> Biblioteca de JavaScript utilizada
                  para construir la interfaz de usuario de forma declarativa y
                  eficiente.
                </li>
                <li>
                  <strong>Postman:</strong> Herramienta para realizar pruebas de
                  APIs y validar su funcionamiento.
                </li>
                <li>
                  <strong>Amazon Web Services (AWS):</strong> Plataforma de
                  servicios en la nube para desplegar y escalar la
                  infraestructura del proyecto.
                </li>
              </ul>
            </div>
          </p>
          <h3>3.3 Diseño de pantallas</h3>
          <p>
            Se diseño la aplicacion para poder dar una experienca de usuario
            comoda, simple y dinamica al usuario:
          </p>
          <p>
            <img
              src={login}
              alt="Mockup del login"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                justifyItems: "center",
              }}
            />
            <img
              src={mainpage}
              alt="Mockup de la pagina principal"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                justifyItems: "center",
              }}
            />
            <img
              src={mainpageandmenu}
              alt="Mockup del menu"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                justifyItems: "center",
              }}
            />
            <img
              src={ventas}
              alt="Mockup del ventas"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                justifyItems: "center",
              }}
            />
            <img
              src={inventarios}
              alt="Mockup del inventarios"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                justifyItems: "center",
              }}
            />
            <img
              src={ingresosEgresos}
              alt="Mockup de Ingresos y Egresos"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                justifyItems: "center",
              }}
            />
            <img
              src={fidelizacionclientes}
              alt="Mockup de la fidelizacion de clientes"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                justifyItems: "center",
              }}
            />
            <img
              src={controlusuarios}
              alt="Mockup de control de usuarios"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                justifyItems: "center",
              }}
            />
            <img
              src={facturas}
              alt="Mockup de facturas"
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                justifyItems: "center",
              }}
            />
          </p>
          <h3>3.4 Análisis de requerimientos y diagramas UML, C4</h3>
          <img
            src={c4}
            alt="Diagrama C4"
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px 0",
              justifyItems: "center",
            }}
          />
          <img
            src={casos}
            alt="diagrama de casos"
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px 0",
              justifyItems: "center",
            }}
          />
          <img
            src={diact}
            alt="diagrama de actividades"
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px 0",
              justifyItems: "center",
            }}
          />
          <img
            src={diacla}
            alt="diagrama de clases"
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px 0",
              justifyItems: "center",
            }}
          />
          <img
            src={diasec}
            alt="diagraa de secuencia"
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px 0",
              justifyItems: "center",
            }}
          />
          <img
            src={diawue}
            alt="diagrama wue"
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px 0",
              justifyItems: "center",
            }}
          />
          <img
            src={req1}
            alt="analisis de requerimientos 1"
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px 0",
              justifyItems: "center",
            }}
          />
          <img
            src={reqq}
            alt="analisis de requerimientos 2"
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "20px 0",
              justifyItems: "center",
            }}
          />
        </>
      ),
      archivos: [],
    },
    {
      titulo: "Fase de Control de Calidad e Implementación",
      contenido: (
        <>
          <h3>4.1 Pruebas y control de calidad</h3>
          <p>
            Las pruebas y el control de calidad son fundamentales para
            garantizar que el sistema ERP cumpla con los requisitos funcionales,
            de rendimiento y seguridad antes de su despliegue final. Se llevaron
            a cabo los siguientes tipos de pruebas:
          </p>
          <ul>
            <li>
              <strong>Pruebas unitarias:</strong> Validación de cada componente
              o módulo del sistema para asegurar que funcionan correctamente de
              forma independiente.
            </li>
            <li>
              <strong>Pruebas de integración:</strong> Verificación de la
              interacción entre diferentes módulos del sistema para garantizar
              que se comunican y operan como se espera.
            </li>
            <li>
              <strong>Pruebas de rendimiento:</strong> Evaluación del tiempo de
              respuesta, la capacidad de procesamiento y la estabilidad del
              sistema bajo cargas de trabajo reales y simuladas.
            </li>
            <li>
              <strong>Pruebas de seguridad:</strong> Auditorías de seguridad
              para identificar y mitigar vulnerabilidades, incluyendo pruebas de
              penetración y análisis de cifrado de datos.
            </li>
            <li>
              <strong>Pruebas de aceptación:</strong> Validación final realizada
              por usuarios clave para asegurar que el sistema cumple con las
              expectativas y requisitos establecidos.
            </li>
          </ul>
          <p>
            Cada fase de pruebas se documentó detalladamente, registrando los
            resultados, los problemas encontrados y las acciones correctivas
            tomadas. Esto asegura un sistema confiable y robusto listo para su
            implementación.
          </p>

          <h3>4.2 Selección del servidor y configuración</h3>
          <p>
            Para alojar el sistema ERP, se eligió Amazon Web Services (AWS)
            debido a su flexibilidad, escalabilidad y robustez. Las
            configuraciones realizadas fueron las siguientes:
          </p>
          <ul>
            <li>
              <strong>Instancia de servidor:</strong> Se utilizó Amazon EC2
              (Elastic Compute Cloud) para alojar el backend del ERP. Se eligió
              una instancia de tipo <code>t3.medium</code>, ideal para cargas de
              trabajo de nivel medio con capacidad de escalar según sea
              necesario.
            </li>
            <li>
              <strong>Almacenamiento de datos:</strong> Amazon RDS (Relational
              Database Service) se configuró con una base de datos MySQL para
              garantizar un almacenamiento seguro y escalable.
            </li>
            <li>
              <strong>Almacenamiento de archivos:</strong> Se utilizó Amazon S3
              (Simple Storage Service) para almacenar documentos y otros
              archivos generados por el sistema ERP.
            </li>
            <li>
              <strong>Balanceo de carga:</strong> Se implementó Elastic Load
              Balancer (ELB) para distribuir el tráfico de usuarios entre varias
              instancias de servidor y garantizar alta disponibilidad.
            </li>
            <li>
              <strong>Seguridad:</strong> Se configuraron Grupos de Seguridad
              (Security Groups) y AWS WAF (Web Application Firewall) para
              proteger el sistema contra accesos no autorizados y amenazas
              externas.
            </li>
            <li>
              <strong>Despliegue continuo:</strong> AWS CodePipeline y AWS
              CodeDeploy se utilizaron para automatizar el proceso de
              despliegue, garantizando que las actualizaciones se realicen de
              manera rápida y confiable.
            </li>
          </ul>
          <p>
            Antes del lanzamiento, se realizaron pruebas de estrés en el
            servidor para verificar su capacidad de manejo de usuarios
            concurrentes y garantizar la estabilidad del sistema bajo diferentes
            condiciones de uso. Esto aseguró que el sistema ERP esté listo para
            operar con alta disponibilidad y rendimiento.
          </p>
        </>
      ),
    },
    {
      titulo: "Fase de Cierre",
      contenido: (
        <>
          <h3>5.1 Evaluación y feedback</h3>
          <p>
            La evaluación y el feedback del sistema ERP se llevaron a cabo
            utilizando diversas metodologías para garantizar que el sistema
            cumpla con las expectativas de los usuarios y los objetivos del
            proyecto. Las metodologías empleadas incluyen:
          </p>
          <ul>
            <li>
              <strong>Pruebas de Usuario:</strong> Evaluación directa por parte
              de usuarios finales para identificar problemas de usabilidad y
              funcionalidad.
              <br />
              <strong>Ejemplo:</strong> Un grupo de empleados de Pollos
              Copacabana probó el módulo de inventarios para verificar su
              facilidad de uso y precisión.
              <br />
              <strong>Conclusión:</strong> Se ajustaron algunos flujos de
              trabajo basados en sus comentarios.
            </li>
            <li>
              <strong>Pruebas de Aceptación del Cliente (UAT):</strong>{" "}
              Validación realizada por representantes clave de la empresa para
              asegurar que el sistema cumple con los requisitos.
              <br />
              <strong>Ejemplo:</strong> Los gerentes de sucursal revisaron la
              funcionalidad del módulo de ventas y aprobaron su implementación
              tras pequeños ajustes.
              <br />
              <strong>Conclusión:</strong> El sistema fue aprobado para su
              despliegue.
            </li>
            <li>
              <strong>Monitoreo Post-Lanzamiento:</strong> Recolección de
              métricas y observaciones durante las primeras semanas de uso.
              <br />
              <strong>Ejemplo:</strong> Se analizaron tiempos de respuesta y
              errores reportados por los usuarios.
              <br />
              <strong>Conclusión:</strong> No se detectaron fallos críticos, y
              las áreas reportaron mejoras significativas en sus procesos.
            </li>
            <li>
              <strong>Análisis de Métricas de Rendimiento:</strong> Evaluación
              de KPIs clave, como tiempos de respuesta y disponibilidad.
              <br />
              <strong>Ejemplo:</strong> El tiempo promedio de carga de páginas
              fue inferior a 2 segundos.
              <br />
              <strong>Conclusión:</strong> El rendimiento fue óptimo incluso
              bajo altas cargas.
            </li>
            <li>
              <strong>Encuestas y Cuestionarios:</strong> Recolección de
              opiniones de usuarios sobre la experiencia general del sistema.
              <br />
              <strong>Ejemplo:</strong> Se envió un cuestionario digital a
              empleados para evaluar la satisfacción general.
              <br />
              <strong>Conclusión:</strong> El 95% de los encuestados calificaron
              el sistema como satisfactorio o excelente.
            </li>
          </ul>

          <h3>5.2 Manuales</h3>
          <p>
            Los manuales entregados fueron diseñados para garantizar un uso
            eficiente y un mantenimiento adecuado del sistema ERP:
          </p>
          <ul>
            <li>
              <strong>Manual de Usuario:</strong> Guía detallada para empleados
              y gerentes sobre cómo utilizar los diferentes módulos del sistema,
              con ejemplos prácticos y soluciones a problemas comunes.
            </li>
            <li>
              <strong>Manual del Programador:</strong> Documentación técnica que
              incluye la arquitectura del sistema, configuraciones de servidor,
              y procedimientos para realizar modificaciones y actualizaciones.
            </li>
          </ul>

          <h3>5.3 Carta de entrega de producto</h3>
          <p>
            A continuación, se presenta un resumen de la carta de cierre
            entregada a Pollos Copacabana:
          </p>
          <p>
            MVM Solutions confirma la culminación del proyecto para el
            desarrollo e implementación del Sistema ERP conforme a los Términos
            de Referencia y los acuerdos establecidos. El sistema entregado
            incluye los módulos de ventas, inventarios, control de sucursales y
            proveedores, finanzas, y control de usuarios. Además, se
            proporcionaron sesiones de capacitación, manuales de usuario y
            documentación técnica. Se garantiza soporte técnico durante los
            primeros 30 días.
          </p>
          <p>
            Este proyecto marcó un hito importante para Pollos Copacabana al
            centralizar sus operaciones y mejorar la eficiencia en la toma de
            decisiones estratégicas.
          </p>
        </>
      ),
      archivos: [
        {
          nombre: "Carta_de_cierre.pdf",
          url: "/downloads/Carta_de_cierre.pdf",
        },{
          nombre: "Manual_de_usuario.pdf",
          url: "/downloads/Manual_de_usuario.pdf",
        },
        {
          nombre: "Manual_del_programador.pdf",
          url: "/downloads/Manual_del_programador.pdf",
        }
      ],
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
