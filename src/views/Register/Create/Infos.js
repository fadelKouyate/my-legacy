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

class Infos extends Component {
   
  render() {
    let {save} = this.props
    return(
      <Row className="justify-content-center">
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Inscription</strong>
                <small></small>
              </CardHeader>
              <CardBody>
              {(save) ?(
                <Alert color="success">
                  <h4 className="alert-heading">Bravo</h4>
                  <p>
                    Inscription terminée avec succès. Vous allez recevoir un mail pour valider votre inscription
                  </p>
                  <hr />
                  <p className="mb-0">
                    Le lien de validation expire dans 24 heures.
                  </p>
                </Alert>
              ): 
              <Alert color="danger">
                  <h4 className="alert-heading">Error!</h4>
                  <p>
                    Inscription terminée avec erreur. Vous rééessayer plus tard
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

export default Infos;
