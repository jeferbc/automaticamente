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
                                        <h1 style={{textTransform: 'none'}}><span className="theme-color">A</span>utomatizamos tu <span >negocio. </span></h1>
                                        <div className="center-content slider-logo">
                                            <img alt="" className="img-fluid" src="/assets/images/saas1/slider-logo.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header-sub-text">
                                    <h3 style={{textTransform: 'none'}} className="text-white">Olvídate de los <span className="theme-color">cuellos de botella.</span> Resolvemos tus problemas de tiempo y procesos para que te enfoques en crecer.</h3>
                                </div>
                                <div className="header-sub-text">
                                    <h6 style={{textTransform: 'none'}}>Optimiza tu negocio de forma <span className="theme-color">simple y sin complicaciones.</span></h6>
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