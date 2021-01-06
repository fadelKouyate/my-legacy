import React, { Component } from 'react';
import {
  Row,
  Col,
  Alert,
  Card,
  CardBody,
  CardHeader,
  Button
} from 'reactstrap';

class TripInfos extends Component {
   
  render() {
    let {save} = this.props;
    console.log("in tripInfos save : " + save);
    return(
      <Row className="justify-content-center">
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Création de trajet</strong>
                <small></small>
              </CardHeader>
              <CardBody>
              {(save) ?(
                <Alert color="success">
                  <h4 className="alert-heading">Bravo</h4>
                  <p>
                    Votre trajet à été créé avec succès. Vous allez recevoir un mail de confirmation.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Nous vous remercions pour votre confiance.
                  </p>
                </Alert>
              ): 
              <Alert color="danger">
                  <h4 className="alert-heading">Error!</h4>
                  <p>
                    Une erreur s'est produite suite à votre demande de création de trajet. Merci de rééessayer plus tard!
                  </p>
                  <hr />
                  <p className="mb-0">
                    Erreur serveur
                  </p>
                </Alert>
              }
              <Row className="justify-content-center">
                                        <Col xs="3">
                                            <Button onClick={() =>this.props.goHome()} color="primary" className="px-4">OK</Button>
                                        </Col>
                                </Row>
              </CardBody>
            </Card>
          </Col>
          </Row>
    );
  }
}

export default TripInfos;
