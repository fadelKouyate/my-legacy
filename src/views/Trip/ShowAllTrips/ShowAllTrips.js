
import React from 'react';
import { connect } from 'react-redux';
import {Col, Row} from 'reactstrap';
import Search from '@material-ui/icons/Search';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import moment from 'moment';
import 'moment/locale/fr';
import './ShowAllTrips.css';
import TripActions from '../../../store/actions/TripActions';
import ShowTrip from '../ShowTrip';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import {TRIP_SHOW_DETAIL_PATH} from '../../../config/paths';

class ShowAllTrips extends React.Component{
    constructor(props) {
        super(props)
        this.state = { 
          trip_from: 'Ratoma, Conakry',
          trip_to: 'Dixin, Conakry',
          trip_date: 'Demain à 8:00'
        }
    }

    componentDidMount(){
        let {trip_from, trip_to, trip_date, trip_place} = this.props.match.params; 
        let momentVariable = moment(trip_date, "YYY-MM-DD");
        let startDate = momentVariable.format("dddd DD MMMM");
        this.setState({ trip_from,trip_to,trip_date:startDate});

        this.props.dispatch(TripActions.searchTrips(trip_from, trip_to, trip_date, trip_place));
        this.props.dispatch(TripActions.setTripDesiredPlace(trip_place));
    }

    showDetail(trip_reference){
        this.props.history.push(TRIP_SHOW_DETAIL_PATH + '/' + trip_reference);
    }

    goBack(){
        this.props.history.goBack();
    }

    render(){
        let trips = this.props.cov_trips;
        trips.sort((a,b) => (a.startHour > b.startHour) ? 1 : -1);

        return( 
            <div>
                    

                    <div> 
                        <div className="show-all-trip-header container" onClick={() => this.goBack()}>
                            <Row className="show-all-trip-title">
                                <Col className="col-2 col-sm-1">
                                    <Search className="show-all-trip-title-icon"/>
                                </Col>
                                <Col className="trip-title-content col-10 col-sm-11">
                                    <span>{this.state.trip_from} <ArrowRightAltIcon/> {this.state.trip_to} </span> <br/>
                                    <span>{this.state.trip_date}</span>
                                </Col>
                            </Row>
                        </div>
                    
                        <div className="show-all-trip-body container">
                            {trips.length > 0 ? 
                                trips.map((trip,i) =>
                                        <div key={i} onClick={() => this.showDetail(trip.reference)}>
                                            <ShowTrip  
                                                    key = {trip.reference} 
                                                    trip_from = {trip.startCity} 
                                                    trip_to = {trip.endCity} 
                                                    trip_DriverName = {trip.driver.fname + " " + trip.driver.lname} 
                                                    trip_amount = {trip.price}
                                                    trip_places = {trip.place}
                                                    trip_DriverRegisterDate = {trip.driver.registerDate}
                                                    trip_driverPicture = {trip.driver.picture}
                                                    trip_date = {trip.stardDate}
                                                    trip_hour = {trip.startHour}
                                            />
                                        </div>
                                )
                                : 
                                <div className="show-all-trip-not-found">
                                    <Row className="show-all-trip-not-found-icon"> <MoodBadIcon style={{ fontSize: 60 }}/> </Row>
                                    <Row className="show-all-trip-not-found-info"> Il n'y a pas encore de trajet disponible entre ces villes à la date choisie </Row>
                                </div>
                            }
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth, 
      cov_trips: state.cov_trips
  }
}


export default connect(mapStateToProps)(ShowAllTrips)
