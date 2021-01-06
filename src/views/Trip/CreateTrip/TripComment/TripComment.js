import React, { Component } from 'react';
import {Card,CardBody,CardHeader,Col,FormGroup,Input,Label,Row,Container} from 'reactstrap';
import './TripComment.css';

class TripComment extends Component {
     render() {
      let { message, formStep, activeStep, trip_comment, handleChange}=this.props
      if (formStep !== activeStep) { 
        return null
      }
        return(
            <Container>
              <Row className="justify-content-center" >
                  <Col md="5">
                      <br />
                        <Card>
                        <CardHeader>
                        <i className="fa fa-align-justify"></i><strong>Ajoutez un commentaire pour plus de précision</strong>
                        </CardHeader>
                        <CardBody >
                            <FormGroup>
                                    <Label htmlFor="name">Commentaires</Label>
                                    <Input type="textarea" 
                                           id="trip_comment" 
                                           name='trip_comment' 
                                           placeholder=""
                                           className="trip_comment"
                                           value={trip_comment} 
                                           onChange={handleChange} 
                                    />
                                    <span className="trip-comment-alert"> {message} </span>
                            </FormGroup>                            
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
      )
    }
  }

  export default TripComment