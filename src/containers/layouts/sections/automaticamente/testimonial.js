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
                                <p className="p-padding">Empresas de todos los tamaños confían en nosotros para transformar sus operaciones. Descubre por qué el 95% de nuestros clientes recomienda nuestros servicios de automatización.</p>
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
                                            <h6>Implementamos automatizaciones que nos ahorran 60 horas semanales. El ROI fue del 450% en 4 meses. Nuestros procesos de ventas son ahora completamente automáticos y escalables.</h6>
                                        </div>
                                    </div>
                                    <div className="testi-profile">
                                        <div className="d-flex align-items-center">
                                            <img alt="profile-testimonial"
                                                src="/assets/images/saas1/testi-profile.png" />
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">Roberto Silva</h5>
                                                <h6>CEO TechSolutions</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="testimonial-box">
                                            <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                                            <h6>Conectaron nuestro ERP con 15 aplicaciones diferentes. Los dashboards en tiempo real y la sincronización automática eliminaron el 90% de nuestro trabajo manual.</h6>
                                        </div>
                                    </div>
                                    <div className="testi-profile">
                                        <div className="d-flex align-items-center">
                                            <img alt="Generic placeholder image"
                                                src="/assets/images/saas1/testi-profile.png" />
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">Patricia López</h5>
                                                <h6>Directora de Operaciones</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="testimonial-box">
                                            <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                                            <h6>Las automatizaciones de inventario y reposición automática nos ahorraron $50k anuales en costos operativos. El sistema es tan inteligente que anticipa nuestras necesidades.</h6>
                                        </div>
                                    </div>
                                    <div className="testi-profile">
                                        <div className="d-flex align-items-center">
                                            <img alt="profile" src="/assets/images/saas1/testi-profile.png" />
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">Miguel Torres</h5>
                                                <h6>Director de Supply Chain</h6>
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