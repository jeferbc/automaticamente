"use client";
import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../containers/common/header";
import FooterSection from "../../containers/layouts/sections/automaticamente/footer";
import Copyright from "../../containers/layouts/sections/automaticamente/copyright";

const TerminosCondiciones = () => {
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
                  <h4 className="text-center mb-4" style={{color: '#000000', fontWeight: '700'}}>Términos y Condiciones</h4>
                  <p className="text-center mb-5" style={{color: '#666666'}}>
                    <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
                  </p>

                  <div className="terms-content" style={{color: '#333333'}}>
                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>1. Información General</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Los presentes Términos y Condiciones regulan el uso de los servicios de automatización empresarial 
                    ofrecidos por Automaticamente ("nosotros", "nuestro", "la empresa"). Al contratar nuestros servicios, 
                    el usuario ("usted", "cliente") acepta cumplir con estos términos.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>2. Servicios Ofrecidos</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Ofrecemos servicios de consultoría, diseño, implementación y mantenimiento de automatizaciones 
                    empresariales utilizando la plataforma n8n y otras tecnologías de automatización. Nuestros servicios incluyen:
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}>Consultoría gratuita para análisis de procesos</li>
                    <li className="mb-2" style={{color: '#444444'}}>Diseño de flujos de automatización personalizados</li>
                    <li className="mb-2" style={{color: '#444444'}}>Implementación de soluciones de automatización</li>
                    <li className="mb-2" style={{color: '#444444'}}>Mantenimiento y optimización continua</li>
                    <li className="mb-2" style={{color: '#444444'}}>Soporte técnico especializado</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>3. Planes y Facturación</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Ofrecemos diferentes planes de servicio con facturación mensual. Los precios y características 
                    de cada plan están detallados en nuestro sitio web. Los pagos se procesan mensualmente y de forma 
                    anticipada.
                  </p>
                  <h6 className="mt-3 mb-2" style={{color: '#1a1a1a', fontWeight: '500'}}>3.1 Política de Cancelación</h6>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Los clientes pueden cancelar su suscripción en cualquier momento con un aviso previo de 30 días. 
                    Las automatizaciones implementadas permanecerán activas hasta el final del período facturado.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>4. Responsabilidades del Cliente</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>El cliente se compromete a:</p>
                  <ul className="mb-3">
                    <li className="mb-2" style={{color: '#444444'}}>Proporcionar información precisa y completa sobre sus procesos empresariales</li>
                    <li className="mb-2" style={{color: '#444444'}}>Colaborar activamente durante la fase de implementación</li>
                    <li className="mb-2" style={{color: '#444444'}}>Mantener la confidencialidad de las credenciales de acceso</li>
                    <li className="mb-2" style={{color: '#444444'}}>Notificar cualquier cambio en sus sistemas que pueda afectar las automatizaciones</li>
                  </ul>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>5. Propiedad Intelectual</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Los flujos de automatización desarrollados específicamente para el cliente serán de su propiedad. 
                    Sin embargo, conservamos los derechos sobre las metodologías, plantillas y conocimientos generales 
                    utilizados en el desarrollo.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>6. Confidencialidad y Protección de Datos</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Nos comprometemos a mantener la confidencialidad de toda la información empresarial del cliente. 
                    El tratamiento de datos personales se realiza conforme a nuestra Política de Privacidad y el 
                    Reglamento General de Protección de Datos (RGPD).
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>7. Limitación de Responsabilidad</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Nuestros servicios se prestan con la máxima diligencia profesional. No obstante, no garantizamos 
                    resultados específicos ni nos hacemos responsables de interrupciones en servicios de terceros 
                    que puedan afectar el funcionamiento de las automatizaciones.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>8. Modificaciones</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones 
                    serán comunicadas a los clientes con al menos 30 días de antelación y estarán disponibles en 
                    nuestro sitio web.
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>9. Ley Aplicable y Jurisdicción</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Estos términos se regirán por la legislación española. Para cualquier controversia, las partes 
                    se someten a la jurisdicción de los tribunales de [Ciudad, España].
                  </p>

                  <h5 className="mt-4 mb-3" style={{color: '#000000', fontWeight: '600'}}>10. Contacto</h5>
                  <p style={{color: '#333333', lineHeight: '1.7'}}>
                    Para cualquier consulta relacionada con estos términos y condiciones, puede contactarnos a 
                    través de nuestro formulario de contacto o enviando un email a info@automaticamente.com.
                  </p>
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

export default TerminosCondiciones;