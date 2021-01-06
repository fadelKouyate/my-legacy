import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
    Container,
    FormFeedback,
  } from 'reactstrap';

class Mail extends Component {
     render() {
      let {error, message, formStep, activeStep, value_mail, handleChange, value_password, value_password_confirmer, errorStep}=this.props
      if (formStep !== activeStep) { // Prop: The current step
        return null
      }
        return(
            <Container>
              <Row className="justify-content-center" >
                  <Col md="5">
                      <br />
                        <Card>
                        <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Identification</strong>
                        </CardHeader>
                        <CardBody >
                            <FormGroup>
                                    <Label htmlFor="name">Email</Label>
                                    <Input type="mail" 
                                           id="cov_mail" 
                                           name='cov_mail' 
                                           placeholder=""
                                           value={value_mail} 
                                           onChange={handleChange} 
                                           invalid={error  && errorStep===1}
                                    />
                                    <FormFeedback> {message} </FormFeedback>
                            </FormGroup>
                            <Row>
                              <Col xs="6">
                              <FormGroup>
                                      <Label htmlFor="cov_phone">Mot de passe</Label>
                                      <Input type="password" 
                                             id="cov_password" 
                                             name='cov_password' 
                                             value={value_password} 
                                             onChange={handleChange} 
                                             invalid={error && errorStep===2} 
                                             autoComplete="password"
                                      />
                                      <FormFeedback> {message} </FormFeedback>
                              </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                <Label htmlFor="cov_phone">Confirmer</Label>
                                      <Input type="password" 
                                             id="cov_password_confirmer" 
                                             name='cov_password_confirmer' 
                                             value={value_password_confirmer} 
                                             onChange={handleChange} 
                                             invalid={error && errorStep===3} 
                                             autoComplete="password"
                                      />
                                      <FormFeedback> {message} </FormFeedback>
                                </FormGroup>
                                      
                              </Col>
                            </Row>
                            
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
                </Container>
      )
    }
  }

  export default Mail