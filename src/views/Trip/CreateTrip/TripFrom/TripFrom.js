import React, { Component } from 'react';
import {Card,CardBody,CardHeader,Col,FormGroup,Input,Label,Row,Container,FormFeedback,} from 'reactstrap';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {CitiesProperties} from '../../../../config/CitiesProperties';
import './TripFrom.css';

class TripFrom extends Component {
     render() {
      let {message, formStep, activeStep, trip_intermediate, handleChange}=this.props

      let cities = CitiesProperties;
      
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
                        <i className="fa fa-align-justify"></i><strong>D'où venez vous?</strong>
                        </CardHeader>
                        <CardBody >
                            { message &&
                              <span className="tripFromAlert"> {message} </span>
                            }
                            <FormGroup>
                                <Autocomplete
                                    className="create-trip-form-from"
                                    options={cities}
                                    getOptionLabel={(option) => option}
                                    onChange={(event, value) => this.props.childData('trip_from', value)}
                                    renderInput={(params) => <TextField {...params} label="Départ" variant="outlined" />}
                                  />
                            
                                <Autocomplete
                                    className="create-trip-form-to"
                                    options={cities}
                                    getOptionLabel={(option) => option}
                                    onChange={(event, value) => this.props.childData('trip_to', value)}
                                    renderInput={(params) => <TextField {...params} label="Arrivée" variant="outlined"/>}
                                />
                               
                                <Label htmlFor="name">Trajets Intermédiares</Label>
                                <Input type="text" 
                                        id="trip_intermediate" 
                                        name='trip_intermediate' 
                                        placeholder=""
                                        className="create-trip-form-intermediate"
                                        value={trip_intermediate} 
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

  export default TripFrom