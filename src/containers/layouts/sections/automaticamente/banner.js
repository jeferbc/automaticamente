import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Banner = () => (
    <section className="saas1 header" id="home">
        <div className="saas1-header bg header8-content">
            <Container>
                <Row>
                    <Col md="7">
                        <div className="center-text">
                            <div>
                                <div className="header-text">
                                    <div className="d-flex">
                                        <h1><span className="theme-color">A</span>utomática<span
                                            className="small-text">mente </span><span className="theme-color">E</span>ficiente</h1>
                                        <div className="center-content slider-logo">
                                            <img alt="" className="img-fluid" src="/assets/images/saas1/slider-logo.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header-sub-text">
                                    <h3 className="text-white">Elimina <span className="theme-color">cuellos de botella</span> y automatiza procesos con n8n</h3>
                                </div>
                                <div className="header-sub-text">
                                    <h6>Ahorra hasta <span className="theme-color">40 horas semanales</span> automatizando tareas repetitivas</h6>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="btn btn-default primary-btn transparent" href="#demo">Ver Demo<img
                                                alt="video-icon" className="m-l-5"
                                                src="/assets/images/saas1/video-icon.png" /></a>
                                        </li>
                                        <li>
                                            <a className="btn btn-default primary-btn transparent" href="#contacto">Consulta Gratuita</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="center-text slider-banner">
                            <img alt="automatización-procesos" src="/assets/images/saas1/slider-laptop2.png" className="img-fluid"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <img alt="" className="img-fluid set-abs background" src="/assets/images/saas1/background2.png" />
        <img alt="" className="img-fluid set-abs dot" src="/assets/images/saas1/dot.png" />
    </section>
)

export default Banner;