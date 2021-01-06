import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.css';
import ListGroup from 'react-bootstrap/ListGroup'
import { SocialIcon } from 'react-social-icons'


class Footer extends React.Component{

      render(){
        return( 
          <div className="footer">
            
          <Container>
                      <br />
                      <Row className="footer-href">
                        <Col xs="6" md="3">
                        <ListGroup variant="flush">
                          <ListGroup.Item className="title">Comment ça marche</ListGroup.Item>
                          <ListGroup.Item><a href="/home">Assurance et covoiturage</a></ListGroup.Item>
                          <ListGroup.Item><a href="/home">Trajet quotidien</a></ListGroup.Item>
                          <ListGroup.Item><a href="/home">Voyager en bus</a></ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col xs="6" md="3">
                        <ListGroup variant="flush">
                          <ListGroup.Item className="title">A propos</ListGroup.Item>
                          <ListGroup.Item><a href="/home">foire aux questions</a></ListGroup.Item>
                          <ListGroup.Item><a href="/home">Contact</a></ListGroup.Item>
                          <ListGroup.Item><a href="/home">Informations légales</a></ListGroup.Item>
                          <ListGroup.Item><a href="/home">Presse</a></ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col xs="6" md="3">
                        <ListGroup variant="flush">
                           <ListGroup.Item className="title">Destinations</ListGroup.Item>
                           <ListGroup.Item><a href="/home">Conakry</a></ListGroup.Item>
                           <ListGroup.Item><a href="/home">Madina</a></ListGroup.Item>
                           <ListGroup.Item><a href="/home">Kipé</a></ListGroup.Item>
                           <ListGroup.Item><a href="/home">Nongo</a></ListGroup.Item>
                           <ListGroup.Item><a href="/home">Bambeto</a></ListGroup.Item>
                           
                        </ListGroup>
                        </Col>
                        <Col xs="6" md="3">
                        <ListGroup variant="flush">
                          <ListGroup.Item className="title">Contact</ListGroup.Item>
                          <ListGroup.Item>
                              <div className="site-address">
                                        <ul className="address">
                                            <li>Kipé, Conakry, Guinée </li>
                                            <li>+224 620 00 00 00</li>
                                            <li>contact@guineecov.com</li>
                                        </ul>
                              </div>
                           </ListGroup.Item>
                        </ListGroup>       
                        </Col>
                        </Row>
                        
                  <br />
                  <hr className="footer_hr"/>
                  <br />
                      <div>
                              <SocialIcon className="social" url="http://facebook.com" network="facebook" />
                              <SocialIcon className="social" url="http://twitter.com" network="twitter" />
                              <SocialIcon className="social" url="http://youtube.com" network="youtube" />
                              <br />
  
                               <p className="footer-corporate"> 
                                      <br />
                                      Guinée cov, 2020 ©  All rights reserved.
                                      <br />
                                      <br />
                              </p> 
                             
                      </div>
                </Container>
               <br />
                <Row className="footer-info">
                <Col>   
                    <p>
                      <br />
                    Guinée cov est le premier réseau de covoiturage en Guinée. Plus besoin d'aller en ville pour quitter la ville : nous mettons en relation passagers et conducteurs prêts à partager leur trajet en voiture pour leur permettre d'aller partout, et sans changement.
                      <br />                 
                    </p>
                </Col>
                </Row>
                
        </div>
        )
    }
}

export default Footer