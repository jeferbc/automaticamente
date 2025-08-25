import React from 'react';
import { Container, Row, Col } from 'reactstrap'
const Copyright = () => (
    <div className="saas1 copyright">
        <Container>
            <Row>
                <Col sm="6">
                    <div className="link-horizontal center-text">
                        <ul>
                            <li>
                                <a className="copyright-text op-text" href="#privacidad">Política de Privacidad</a>
                            </li>
                            <li>
                                <a className="copyright-text op-text" href="#términos">Términos &amp; Condiciones</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col sm="6">
                    <div>
                        <h6 className="copyright-text text-white text-end op-text">Copyright © 2024 Automaticamente by <i
                            aria-hidden="true" className="fa fa-heart mx-1"></i>
                            Especialistas n8n</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Copyright;