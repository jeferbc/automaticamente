"use client";
import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../containers/common/header";
import FooterSection from "../../containers/layouts/sections/automaticamente/footer";
import Copyright from "../../containers/layouts/sections/automaticamente/copyright";

const PoliticaPrivacidad = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#2563eb");
    document.body.style.setProperty("--secondary", "#1e40af");
    document.body.style.setProperty("--light", "#3b82f6");
    document.body.style.setProperty("--dark", "#1d4ed8");
  });

  return (
    <div>
      <Header className="saas1" />
      <section className="privacy-section pt-120 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="privacy-content">
                <h1 className="text-center mb-5">Política de Privacidad</h1>
                <p className="text-muted text-center mb-5">
                  <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
                </p>

                <div className="privacy-text">
                  <h2>1. Información del Responsable</h2>
                  <p>
                    <strong>Automaticamente</strong> es el responsable del tratamiento de sus datos personales. 
                    Puede contactar con nosotros a través de info@automaticamente.com para cualquier consulta 
                    relacionada con la protección de datos.
                  </p>

                  <h2>2. Datos que Recopilamos</h2>
                  <p>Recopilamos los siguientes tipos de información:</p>
                  <h3>2.1 Información de Contacto</h3>
                  <ul>
                    <li>Nombre completo</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Empresa y cargo</li>
                  </ul>

                  <h3>2.2 Información Técnica</h3>
                  <ul>
                    <li>Dirección IP</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas en nuestro sitio</li>
                    <li>Tiempo de permanencia y patrones de navegación</li>
                  </ul>

                  <h3>2.3 Información Empresarial</h3>
                  <ul>
                    <li>Descripción de procesos empresariales</li>
                    <li>Necesidades de automatización</li>
                    <li>Datos técnicos de sistemas utilizados</li>
                  </ul>

                  <h2>3. Finalidad del Tratamiento</h2>
                  <p>Utilizamos sus datos personales para:</p>
                  <ul>
                    <li>Proporcionar consultoría gratuita y servicios de automatización</li>
                    <li>Comunicarnos con usted sobre nuestros servicios</li>
                    <li>Procesar y gestionar contratos y facturación</li>
                    <li>Enviar información comercial (con su consentimiento previo)</li>
                    <li>Mejorar nuestros servicios y sitio web</li>
                    <li>Cumplir con obligaciones legales</li>
                  </ul>

                  <h2>4. Base Legal</h2>
                  <p>El tratamiento de sus datos se basa en:</p>
                  <ul>
                    <li><strong>Ejecución contractual:</strong> Para prestar los servicios contratados</li>
                    <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicación comercial</li>
                    <li><strong>Consentimiento:</strong> Para envío de newsletter y comunicaciones promocionales</li>
                    <li><strong>Cumplimiento legal:</strong> Para obligaciones fiscales y contables</li>
                  </ul>

                  <h2>5. Conservación de Datos</h2>
                  <p>
                    Conservamos sus datos personales durante el tiempo necesario para las finalidades indicadas:
                  </p>
                  <ul>
                    <li><strong>Datos de clientes:</strong> Durante la relación contractual y 6 años adicionales (obligaciones fiscales)</li>
                    <li><strong>Datos de prospección comercial:</strong> Hasta que retire el consentimiento</li>
                    <li><strong>Datos técnicos web:</strong> Máximo 2 años desde la recopilación</li>
                  </ul>

                  <h2>6. Compartir Información</h2>
                  <p>
                    No vendemos ni alquilamos sus datos personales. Podemos compartir información limitada con:
                  </p>
                  <ul>
                    <li><strong>Proveedores de servicios:</strong> Necesarios para la prestación de servicios (hosting, email, etc.)</li>
                    <li><strong>Autoridades:</strong> Cuando sea requerido por ley</li>
                    <li><strong>Terceros:</strong> Solo con su consentimiento expreso</li>
                  </ul>

                  <h2>7. Transferencias Internacionales</h2>
                  <p>
                    Algunos de nuestros proveedores pueden estar ubicados fuera del Espacio Económico Europeo. 
                    En estos casos, garantizamos que se implementan las medidas de seguridad adecuadas conforme 
                    al RGPD.
                  </p>

                  <h2>8. Seguridad de los Datos</h2>
                  <p>
                    Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales 
                    contra el acceso no autorizado, pérdida, destrucción o alteración, incluyendo:
                  </p>
                  <ul>
                    <li>Cifrado de datos en tránsito y en reposo</li>
                    <li>Control de acceso y autenticación</li>
                    <li>Copias de seguridad regulares</li>
                    <li>Formación del personal en protección de datos</li>
                  </ul>

                  <h2>9. Sus Derechos</h2>
                  <p>Conforme al RGPD, tiene derecho a:</p>
                  <ul>
                    <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                    <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                    <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                    <li><strong>Limitación:</strong> Restringir el tratamiento en ciertos casos</li>
                    <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                    <li><strong>Oposición:</strong> Oponerse al tratamiento por interés legítimo</li>
                    <li><strong>No decisiones automatizadas:</strong> No ser objeto de decisiones basadas únicamente en tratamiento automatizado</li>
                  </ul>
                  <p>
                    Para ejercer estos derechos, contacte con nosotros en info@automaticamente.com. 
                    También puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
                  </p>

                  <h2>10. Cookies y Tecnologías Similares</h2>
                  <p>
                    Utilizamos cookies y tecnologías similares para mejorar la experiencia de usuario. 
                    Consulte nuestra <a href="/politica-cookies">Política de Cookies</a> para más información.
                  </p>

                  <h2>11. Modificaciones</h2>
                  <p>
                    Esta política puede ser actualizada periódicamente. Le notificaremos los cambios significativos 
                    por email o a través de nuestro sitio web.
                  </p>

                  <h2>12. Contacto</h2>
                  <p>
                    Para cualquier consulta sobre esta política de privacidad o el tratamiento de sus datos 
                    personales, contacte con nosotros:
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

export default PoliticaPrivacidad;