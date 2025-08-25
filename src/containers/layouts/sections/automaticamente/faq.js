import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'

const Faq = () => {
    const FaqContent1 = () => (
        <div className="collapse show">
            <div className="card-body">
                n8n es una plataforma de automatización de código abierto que te permite conectar cualquier aplicación con cualquier otra. 
                A diferencia de Zapier o Make, n8n no tiene limitaciones en el número de operaciones y puedes desplegarlo en tu propia infraestructura, 
                garantizando total control de tus datos.
            </div>
        </div>
    );
    const FaqContent2 = () => (
        <div className="collapse show">
            <div className="card-body">
                Dependiendo de la complejidad, una automatización simple puede estar funcionando en 1-2 días, mientras que integraciones 
                complejas pueden tomar 1-2 semanas. Siempre proporcionamos un timeline detallado antes de comenzar.
            </div>
        </div>
    );
    const FaqContent3 = () => (
        <div className="collapse show">
            <div className="card-body">
                n8n tiene más de 300 integraciones nativas incluyendo Salesforce, HubSpot, Gmail, Slack, Google Sheets, MySQL, PostgreSQL, 
                y muchas más. Si tu aplicación no está disponible nativamente, podemos crear integraciones personalizadas.
            </div>
        </div>
    );
    const FaqContent4 = () => (
        <div className="collapse show">
            <div className="card-body">
                Nuestros clientes típicamente ven un ROI de 300-500% en el primer año. El ahorro promedio es de 40 horas semanales por empleado 
                en tareas repetitivas, además de reducir errores humanos significativamente.
            </div>
        </div>
    );
    return (
        <section className="saas1 faq" id="faq">
            <Container>
                <Row>
                    <Col md="8">
                        <div className="faq-block">
                            <div>
                                <h3 className="frequent-text">Preguntas Frecuentes</h3>
                                <h6>Resolvemos las dudas más comunes sobre automatización de procesos con n8n. 
                                    Si tienes alguna pregunta específica, no dudes en contactarnos.</h6>
                                <Accordion atomic={true}>
                                    <AccordionItem className="card-header bg-primary" title="¿Qué es n8n y por qué es mejor que otras plataformas?">
                                        <FaqContent1 className="active" />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="¿Cuánto tiempo toma implementar una automatización?">
                                        <FaqContent2 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="¿Qué aplicaciones pueden integrarse con n8n?">
                                        <FaqContent3 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="¿Cuál es el ROI típico de automatizar procesos?">
                                        <FaqContent4 />
                                    </AccordionItem>
                                </Accordion>
                                <h6 className="link">¿Tienes más preguntas? Contáctanos: <a>hola@automaticamente.co</a></h6>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="faq-img-block">
                            <img alt="faq-person" className="img-fluid" src="/assets/images/saas1/faq-img.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faq;