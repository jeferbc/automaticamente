import React, { useState } from 'react';
import Slider from 'react-slick';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
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
};

const Testimonial = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return (
        <section className="saas1 testimonial videos testimonial-bg">
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div className="title">
                            <img alt="title-logo" className="img-fluid" src="/assets/images/saas1/title-logo.png" />
                            <div className="main-title">
                                <h2>
                                    <span className="theme-color">L</span>o que dicen <span className="theme-color">n</span>uestros <span className="theme-color">c</span>lientes
                            </h2>
                            </div>
                            <hr />
                            <div className="sub-title">
                                <p className="p-padding">Automaticamente transformó completamente nuestros procesos. Lo que antes nos tomaba 40 horas semanales ahora se hace automáticamente. Hemos recuperado la inversión en solo 3 meses.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" sm="12">
                        <div className="center-content">
                            <div className="video w-100">
                                <a className="button center-content" onClick={toggle}>
                                    <img alt="video" className="img-fluid" src="/assets/images/saas1/testimonial-video-icon.png" />
                                </a>
                                <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                                    <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                                    <ModalBody className="iframe-modal">
                                        <iframe className="mfp-iframe" frameBorder="0" allowFullScreen="" src="//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"></iframe>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="testimonial-slider">
                            <Slider {...settings}>
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="testimonial-box">
                                            <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                                            <h6>Automaticamente transformó completamente nuestros procesos. Lo que antes nos tomaba 40 horas semanales ahora se hace automáticamente. Hemos recuperado la inversión en solo 3 meses.</h6>
                                        </div>
                                    </div>
                                    <div className="testi-profile">
                                        <div className="d-flex align-items-center">
                                            <img alt="profile-testimonial"
                                                src="/assets/images/saas1/testi-profile.png" />
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">María González</h5>
                                                <h6>Directora de Operaciones</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="testimonial-box">
                                            <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                                            <h6>La integración entre nuestro CRM, sistema de facturación y email marketing es perfecta. Los flujos de n8n que implementaron son robustos y confiables. Recomendado 100%.</h6>
                                        </div>
                                    </div>
                                    <div className="testi-profile">
                                        <div className="d-flex align-items-center">
                                            <img alt="Generic placeholder image"
                                                src="/assets/images/saas1/testi-profile.png" />
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">Carlos Ruiz</h5>
                                                <h6>CEO StartupMX</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="testimonial-box">
                                            <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                                            <h6>Nunca pensé que automatizar lead nurturing fuera tan efectivo. Nuestro engagement aumentó 300% y el tiempo de conversión se redujo a la mitad. Excelente servicio técnico.</h6>
                                        </div>
                                    </div>
                                    <div className="testi-profile">
                                        <div className="d-flex align-items-center">
                                            <img alt="profile" src="/assets/images/saas1/testi-profile.png" />
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">Ana Martínez</h5>
                                                <h6>Gerente de Marketing</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial;