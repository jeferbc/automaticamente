import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'

const Faq = () => {
    const FaqContent1 = () => (
        <div className="collapse show">
            <div className="card-body">
                Nuestros clientes experimentan un ROI promedio de 400-600% en los primeros 12 meses. El ahorro típico incluye 
                50+ horas semanales por empleado, reducción del 90% en errores manuales y mejora del 300% en velocidad de procesamiento 
                de datos. El período de recuperación de la inversión es generalmente de 2-4 meses.
            </div>
        </div>
    );
    const FaqContent2 = () => (
        <div className="collapse show">
            <div className="card-body">
                Nuestro proceso incluye 5 fases: Consultoría inicial (1-2 días), Análisis profundo (3-5 días), Diseño de arquitectura 
                (5-7 días), Implementación y testing (1-3 semanas), y Monitoreo continuo. Automatizaciones simples pueden estar 
                funcionando en 48 horas, mientras que sistemas complejos toman 2-4 semanas.
            </div>
        </div>
    );
    const FaqContent3 = () => (
        <div className="collapse show">
            <div className="card-body">
                Sí, n8n es altamente escalable desde pequeños negocios hasta empresas Fortune 500. Utilizamos arquitectura en la nube 
                que crece automáticamente con tu demanda. Hemos implementado sistemas que procesan millones de transacciones diarias 
                sin pérdida de performance. Nuestros planes Enterprise incluyen infraestructura dedicada con SLA del 99.9%.
            </div>
        </div>
    );
    const FaqContent4 = () => (
        <div className="collapse show">
            <div className="card-body">
                Implementamos seguridad de nivel empresarial: cifrado end-to-end, autenticación de dos factores, logs de auditoría 
                completos y compliance con GDPR/CCPA. n8n al ser código abierto permite hosting privado para máximo control. 
                Realizamos auditorías de seguridad trimestrales y mantenemos certificaciones SOC 2 Type II.
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
                                    <AccordionItem className="card-header bg-primary" title="¿Cuál es el ROI real de automatizar mi negocio?">
                                        <FaqContent1 className="active" />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="¿Cómo es el proceso de implementación paso a paso?">
                                        <FaqContent2 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="¿Las automatizaciones pueden escalar con mi crecimiento?">
                                        <FaqContent3 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="¿Qué tan seguras son las automatizaciones para mis datos?">
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