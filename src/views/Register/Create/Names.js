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

class Names extends Component {
     render() {
      let {error, message, formStep, activeStep, value_first_name, value_last_name, handleChange, errorStep}=this.props
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
                        <i className="fa fa-align-justify"></i><strong>Nom et prénom</strong>
                        </CardHeader>
                        <CardBody >
                            <FormGroup>
                                    <Label htmlFor="cov_first_name">Nom</Label>
                                    <Input type="text" id="cov_first_name" name='cov_first_name'
                                    value={value_first_name} 
                                    onChange={handleChange} 
                                    invalid={error && errorStep===1}
                                    />
                                    <FormFeedback> {message} </FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                    <Label htmlFor="cov_last_name">Prenom</Label>
                                    <Input type="text" id="cov_last_name" name='cov_last_name' 
                                    value={value_last_name} 
                                    onChange={handleChange} 
                                    invalid={error && errorStep===2}
                                    />
                                    <FormFeedback> {message} </FormFeedback>
                            </FormGroup>
                            
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
                </Container>
      )
    }
  }

  export default Names