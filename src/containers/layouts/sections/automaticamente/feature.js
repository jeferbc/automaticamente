import React from 'react';
import { FeatureData } from '../../../../database/layouts/automaticamente/database'
import {Container,Row,Col} from 'reactstrap'

const Feature = () => (
    <section className="saas1 service" id="feature">
        <div className="about-chat">
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div className="title">
                            <img alt="title-logo" className="img-fluid" src="/assets/images/saas1/title-logo.png" />
                            <div className="main-title">
                                <h2>
                                    <span className="theme-color">¿P</span>or qué <span className="theme-color">A</span>utomaticamente?
                                </h2>
                            </div>
                            <hr />
                            <div className="sub-title">
                                <p className="p-padding">Transformamos tu negocio eliminando cuellos de botella y optimizando procesos. 
                                    Con n8n creamos automatizaciones poderosas que te permiten enfocarte en lo estratégico mientras 
                                    la tecnología se encarga del resto.</p>
                            </div>
                        </div>
                    </Col>
                    {
                        FeatureData.map((item, i) => {
                            return (
                                <Col lg="4" md="6"  className="service-container" key={i}>
                                    <div className="chat-box">
                                        <img alt="automatización-característica" src={item.img} />
                                        <div className="feature-content">
                                            <h4 className="service-heading"> {item.heading} <span className="theme-color">{item.layout}</span>
                                            </h4>
                                            <hr />
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    </section>
)
export default Feature;