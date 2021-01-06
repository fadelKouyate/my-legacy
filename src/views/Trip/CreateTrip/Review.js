import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row, Container, ListGroup, ListGroupItem} from 'reactstrap';

class Review extends Component {
    render() {
      let {formStep, activeStep, cov_trip} = this.props
      if (formStep !== activeStep) { // Prop: The current step
        return null
      }
        return(
            <Container>
                <div className="animated fadeIn">
                  <Row className="justify-content-center">
                    <Col sm="12" md="5">
                      <Card>
                        <CardHeader>
                          <i className="fa fa-align-justify"></i><strong>Recapitulatif</strong>
                        </CardHeader>
                        <CardBody>
                          <ListGroup>
                            <ListGroupItem><strong>Départ :</strong> {cov_trip.trip_from} </ListGroupItem>
                            <ListGroupItem><strong>Arrivée : </strong> {cov_trip.trip_to}</ListGroupItem>
                            <ListGroupItem><strong>Points d'arrêt : </strong>{cov_trip.trip_intermediate} </ListGroupItem>
                            <ListGroupItem><strong>Date départ : </strong> {cov_trip.trip_date}</ListGroupItem>
                            <ListGroupItem><strong>Heure départ : </strong>{cov_trip.trip_hour} </ListGroupItem>
                            <ListGroupItem><strong>Nombre de place : </strong>{cov_trip.trip_place} </ListGroupItem>
                            <ListGroupItem><strong>Montant : </strong>{cov_trip.trip_amount} </ListGroupItem>
                          </ListGroup>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
            </Container>
      )
    }
  }

  export default Review