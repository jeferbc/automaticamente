import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Subscribe = () => (
    <section className="saas1 subscribe" id="contacto">
        <Container>
            <Row>
                <Col lg="7">
                    <div className="d-flex align-items-center">
                        <img alt="profile" src="/assets/images/saas1/subscribe-icon.png" />
                        <div className="flex-grow-1">
                            <h3 className="mt-0 text-white">Consultoría Gratuita de 30 días</h3>
                            <h6 className="text-white">¿Listo para automatizar tu negocio? Comienza con una consultoría gratuita y descubre cómo n8n puede transformar tus procesos.
                        </h6>
                        </div>
                    </div>
                </Col>
                <Col lg="5">
                    <div className="subscribe-input">
                        <form>
                            <input id="useremail" placeholder="Email empresarial" required type="email" />
                            <input id="submit" type="submit" value="Comenzar Ahora" />
                        </form>
                        <div className="text text-center d-flex">
                            <h6 className="text-white">Consultoría gratuita</h6><h6 className="text-white">Respuesta en 24h</h6><h6
                                className="text-white">Sin compromiso</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Subscribe;