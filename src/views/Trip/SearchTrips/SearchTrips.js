import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, Input, FormGroup, Row } from 'reactstrap';
import './SearchTrips.css';
import Message from '../../Tools/Message'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {CitiesProperties} from '../../../config/CitiesProperties';
import {TRIP_SHOW_PATH} from '../../../config/paths';

class SearchTrips extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            trip_from: '',
            trip_to: '',
            trip_date: '',
            trip_place: '1'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.state.trip_from && this.state.trip_to && this.state.trip_date){
            this.props.history.push(TRIP_SHOW_PATH + '/' +this.state.trip_from + '/' + this.state.trip_to + '/' + this.state.trip_date + '/' + this.state.trip_place);
        }else{
            Message.info("Tous les champs du formulaire sont obligatoires")
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
          [name]: value
        }); 
    }

    componentDidMount(){

    }

      render(){
        let cities = CitiesProperties;
 
        return( 
            <div className="search-home container">
              <Row className="search-form-title justify-content-center">
                   <p>Où voulez-vous aller?</p>
              </Row>
              <div className="search-form ">
                    <Form onSubmit={ (e) => this.handleSubmit(e) }>
                        <FormGroup>
                            <Row className="search-item">
                            <Autocomplete
                                    className="from"
                                    options={cities}
                                    getOptionLabel={(option) => option}
                                    onChange={(event, value) => this.setState({trip_from: value})}
                                    renderInput={(params) => <TextField {...params} label="Départ" variant="outlined" />}
                                />
                            </Row>
                            <Row className="search-item">
                                <Autocomplete
                                    className="to"
                                    options={cities}
                                    getOptionLabel={(option) => option}
                                    onChange={(event, value) => this.setState({trip_to: value})}
                                    renderInput={(params) => <TextField {...params} label="Arrivée" variant="outlined"/>}
                                />
                            </Row>
                            <Row className="search-item">
                                <Col>
                                    <Input type="date" className="date" name='trip_date'
                                       onChange={this.handleChange} placeholder="Date..." />
                                </Col>
                                <Col>
                                    <Input type="select" className="passenger" name='trip_place'
                                        onChange={this.handleChange} placeholder="Nombre de passagers...">
                                            <option value="1">1 passager</option>
                                            <option value="2">2 passagers</option>
                                            <option value="3">3 passagers</option>
                                            <option value="4">4 passagers</option>
                                            <option value="5">5 passagers</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Button className="home-forme-btn"><i className="fa fa-search"/> Rechercher</Button>
                            </Row>
                        </FormGroup>
                    </Form>
              </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      auth: state.auth, 
  }
}


export default connect(mapStateToProps)(SearchTrips)
