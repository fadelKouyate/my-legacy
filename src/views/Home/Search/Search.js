import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, Input, FormGroup, Row } from 'reactstrap';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {CitiesProperties} from '../../../config/CitiesProperties';
import {TRIP_SHOW_PATH} from '../../../config/paths';
import './Search.css';

class Search extends React.Component{
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
        this.props.history.push(TRIP_SHOW_PATH + '/' +this.state.trip_from + '/' + this.state.trip_to + '/' + this.state.trip_date + '/' + this.state.trip_place);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
          [name]: value
        }); 
    }

    render(){
        let cities = CitiesProperties;

        return(
            <React.Fragment>
              <Row className="home-form-title">
                   <p>Déplacez-vous en toute confiance et à moindre coût</p>
              </Row>
              <Row className="home-form">
                    <Form onSubmit={(e) => this.handleSubmit(e)} className="home-form-element">
                        <FormGroup row className="home-form-content">
                            <Col className="home-form-col col-12 col-sm-12 col-md-3">
                                <Autocomplete
                                    className="home-form-from"
                                    options={cities}
                                    getOptionLabel={(option) => option}
                                    onChange={(event, value) => this.setState({trip_from: value})}
                                    renderInput={(params) => <TextField {...params} label="Départ" variant="outlined" />}
                                />
                            </Col>
                            <Col className="home-form-col col-12 col-sm-12 col-md-3">
                                <Autocomplete
                                    className="home-form-to"
                                    options={cities}
                                    getOptionLabel={(option) => option}
                                    onChange={(event, value) => this.setState({trip_to: value})}
                                    renderInput={(params) => <TextField {...params} label="Arrivée" variant="outlined"/>}
                                />
                            </Col>
                            <Col className="home-form-col col-6 col-sm-6 col-md-3">
                                <Input type="date" className="home-form-date" name='trip_date'
                                       onChange={this.handleChange} placeholder="Date..." />
                            </Col>
                            <Col className="home-form-col col-6 col-sm-6 col-md-2">
                                    <Input type="select" className="home-form-place" name='trip_place'
                                        onChange={this.handleChange} placeholder="Nombre de passagers...">
                                            <option value="1">1 passager</option>
                                            <option value="2">2 passagers</option>
                                            <option value="3">3 passagers</option>
                                            <option value="4">4 passagers</option>
                                            <option value="5">5 passagers</option>
                                    </Input>
                            </Col>
                            <Col className="home-form-col col-12 col-sm-12 col-md-1">
                                <Button className="home-form-btn" color="warning" size="lg"><i className="fa fa-search"/></Button>
                            </Col>
                        </FormGroup>
                    </Form>
              </Row>
              </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      auth: state.auth, 
  }
}

export default connect(mapStateToProps)(Search)