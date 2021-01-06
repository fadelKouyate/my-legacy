import React, { Component } from 'react';
import {Row, Col, Alert, Card, CardBody, CardHeader, Button} from 'reactstrap';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './BookingTripInfo.css';

class BookingTripInfo extends Component {
  
  goHome() {
    this.props.history.push("/")
  }

  render() {
    return(
      <Row className="bookingTripInfoBody">
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Réservation</strong>
                <small></small>
              </CardHeader>
              <CardBody>
                <Alert color="success">
                    <h4 className="alert-heading"><CheckCircleIcon fontSize="large"/>Bravo</h4>
                    <p>
                      Votre demande a été envoyée avec succès. le conducteur va rapidement vous répondre.
                    </p>
                    <hr />
                    <p className="mb-0">
                      Vous serez régulièrement informé de l'évolution de votre réservation.
                    </p>
                </Alert>
                <Row className="justify-content-center">
                    <Col xs="3">
                        <Button onClick={() =>this.goHome()} color="primary" className="px-4">OK</Button>
                    </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          </Row>
    );
  }
}

export default BookingTripInfo;
