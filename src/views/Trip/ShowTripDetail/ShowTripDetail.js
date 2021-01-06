import React from 'react';
import 'moment/locale/fr';
import moment from 'moment';
import './ShowTripDetail.css';
import { connect } from 'react-redux';
import TripApi from '../../../api/TripApi';
import {Button, Row, Col} from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import Message from '../../Tools/Message/Message'
import TripActions from '../../../store/actions/TripActions';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {LOGIN_BOOK_TRIP_PATH, TRIP_BOOKING_INFO} from '../../../config/paths';


class ShowTripDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            current_trip : '',
            current_trip_driver : '',
            trip_passengers : [],
        };

        this.book  = this.book.bind(this);
        this.login = this.login.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    login(){
        this.props.history.push(LOGIN_BOOK_TRIP_PATH);
    }

    // convert first char to uppercase
    strUpFirst(val){
        return (val+'').charAt(0).toUpperCase()+val.substr(1);
    }

    bookValues(){
        return {
            trip_reference : this.state.current_trip.reference,
	        trip_passenger: this.props.cov_user.cov_mail,
            trip_place: this.props.cov_trip_placeDesired,
        }
    }

    book(event){
        let bookValues = this.bookValues();
        TripApi.bookTrip(bookValues)
                .then((response) => {
                    this.props.history.push(TRIP_BOOKING_INFO);
                })
                .catch(error => {
                    Message.error('Erreur technique: veuillez rééssayer plus tard', 2)
                    throw(error)
                });
    }

    goBack(){
        this.props.history.goBack();
    }

    componentDidMount(){
        let {trip_reference} = this.props.match.params;

        if(trip_reference){
            let trips = this.props.cov_trips;
            trips.filter(trip => trip.reference === trip_reference)
                .map((trip) => {
                    this.setState({
                        current_trip : trip,
                        current_trip_driver : trip.driver,
                        trip_passengers : trip.passenger
                    });
                    this.props.dispatch(TripActions.setCurrentTrip(trip));
                }            
            );
        }else{ //access to this page after login
           let current_trip = this.props.cov_current_trip;
            this.setState({
                current_trip : current_trip,
                current_trip_driver : current_trip.driver
            });
        }
    }

    render(){
        let momentVariable = moment(this.state.current_trip.startDate, "YYY-MM-DD");
        var startDate = this.strUpFirst(momentVariable.format("ddd DD MMM"));
        return( 
            <div className="trip-body container">
                <Row className="show-trip-detail-header">
                    <Col className="col-2 col-sm-4">
                        <ArrowBackIosIcon className="trip-back" onClick={this.goBack}/> 
                    </Col>
                    <Col className="trip-date col-10 col-sm-6"><h1> {startDate} </h1></Col>
                </Row>

                <Row className="trip-from">
                        Depart : {this.state.current_trip.startCity}
                </Row>
                <Row className="trip-interval"> </Row>
                <Row className="trip-to">
                        Arrivée: {this.state.current_trip.endCity}
                </Row>
                <Row className="trip-space"> </Row>

                <Row className="trip-price">
                   <Col> Prix total pour un passager </Col> 
                   <Col className="trip-price-value"> {this.state.current_trip.price} GNF</Col>
                </Row>

                <Row className="trip-space"> </Row>

                <Row className="trip-driver">
                    <Col className="col-2"> 
                        <Avatar className="trip-driver-picture"  src={this.state.current_trip_driver.picture}/>
                    </Col>
                    <Col className="col-8">
                        <span className="trip-driver-name">
                            {this.state.current_trip_driver.fname + " " + this.state.current_trip_driver.lname}
                        </span> <br/>
                        <span className="trip-driver-info">
                            Membre depuis <br/>
                            {moment(this.state.current_trip_driver.registerDate, "dd/MM/yyy HH:mm:ss").format("d/MM/yyy")}
                        </span>
                    </Col>
                </Row>
                <Row className="trip-driver-description">
                    {this.state.current_trip.description}
                </Row>
                <Row className="trip-space"> </Row>

                <Row className="trip-passengers-title"> Liste des passagers du trajet</Row>
                 
                <Row className="trip-passenger">
                    {this.state.trip_passengers.map((passenger, i) =>
                        <Col key = {i} > 
                            <Avatar className="trip-passenger-picture"  src={passenger.user.picture}/>
                            <span className="trip-passenger-name">
                                {passenger.user.fname + " " + passenger.user.lname}
                            </span> <br/>
                        </Col>
                    )}
                </Row>

                <Row className="trip-next">
                    <Button className="show_trip_detail_forme_btn" onClick={this.book}
                        onClick={this.props.auth.logged === true ? this.book : this.login} aria-pressed="true" block 
                        color={this.props.auth.logged === true ? "success" : "primary"}>
                        {this.props.auth.logged === true ? 'Reserver' : 'Se connecter'}
                    </Button>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cov_user: state.cov_user, 
        cov_current_trip: state.cov_current_trip,
        cov_trips: state.cov_trips,
        cov_trip_placeDesired: state.cov_trip_placeDesired
    }
  }

export default connect(mapStateToProps)(ShowTripDetail)
