"use client";
import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../containers/common/header";
import FooterSection from "../../containers/layouts/sections/automaticamente/footer";
import Copyright from "../../containers/layouts/sections/automaticamente/copyright";

const PoliticaCookies = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#2563eb");
    document.body.style.setProperty("--secondary", "#1e40af");
    document.body.style.setProperty("--light", "#3b82f6");
    document.body.style.setProperty("--dark", "#1d4ed8");
  });

  return (
    <div>
      <Header className="saas1" />
      <section className="cookies-section pt-120 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="cookies-content">
                <h1 className="text-center mb-5">Política de Cookies</h1>
                <p className="text-muted text-center mb-5">
                  <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
                </p>

                <div className="cookies-text">
                  <h2>1. ¿Qué son las Cookies?</h2>
                  <p>
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
                    nuestro sitio web. Nos permiten reconocer su navegador y recordar cierta información sobre 
                    sus preferencias o acciones anteriores.
                  </p>

                  <h2>2. ¿Cómo Utilizamos las Cookies?</h2>
                  <p>
                    Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico 
                    y personalizar el contenido. Específicamente, las cookies nos ayudan a:
                  </p>
                  <ul>
                    <li>Mantener sus preferencias de navegación</li>
                    <li>Recordar información de formularios</li>
                    <li>Analizar el rendimiento del sitio web</li>
                    <li>Personalizar contenido y publicidad</li>
                    <li>Proporcionar funciones de redes sociales</li>
                  </ul>

                  <h2>3. Tipos de Cookies que Utilizamos</h2>
                  
                  <h3>3.1 Cookies Técnicas o Necesarias</h3>
                  <p>
                    Son esenciales para el funcionamiento básico del sitio web. Sin estas cookies, 
                    el sitio no puede funcionar correctamente.
                  </p>
                  <ul>
                    <li><strong>Cookies de sesión:</strong> Mantienen la sesión activa durante su visita</li>
                    <li><strong>Cookies de seguridad:</strong> Protegen contra ataques maliciosos</li>
                    <li><strong>Cookies de funcionamiento:</strong> Permiten la navegación básica del sitio</li>
                  </ul>

                  <h3>3.2 Cookies de Análisis</h3>
                  <p>
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, 
                    recopilando información de forma anónima.
                  </p>
                  <ul>
                    <li><strong>Google Analytics:</strong> Analiza el tráfico y comportamiento de usuarios</li>
                    <li><strong>Cookies de rendimiento:</strong> Miden la velocidad y rendimiento del sitio</li>
                  </ul>

                  <h3>3.3 Cookies de Personalización</h3>
                  <p>
                    Permiten recordar sus preferencias y personalizar su experiencia en futuras visitas.
                  </p>
                  <ul>
                    <li><strong>Preferencias de idioma:</strong> Recuerdan su idioma preferido</li>
                    <li><strong>Configuración de interfaz:</strong> Mantienen sus ajustes de visualización</li>
                  </ul>

                  <h3>3.4 Cookies de Marketing</h3>
                  <p>
                    Se utilizan para mostrar publicidad relevante y medir la efectividad de nuestras 
                    campañas publicitarias.
                  </p>
                  <ul>
                    <li><strong>Cookies de redes sociales:</strong> Facilitan el intercambio de contenido</li>
                    <li><strong>Cookies publicitarias:</strong> Personalizan anuncios según sus intereses</li>
                  </ul>

                  <h2>4. Cookies de Terceros</h2>
                  <p>
                    Algunos de nuestros socios pueden establecer cookies en nuestro sitio web:
                  </p>
                  
                  <h3>4.1 Google Analytics</h3>
                  <p>
                    Utilizamos Google Analytics para analizar el uso del sitio web. Google puede 
                    utilizar estos datos para contextualizar y personalizar anuncios en su red publicitaria.
                  </p>
                  <ul>
                    <li><strong>Cookies utilizadas:</strong> _ga, _ga_[ID], _gid</li>
                    <li><strong>Duración:</strong> Entre 24 horas y 2 años</li>
                    <li><strong>Más información:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de Privacidad de Google</a></li>
                  </ul>

                  <h3>4.2 Redes Sociales</h3>
                  <p>
                    Los botones de redes sociales pueden establecer cookies cuando interactúa con ellos:
                  </p>
                  <ul>
                    <li><strong>LinkedIn:</strong> Cookies para funcionalidad de compartir</li>
                    <li><strong>Twitter/X:</strong> Cookies para widgets de Twitter</li>
                    <li><strong>Facebook:</strong> Cookies para plugins sociales</li>
                  </ul>

                  <h2>5. Duración de las Cookies</h2>
                  <p>Las cookies que utilizamos tienen diferentes duraciones:</p>
                  <ul>
                    <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierra el navegador</li>
                    <li><strong>Cookies persistentes:</strong> Permanecen durante un período determinado (desde días hasta años)</li>
                  </ul>

                  <table className="table table-striped mt-4">
                    <thead>
                      <tr>
                        <th>Tipo de Cookie</th>
                        <th>Nombre</th>
                        <th>Duración</th>
                        <th>Propósito</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Técnica</td>
                        <td>PHPSESSID</td>
                        <td>Sesión</td>
                        <td>Identificador de sesión</td>
                      </tr>
                      <tr>
                        <td>Analítica</td>
                        <td>_ga</td>
                        <td>2 años</td>
                        <td>Google Analytics - identificador único</td>
                      </tr>
                      <tr>
                        <td>Analítica</td>
                        <td>_gid</td>
                        <td>24 horas</td>
                        <td>Google Analytics - identificador de sesión</td>
                      </tr>
                    </tbody>
                  </table>

                  <h2>6. Gestión de Cookies</h2>
                  
                  <h3>6.1 Configuración del Navegador</h3>
                  <p>
                    Puede configurar su navegador para aceptar o rechazar cookies, o para que 
                    le notifique cuando se envía una cookie:
                  </p>
                  <ul>
                    <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                    <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad → Cookies</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                    <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
                  </ul>

                  <h3>6.2 Herramientas de Exclusión</h3>
                  <p>Para opt-out de cookies específicas:</p>
                  <ul>
                    <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Complemento de exclusión</a></li>
                    <li><strong>Publicidad personalizada:</strong> <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener">Your Online Choices</a></li>
                  </ul>

                  <h2>7. Consecuencias de Deshabilitar Cookies</h2>
                  <p>
                    Si decide deshabilitar las cookies, algunas funcionalidades del sitio web 
                    pueden verse afectadas:
                  </p>
                  <ul>
                    <li>Pérdida de preferencias personalizadas</li>
                    <li>Necesidad de reintroducir información en cada visita</li>
                    <li>Funcionalidades limitadas en formularios</li>
                    <li>Experiencia de usuario menos optimizada</li>
                  </ul>

                  <h2>8. Actualizaciones de la Política</h2>
                  <p>
                    Esta política de cookies puede actualizarse periódicamente para reflejar 
                    cambios en nuestras prácticas o en la legislación aplicable. Le recomendamos 
                    revisarla regularmente.
                  </p>

                  <h2>9. Consentimiento</h2>
                  <p>
                    Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies 
                    conforme a esta política. Para cookies no esenciales, solicitaremos su 
                    consentimiento expreso a través de nuestro banner de cookies.
                  </p>

                  <h2>10. Contacto</h2>
                  <p>
                    Si tiene preguntas sobre nuestra política de cookies o desea ejercer sus 
                    derechos relacionados con el tratamiento de datos personales, puede contactarnos:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> info@automaticamente.com</li>
                    <li><strong>Formulario de contacto:</strong> Disponible en nuestro sitio web</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterSection />
      <Copyright />
    </div>
  );
};

export default PoliticaCookies;