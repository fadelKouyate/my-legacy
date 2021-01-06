import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, FormGroup,
        Input, Label, Row, Container} from 'reactstrap';
import './TripDetail.css';

class TripDetail extends Component {
     render() {
      let {message, formStep, activeStep, trip_date, trip_hour, trip_place, trip_amount, handleChange}=this.props
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
                        <i className="fa fa-align-justify"></i><strong>Où allez vous?</strong>
                        </CardHeader>
                        <CardBody >
                            {message &&
                            <span className="tripDetailAlert"> {message} </span>
                            }
                            <FormGroup>
                                    <Label className="detailLabel">Date de départ</Label>
                                    <Input type="date" 
                                           id="trip_date" 
                                           name='trip_date' 
                                           placeholder=""
                                           className="trip_date"
                                           value={trip_date} 
                                           onChange={handleChange} 
                                    />

                                    <Label className="detailLabel">Heure de départ</Label>
                                    <Input type="time" 
                                           id="trip_hour" 
                                           name='trip_hour'
                                           value={trip_hour} 
                                           className="trip_hour" 
                                           onChange={handleChange} 
                                    />

                                    <Label className="detailLabel">Nombre de place disponible</Label>
                                    <Input type="select" name="trip_place" id="trip_place" 
                                          className="trip_place" value={trip_place} onChange={handleChange}>
                                          <option value="1">1 place</option>
                                          <option value="2">2 places</option>
                                          <option value="3">3 places</option>
                                          <option value="4">4 places</option>
                                          <option value="5">5 places</option>
                                          <option value="6">6 places</option>
                                    </Input>

                                    <Label className="detailLabel">Prix par place</Label>
                                    <Input type="text" 
                                           id="trip_amount" 
                                           name='trip_amount'
                                           value={trip_amount} 
                                           className="trip_amount"
                                           onChange={handleChange} 
                                    />
                            </FormGroup>                            
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
      )
    }
  }

  export default TripDetail