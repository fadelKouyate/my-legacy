import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap'
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <br />
              <Row>
                <Col md="3" xs="6">
                <h5 className="footer-h5-title">COV GUINEE</h5>
                <p> Premier site de covoiturage en Guinée <br /> Réserver votre trajet ou <br /> partager votre trajet </p>
              </Col>
          
                <Col md="3" xs="6">
                    <h5 className="footer-h5-title">A Propos</h5>
                    <ul className="list-unstyled">
                      <li><a href="#!">Qui sommes nous</a></li>
                      <li><a href="#!">Comment ça marche</a></li>
                      <li><a href="#!">Trajets quotidiens</a></li>
                      <li><a href="#!">Assurance</a></li>
                      <li><a href="#!">Foire aux questions</a></li>
                    </ul>
                </Col>
                        
                  <Col md="3" xs="6">
                    <h5 className="footer-h5-title">Liens Utiles</h5>
                    <ul className="list-unstyled">
                      <li><a href="#!">Connexion</a></li>
                      <li><a href="#!">Inscription</a></li>
                      <li><a href="#!">Contact</a></li>
                      <li><a href="#!">Proposer</a></li>
                      <li><a href="#!">Rechercher</a></li>
                  </ul>
                  </Col>          
            
                <Col md="3" xs="6">
                  <h5 className="footer-h5-title">Destinations</h5>
                  <ul className="list-unstyled">
                    <li><a href="#!"> Conakry </a></li>
                    <li><a href="#!"> KanKan </a></li>
                    <li><a href="#!"> Mamou </a></li>
                    <li><a href="#!"> Siguiri </a></li>
                  </ul>
                </Col>
              </Row>
            <hr />
          <div className="social-section text-center">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item"><Button size="lg" className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-facebook"></i></Button></li>
              <li className="list-inline-item"> <Button size="lg" className="btn-twitter btn-brand icon mr-1 mb-1"><i className="fa fa-twitter"></i></Button></li>
              <li className="list-inline-item"> <Button size="lg" className="btn-instagram btn-brand icon mr-1 mb-1"><i className="fa fa-instagram"></i></Button></li>
            </ul>
          </div>
          <div className="footer-copyffright py-3 text-center">
              <div className="container-fluid">
              COV Guinee © 2020 Copyright
              </div>
          </div>
      </div>
    );
  }
}

export default Footer
