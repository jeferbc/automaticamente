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
      <section className="saas1 faq pt-120 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="faq-block">
                <div>
                  <h4 className="text-center mb-4" style={{color: '#000000', fontWeight: '700'}}>Política de Cookies</h4>
                  <p className="text-center mb-5" style={{color: '#666666'}}>
                    <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
                  </p>

                  <div className="cookies-content" style={{color: '#333333'}}>
                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>1. ¿Qué son las Cookies?</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
                    nuestro sitio web. Nos permiten reconocer su navegador y recordar cierta información sobre 
                    sus preferencias o acciones anteriores.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>2. ¿Cómo Utilizamos las Cookies?</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico 
                    y personalizar el contenido. Específicamente, las cookies nos ayudan a:
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}>Mantener sus preferencias de navegación</li>
                    <li className="mb-2" style={{color: '#444444'}}>Recordar información de formularios</li>
                    <li className="mb-2" style={{color: '#444444'}}>Analizar el rendimiento del sitio web</li>
                    <li className="mb-2" style={{color: '#444444'}}>Personalizar contenido y publicidad</li>
                    <li className="mb-2" style={{color: '#444444'}}>Proporcionar funciones de redes sociales</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>3. Tipos de Cookies que Utilizamos</h5>
                  
                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>3.1 Cookies Técnicas o Necesarias</h6>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Son esenciales para el funcionamiento básico del sitio web. Sin estas cookies, 
                    el sitio no puede funcionar correctamente.
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cookies de sesión:</strong> Mantienen la sesión activa durante su visita</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cookies de seguridad:</strong> Protegen contra ataques maliciosos</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cookies de funcionamiento:</strong> Permiten la navegación básica del sitio</li>
                  </ul>

                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>3.2 Cookies de Análisis</h6>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, 
                    recopilando información de forma anónima.
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Google Analytics:</strong> Analiza el tráfico y comportamiento de usuarios</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cookies de rendimiento:</strong> Miden la velocidad y rendimiento del sitio</li>
                  </ul>

                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>3.3 Cookies de Personalización</h6>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Permiten recordar sus preferencias y personalizar su experiencia en futuras visitas.
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Preferencias de idioma:</strong> Recuerdan su idioma preferido</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Configuración de interfaz:</strong> Mantienen sus ajustes de visualización</li>
                  </ul>

                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>3.4 Cookies de Marketing</h6>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Se utilizan para mostrar publicidad relevante y medir la efectividad de nuestras 
                    campañas publicitarias.
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cookies de redes sociales:</strong> Facilitan el intercambio de contenido</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cookies publicitarias:</strong> Personalizan anuncios según sus intereses</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>4. Cookies de Terceros</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Algunos de nuestros socios pueden establecer cookies en nuestro sitio web:
                  </p>
                  
                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>4.1 Google Analytics</h6>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Utilizamos Google Analytics para analizar el uso del sitio web. Google puede 
                    utilizar estos datos para contextualizar y personalizar anuncios en su red publicitaria.
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cookies utilizadas:</strong> _ga, _ga_[ID], _gid</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Duración:</strong> Entre 24 horas y 2 años</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Más información:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style={{color: '#1a1a1a', textDecoration: 'underline'}}>Política de Privacidad de Google</a></li>
                  </ul>

                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>4.2 Redes Sociales</h6>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Los botones de redes sociales pueden establecer cookies cuando interactúa con ellos:
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>LinkedIn:</strong> Cookies para funcionalidad de compartir</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Twitter/X:</strong> Cookies para widgets de Twitter</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Facebook:</strong> Cookies para plugins sociales</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>5. Duración de las Cookies</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>Las cookies que utilizamos tienen diferentes duraciones:</p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cookies de sesión:</strong> Se eliminan cuando cierra el navegador</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cookies persistentes:</strong> Permanecen durante un período determinado (desde días hasta años)</li>
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

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>6. Gestión de Cookies</h5>
                  
                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>6.1 Configuración del Navegador</h6>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Puede configurar su navegador para aceptar o rechazar cookies, o para que 
                    le notifique cuando se envía una cookie:
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Firefox:</strong> Preferencias → Privacidad y seguridad → Cookies</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
                  </ul>

                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>6.2 Herramientas de Exclusión</h6>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>Para opt-out de cookies específicas:</p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" style={{color: '#1a1a1a', textDecoration: 'underline'}}>Complemento de exclusión</a></li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Publicidad personalizada:</strong> <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener" style={{color: '#1a1a1a', textDecoration: 'underline'}}>Your Online Choices</a></li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>7. Consecuencias de Deshabilitar Cookies</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Si decide deshabilitar las cookies, algunas funcionalidades del sitio web 
                    pueden verse afectadas:
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}>Pérdida de preferencias personalizadas</li>
                    <li className="mb-2" style={{color: '#444444'}}>Necesidad de reintroducir información en cada visita</li>
                    <li className="mb-2" style={{color: '#444444'}}>Funcionalidades limitadas en formularios</li>
                    <li className="mb-2" style={{color: '#444444'}}>Experiencia de usuario menos optimizada</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>8. Actualizaciones de la Política</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Esta política de cookies puede actualizarse periódicamente para reflejar 
                    cambios en nuestras prácticas o en la legislación aplicable. Le recomendamos 
                    revisarla regularmente.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>9. Consentimiento</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies 
                    conforme a esta política. Para cookies no esenciales, solicitaremos su 
                    consentimiento expreso a través de nuestro banner de cookies.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>10. Contacto</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Si tiene preguntas sobre nuestra política de cookies o desea ejercer sus 
                    derechos relacionados con el tratamiento de datos personales, puede contactarnos:
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Email:</strong> info@automaticamente.com</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Formulario de contacto:</strong> Disponible en nuestro sitio web</li>
                  </ul>
                  </div>
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