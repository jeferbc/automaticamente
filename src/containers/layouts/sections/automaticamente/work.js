import React, { useState } from 'react';
import { NavData, ContentData } from '../../../../database/layouts/automaticamente/database'
import { Container, Row, Col } from 'reactstrap'

const Work = () => {
    const [nav, setNav] = useState('Análisis');
    const toggle = (item) => {
        setNav(item)
    }
    return (
        <section className="saas1 howitwork" id="proceso">
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div className="title">
                            <img alt="title-logo" className="img-fluid" src="/assets/images/saas1/title-logo.png" />
                            <div className="main-title">
                                <h2>
                                    <span className="theme-color">C</span>ómo <span className="theme-color">F</span>unciona
                            </h2>
                            </div>
                            <hr />
                            <div className="sub-title">
                                <p className="p-padding">Un proceso probado en 4 pasos que transforma tu negocio. 
                                Desde el análisis inicial hasta la optimización continua, te acompañamos en cada etapa 
                                de tu transformación digital.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="12" className="work-tab">
                        <ul className="nav nav-pills justify-content-center " id="pills-tab" role="tablist">
                            {
                                NavData.map((item, i) => {
                                    return (
                                        <li className={`nav-item text-center ${item.title === nav ? 'active' : ''} `} key={i}>
                                            <a aria-selected="true" className={`nav-link ${item.title === nav ? 'active show' : ''}`} data-bs-toggle="pill"
                                                onClick={() => toggle(item.title)}
                                                role="tab">
                                                <img alt={`paso-${i+1}`} src={item.img} />
                                                <h6>{item.title}</h6>
                                                <span></span>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="work-tab-bg work-content p-t-50">
                <div className="tab-content text-center" id="pills-tabContent">
                    {ContentData.map((item, i) => {
                        return (
                            <div className={`tab-pane fade ${item.title === nav ? 'show active' : ''}`} role="tabpanel" key={i}>
                                <img alt={`proceso-${item.title}`} className="img-fluid" src={item.img} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Work;