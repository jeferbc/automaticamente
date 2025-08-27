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
      <section className="saas1 faq pt-120 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="faq-block">
                <div>
                  <h4 className="text-center mb-4" style={{color: '#000000', fontWeight: '700'}}>Política de Privacidad</h4>
                  <p className="text-center mb-5" style={{color: '#666666'}}>
                    <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
                  </p>

                  <div className="privacy-content" style={{color: '#333333'}}>
                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>1. Información del Responsable</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    <strong>Automaticamente</strong> es el responsable del tratamiento de sus datos personales. 
                    Puede contactar con nosotros a través de info@automaticamente.com para cualquier consulta 
                    relacionada con la protección de datos.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>2. Datos que Recopilamos</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>Recopilamos los siguientes tipos de información:</p>
                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>2.1 Información de Contacto</h6>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}>Nombre completo</li>
                    <li className="mb-2" style={{color: '#444444'}}>Dirección de correo electrónico</li>
                    <li className="mb-2" style={{color: '#444444'}}>Número de teléfono</li>
                    <li className="mb-2" style={{color: '#444444'}}>Empresa y cargo</li>
                  </ul>

                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>2.2 Información Técnica</h6>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}>Dirección IP</li>
                    <li className="mb-2" style={{color: '#444444'}}>Tipo de navegador y dispositivo</li>
                    <li className="mb-2" style={{color: '#444444'}}>Páginas visitadas en nuestro sitio</li>
                    <li className="mb-2" style={{color: '#444444'}}>Tiempo de permanencia y patrones de navegación</li>
                  </ul>

                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>2.3 Información Empresarial</h6>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}>Descripción de procesos empresariales</li>
                    <li className="mb-2" style={{color: '#444444'}}>Necesidades de automatización</li>
                    <li className="mb-2" style={{color: '#444444'}}>Datos técnicos de sistemas utilizados</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>3. Finalidad del Tratamiento</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>Utilizamos sus datos personales para:</p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}>Proporcionar consultoría gratuita y servicios de automatización</li>
                    <li className="mb-2" style={{color: '#444444'}}>Comunicarnos con usted sobre nuestros servicios</li>
                    <li className="mb-2" style={{color: '#444444'}}>Procesar y gestionar contratos y facturación</li>
                    <li className="mb-2" style={{color: '#444444'}}>Enviar información comercial (con su consentimiento previo)</li>
                    <li className="mb-2" style={{color: '#444444'}}>Mejorar nuestros servicios y sitio web</li>
                    <li className="mb-2" style={{color: '#444444'}}>Cumplir con obligaciones legales</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>4. Base Legal</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>El tratamiento de sus datos se basa en:</p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Ejecución contractual:</strong> Para prestar los servicios contratados</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicación comercial</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Consentimiento:</strong> Para envío de newsletter y comunicaciones promocionales</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Cumplimiento legal:</strong> Para obligaciones fiscales y contables</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>5. Conservación de Datos</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Conservamos sus datos personales durante el tiempo necesario para las finalidades indicadas:
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Datos de clientes:</strong> Durante la relación contractual y 6 años adicionales (obligaciones fiscales)</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Datos de prospección comercial:</strong> Hasta que retire el consentimiento</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Datos técnicos web:</strong> Máximo 2 años desde la recopilación</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>6. Compartir Información</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    No vendemos ni alquilamos sus datos personales. Podemos compartir información limitada con:
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Proveedores de servicios:</strong> Necesarios para la prestación de servicios (hosting, email, etc.)</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Autoridades:</strong> Cuando sea requerido por ley</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Terceros:</strong> Solo con su consentimiento expreso</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>7. Transferencias Internacionales</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Algunos de nuestros proveedores pueden estar ubicados fuera del Espacio Económico Europeo. 
                    En estos casos, garantizamos que se implementan las medidas de seguridad adecuadas conforme 
                    al RGPD.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>8. Seguridad de los Datos</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales 
                    contra el acceso no autorizado, pérdida, destrucción o alteración, incluyendo:
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}>Cifrado de datos en tránsito y en reposo</li>
                    <li className="mb-2" style={{color: '#444444'}}>Control de acceso y autenticación</li>
                    <li className="mb-2" style={{color: '#444444'}}>Copias de seguridad regulares</li>
                    <li className="mb-2" style={{color: '#444444'}}>Formación del personal en protección de datos</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>9. Sus Derechos</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>Conforme al RGPD, tiene derecho a:</p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Rectificación:</strong> Corregir datos inexactos</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Limitación:</strong> Restringir el tratamiento en ciertos casos</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>Oposición:</strong> Oponerse al tratamiento por interés legítimo</li>
                    <li className="mb-2" style={{color: '#444444'}}><strong>No decisiones automatizadas:</strong> No ser objeto de decisiones basadas únicamente en tratamiento automatizado</li>
                  </ul>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Para ejercer estos derechos, contacte con nosotros en info@automaticamente.com. 
                    También puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>10. Cookies y Tecnologías Similares</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Utilizamos cookies y tecnologías similares para mejorar la experiencia de usuario. 
                    Consulte nuestra <a href="/politica-cookies" style={{color: '#1a1a1a', textDecoration: 'underline'}}>Política de Cookies</a> para más información.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>11. Modificaciones</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Esta política puede ser actualizada periódicamente. Le notificaremos los cambios significativos 
                    por email o a través de nuestro sitio web.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>12. Contacto</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Para cualquier consulta sobre esta política de privacidad o el tratamiento de sus datos 
                    personales, contacte con nosotros:
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

export default PoliticaPrivacidad;