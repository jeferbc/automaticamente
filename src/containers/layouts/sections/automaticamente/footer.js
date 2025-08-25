import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <footer className="saas1 footer2">
        <Container>
            <Row>
                <Col md="3">
                    <div className="logo-sec">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Automaticamente</h3>
                        </div>
                        <div className="footer-contant">
                            <img alt="automaticamente-logo" className="img-fluid footer-logo" src="/assets/images/logo/3.png" />
                            <div className="footer-para">
                                <h6 className="text-white para-address">Automaticamente</h6>
                                <h6 className="text-white para-address">Ciudad de México, México</h6>
                                <h6 className="text-white para-address">hola@automaticamente.co</h6>
                            </div>
                            <ul className="d-d-flex footer-social social">
                                <li className="footer-social-list">
                                    <a href="https://www.facebook.com/"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="https://twitter.com/"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="https://www.linkedin.com/"><i aria-hidden="true" className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">servicios</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">servicios</h5>
                        <div>
                            <ul className="footer-lists">
                                <li><a href="#consultoría">Consultoría Gratuita</a></li>
                                <li><a href="#automatización">Automatización de Procesos</a></li>
                                <li><a href="#integraciones">Integraciones n8n</a></li>
                                <li><a href="#soporte">Soporte Técnico</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">recursos</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">recursos</h5>
                        <div>
                            <ul className="footer-lists">
                                <li><a href="#blog">Blog de Automatización</a></li>
                                <li><a href="#casos">Casos de Estudio</a></li>
                                <li><a href="#templates">Templates n8n</a></li>
                                <li><a href="#documentación">Documentación</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Soporte</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Soporte</h5>
                        <div>
                            <ul className="footer-lists">
                                <li><a href="#pequeñas">Para Pequeñas Empresas</a></li>
                                <li><a href="#medianas">Para Medianas Empresas</a></li>
                                <li><a href="#corporativas">Para Corporativos</a></li>
                                <li><a href="#faq">Preguntas Frecuentes</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;