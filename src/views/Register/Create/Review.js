import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Container,
    ListGroup,
    ListGroupItem
  } from 'reactstrap';

class Review extends Component {
    render() {
      let {formStep, activeStep, cov_user} = this.props
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
                            <ListGroupItem><strong>Email :</strong> {cov_user.cov_mail} </ListGroupItem>
                            <ListGroupItem><strong>Nom : </strong> {cov_user.cov_last_name}</ListGroupItem>
                            <ListGroupItem><strong>Prenom : </strong>{cov_user.cov_first_name} </ListGroupItem>
                            <ListGroupItem><strong>Sexe : </strong> {cov_user.cov_gender}</ListGroupItem>
                            <ListGroupItem><strong>Telephone : </strong>{cov_user.cov_phone} </ListGroupItem>
                            <ListGroupItem><strong>Ville : </strong>{cov_user.cov_city} </ListGroupItem>
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