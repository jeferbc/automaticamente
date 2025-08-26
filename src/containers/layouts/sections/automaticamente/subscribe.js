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
                            <h3 className="mt-0 text-white">Transforma tu Negocio en 30 Días</h3>
                            <h6 className="text-white">Obtén una auditoría gratuita de automatización y descubre cómo puedes ahorrar 50+ horas semanales con n8n. Incluye roadmap personalizado y estimación de ROI.
                        </h6>
                        </div>
                    </div>
                </Col>
                <Col lg="5">
                    <div className="subscribe-input">
                        <form>
                            <input id="useremail" placeholder="Email empresarial" required type="email" />
                            <input id="userphone" placeholder="WhatsApp (opcional)" type="tel" />
                            <input id="submit" type="submit" value="Agendar Auditoría" />
                        </form>
                        <div className="text text-center d-flex">
                            <h6 className="text-white">Auditoría gratuita</h6><h6 className="text-white">Respuesta en 2 horas</h6><h6
                                className="text-white">Roadmap incluido</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Subscribe;