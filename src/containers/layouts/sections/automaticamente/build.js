import React from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 1 }
        }
    ]
};

const Build = () => (
    <section className="saas1 build-bg">
        <div className="build-right-slider">
            <Slider className="owl-carousel owl-theme sync2" id="sync2" {...settings}>
                <div className="item">
                    <img alt="workflow-automation" className="img-fluid work-slide" src="/assets/images/saas1/work.png" />
                </div>
                <div className="item">
                    <img alt="n8n-automation" className="img-fluid work-slide" src="/assets/images/saas1/work.png" />
                </div>
                <div className="item">
                    <img alt="proceso-automatizado" className="img-fluid work-slide" src="/assets/images/saas1/work.png" />
                </div>
            </Slider>
        </div>
        <Container>
            <Row>
                <Col lg="6">
                    <Slider className="sync1 owl-carousel owl-theme overflow-hidden" id="sync1" {...settings}>
                        <div className="item">
                            <div className="build-box">
                                <h3 className="build-head text-white"><span className="theme-color">Construyamos </span>Tu Automatización
                                Perfecta. Juntos</h3>
                                <p>Transformamos procesos manuales complejos en flujos automáticos inteligentes. Con n8n, 
                                   conectamos todas tus herramientas para que trabajen en sincronía perfecta.</p>
                                <ul>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Consultoría gratuita para 
                                        identificar oportunidades de automatización
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Implementación 100% personalizada 
                                        según tus procesos actuales
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Somos expertos certificados 
                                        en n8n con casos de éxito comprobados
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Nos encanta escucharte para 
                                        discutir tus desafíos de automatización
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="item">
                            <div className="build-box">
                                <h3 className="build-head text-white"><span className="theme-color">Integración </span>Sin 
                                Límites de Aplicaciones</h3>
                                <p>Conectamos CRM, email marketing, hojas de cálculo, bases de datos, sistemas de facturación 
                                   y cualquier herramienta que uses. Todo funcionando como un ecosistema unificado.</p>
                                <ul>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Integraciones nativas con 
                                        Salesforce, HubSpot, Gmail, Slack y +300 apps
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Sincronización en tiempo real 
                                        entre todas tus herramientas
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Webhooks personalizados para 
                                        aplicaciones específicas de tu industria
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />APIs robustas que garantizan 
                                        confiabilidad 24/7
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="item">
                            <div className="build-box">
                                <h3 className="build-head text-white"><span className="theme-color">ROI </span>Medible 
                                Desde el Primer Día</h3>
                                <p>Nuestros clientes ven resultados inmediatos. Reducción de errores humanos, ahorro de tiempo 
                                   y mayor productividad son solo el comienzo de la transformación.</p>
                                <ul>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Reducción del 90% en tareas 
                                        manuales repetitivas
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Ahorro promedio de 40 horas 
                                        semanales por empleado
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Eliminación de errores humanos 
                                        en procesos críticos
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />Reportes automáticos y 
                                        dashboards en tiempo real
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Build;