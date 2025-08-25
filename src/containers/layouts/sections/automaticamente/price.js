import React from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                dots:true
            }
        },
        {
            breakpoint:991,
            settings:{
                slidesToShow:1,
                centerPadding: "160px",
                padding:"20px",
                slidesToScroll:1,
                centerMode:true,
                autoplay:true,
                dots:true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }
    ]
};

const Price = () => {
    return (
        <section className="saas1 pricing" id="precios">
            <Container>
                <Col md="12" className="text-center">
                    <div className="title">
                        <img alt="title-logo" className="img-fluid" src="/assets/images/saas1/title-logo.png" />
                        <div className="main-title">
                            <h2 className="text-white">
                                <span className="theme-color">N</span>uestros <span className="theme-color">P</span>lanes
                        </h2>
                        </div>
                        <hr />
                        <div className="sub-title">
                            <p className="p-padding text-white">Planes flexibles adaptados a tu nivel de automatización. 
                            Desde consultoría inicial hasta transformación digital completa, tenemos la solución perfecta para tu negocio.</p>
                        </div>
                    </div>
                </Col>
            </Container>
            <Container>
                <div className="wrapper-full">
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12" className="text-center">
                            <Slider className="owl-carousel owl-theme pricing-slider plan-box" {...settings}>
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">consultoría</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">$<span>0</span>/Sesión</h4>
                                        <ul className="p-0">
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>1 </span>
                                                Sesión gratuita de 60 minutos
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Análisis de procesos
                                                actuales
                                            </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" />Identificación de oportunidades
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Propuesta personalizada
                                            </li>
                                            <li>Roadmap de automatización</li>
                                            <li>Estimación de ROI</li>
                                            <li>Sin compromiso</li>
                                        </ul>
                                        <a className="btn btn-default btn-white" href="#contacto">Agendar Gratis</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="price-box active">
                                        <h3 className="price-heading">starter</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">$<span>1,500</span>/Mes</h4>
                                        <ul className="p-0">
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Hasta 5 </span>
                                                automatizaciones
                                            </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>10 </span> aplicaciones 
                                           integradas
                                            </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" />Configuración e implementación
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Soporte por email
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Documentación completa
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Capacitación básica
                                            </li>
                                            <li>1 mes de soporte incluido</li>
                                        </ul>
                                        <a className="btn btn-default btn-white" href="#contacto">Comenzar Ahora</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">enterprise</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">$<span>5,000</span>/Mes</h4>
                                        <ul className="p-0">
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>Automatizaciones </span>
                                                ilimitadas
                                            </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>Integraciones</span>
                                                ilimitadas
                                            </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" />Arquitectura personalizada
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Soporte prioritario 24/7
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Consultor dedicado
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Capacitación avanzada
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />SLA garantizado
                                            </li>
                                        </ul>
                                        <a className="btn btn-default btn-white" href="#contacto">Contactar Ventas</a>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Price;