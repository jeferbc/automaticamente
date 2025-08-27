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
      <section className="terms-section pt-120 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="terms-content">
                <h1 className="text-center mb-5">Términos y Condiciones</h1>
                <p className="text-muted text-center mb-5">
                  <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
                </p>

                <div className="terms-text">
                  <h2>1. Información General</h2>
                  <p>
                    Los presentes Términos y Condiciones regulan el uso de los servicios de automatización empresarial 
                    ofrecidos por Automaticamente ("nosotros", "nuestro", "la empresa"). Al contratar nuestros servicios, 
                    el usuario ("usted", "cliente") acepta cumplir con estos términos.
                  </p>

                  <h2>2. Servicios Ofrecidos</h2>
                  <p>
                    Ofrecemos servicios de consultoría, diseño, implementación y mantenimiento de automatizaciones 
                    empresariales utilizando la plataforma n8n y otras tecnologías de automatización. Nuestros servicios incluyen:
                  </p>
                  <ul>
                    <li>Consultoría gratuita para análisis de procesos</li>
                    <li>Diseño de flujos de automatización personalizados</li>
                    <li>Implementación de soluciones de automatización</li>
                    <li>Mantenimiento y optimización continua</li>
                    <li>Soporte técnico especializado</li>
                  </ul>

                  <h2>3. Planes y Facturación</h2>
                  <p>
                    Ofrecemos diferentes planes de servicio con facturación mensual. Los precios y características 
                    de cada plan están detallados en nuestro sitio web. Los pagos se procesan mensualmente y de forma 
                    anticipada.
                  </p>
                  <h3>3.1 Política de Cancelación</h3>
                  <p>
                    Los clientes pueden cancelar su suscripción en cualquier momento con un aviso previo de 30 días. 
                    Las automatizaciones implementadas permanecerán activas hasta el final del período facturado.
                  </p>

                  <h2>4. Responsabilidades del Cliente</h2>
                  <p>El cliente se compromete a:</p>
                  <ul>
                    <li>Proporcionar información precisa y completa sobre sus procesos empresariales</li>
                    <li>Colaborar activamente durante la fase de implementación</li>
                    <li>Mantener la confidencialidad de las credenciales de acceso</li>
                    <li>Notificar cualquier cambio en sus sistemas que pueda afectar las automatizaciones</li>
                  </ul>

                  <h2>5. Propiedad Intelectual</h2>
                  <p>
                    Los flujos de automatización desarrollados específicamente para el cliente serán de su propiedad. 
                    Sin embargo, conservamos los derechos sobre las metodologías, plantillas y conocimientos generales 
                    utilizados en el desarrollo.
                  </p>

                  <h2>6. Confidencialidad y Protección de Datos</h2>
                  <p>
                    Nos comprometemos a mantener la confidencialidad de toda la información empresarial del cliente. 
                    El tratamiento de datos personales se realiza conforme a nuestra Política de Privacidad y el 
                    Reglamento General de Protección de Datos (RGPD).
                  </p>

                  <h2>7. Limitación de Responsabilidad</h2>
                  <p>
                    Nuestros servicios se prestan con la máxima diligencia profesional. No obstante, no garantizamos 
                    resultados específicos ni nos hacemos responsables de interrupciones en servicios de terceros 
                    que puedan afectar el funcionamiento de las automatizaciones.
                  </p>

                  <h2>8. Modificaciones</h2>
                  <p>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones 
                    serán comunicadas a los clientes con al menos 30 días de antelación y estarán disponibles en 
                    nuestro sitio web.
                  </p>

                  <h2>9. Ley Aplicable y Jurisdicción</h2>
                  <p>
                    Estos términos se regirán por la legislación española. Para cualquier controversia, las partes 
                    se someten a la jurisdicción de los tribunales de [Ciudad, España].
                  </p>

                  <h2>10. Contacto</h2>
                  <p>
                    Para cualquier consulta relacionada con estos términos y condiciones, puede contactarnos a 
                    través de nuestro formulario de contacto o enviando un email a info@automaticamente.com.
                  </p>
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