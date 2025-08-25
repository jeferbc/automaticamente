import React from "react";
import { MENUITEMS } from "../../constant/menu";
import { Container, Row, Col } from "reactstrap";

const Header = ({ className }) => {
  return (
    <header className={`theme-header ${className}`}>
      <Container>
        <Row>
          <Col>
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img alt="logo" src="/assets/images/logo/logo.png" className="img-fluid" />
              </a>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  {MENUITEMS.map((item, i) => (
                    <li key={i} className="nav-item">
                      <a className="nav-link" href={item.path}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;