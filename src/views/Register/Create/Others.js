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

class Others extends Component {
     render() {
      let {error, message, formStep, activeStep, value_phone, value_city, value_gender, handleChange, errorStep}=this.props
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
                        <i className="fa fa-align-justify"></i><strong>Compléter les informations</strong>
                        </CardHeader>
                        <CardBody >
                            <FormGroup>
                                    <Label htmlFor="cov_phone">Ville</Label>
                                    <Input type="text" id="cov_city" name='cov_city'
                                    value={value_city} 
                                    onChange={handleChange} 
                                    invalid={error && errorStep===1}
                                    />
                                    <FormFeedback> {message} </FormFeedback>
                            </FormGroup>
                            <Row>
                              <Col xs="8">
                              <FormGroup>
                                      <Label htmlFor="cov_phone">Numéro de téléphone</Label>
                                      <Input type="text" 
                                             id="cov_phone" 
                                             name='cov_phone' 
                                             value={value_phone} 
                                             onChange={handleChange} 
                                             invalid={error && errorStep===2}        
                                      />
                                      <FormFeedback> {message} </FormFeedback>
                              </FormGroup>
                              </Col>
                              <Col xs="4">
                                <FormGroup>
                                  <Label htmlFor="ccmonth">Sexe</Label>
                                  <Input type="select" name="cov_gender" id="cov_gender" value={value_gender} onChange={handleChange} invalid={error && errorStep===3}>
                                    <option value="M">Homme</option>
                                    <option value="F">Femme</option>
                                  </Input>
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

  export default Others