import React from 'react';
import { connect } from 'react-redux';
import {Col, Row} from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import './ShowTrip.css';

class ShowTrip extends React.Component{
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){

    }

    componentDidMount(){

    }

    render(){
        let { trip_from, trip_to, trip_places, trip_DriverName, trip_amount,
             trip_driverPicture, trip_hour} = this.props
        return( 
            <div className="show-trip-body container"> 
                <Row> 
                    <Col className="show-trip-hour">
                        {trip_hour}
                    </Col>
                    <Col>
                        <span className="show-trip-amount">{trip_amount}Gnf </span>
                    </Col>
                </Row>
                <Row className="show-trip-description">
                    <Col>
                        <Row className="show-trip-description-from"> 
                            <b>Départ </b> &nbsp; {trip_from}
                        </Row>
                        <Row className="show-trip-description-icon"> </Row>
                        <Row className="show-trip-description-to">
                            <b>Arrivée </b> &nbsp; {trip_to}
                        </Row>
                    </Col>
                </Row>
                <Row className="show-trip-content">
                    <Avatar className="show-trip-driver-avatar"  src={trip_driverPicture}/>
                </Row>
                <Row>
                    <Col className="show-trip-driver-profil col-8"> 
                        {trip_DriverName}
                    </Col>
                    <Col className="col-4"> 
                        <b className="show-trip-place"> {trip_places} places </b> 
                    </Col>
                </Row>
            </div>
     
        )
    }
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth, 
  }
}

export default connect(mapStateToProps)(ShowTrip)
