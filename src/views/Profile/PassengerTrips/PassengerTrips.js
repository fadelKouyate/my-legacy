import React from 'react'
import 'moment/locale/fr';
import moment from 'moment';
import './PassengerTrips.css';
import { connect } from 'react-redux';
import TripApi from '../../../api/TripApi';
import Avatar from '@material-ui/core/Avatar';
import { Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { TrendingUpOutlined } from '@material-ui/icons';



class PassengerTrips extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
        modal: false,
        passengerTrips : [],
        current_trip_reference: ''
    }

    this.toggle = this.toggle.bind(this);
    this.cancelBooking = this.cancelBooking.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  showModal(trip_reference){
    this.setState({current_trip_reference:trip_reference});
    this.toggle();
  }

  getCancelBody(trip_reference, passengerEmail){
    return {
        trip_reference : trip_reference,
        trip_passenger: passengerEmail,
    }
  }

  cancelBooking() {
    let passenger_email = this.props.cov_user.cov_mail;
    let requestBody = this.getCancelBody(this.state.current_trip_reference, passenger_email);
    TripApi.cancelBooking(requestBody)
            .then((response) => {
                this.toggle()
                window.location.reload();
            }).catch(error => {
                throw(error)
            });
  }

  componentDidMount(){
    this.setState({current_trip_reference:''});
    let passengerEmail = this.props.cov_user.cov_mail
    TripApi.readPassengerTrips(passengerEmail)
            .then((response) => {
                this.setState({
                    passengerTrips: response.data
                })
            }).catch(error => {
                throw(error)
            });
  }

  isClose(tripStartDate){
    var startDate = new Date(tripStartDate);
    var now = new Date();

    if(startDate < now){
        return false;
    }else{
        return true;
    }
  }

  render() {  
    let trips = this.state.passengerTrips;
    trips.sort((a,b) => (a.startDate < b.startDate) ? 1 : -1);

    return (
        <div className="passenger-trips-body container">
            { trips.map((trip,i) =>
                <div className="trip-element" key={i}>
                    {this.isClose(trip.startDate) ?
                    <Row className="passenger-trip-status-open"> <b> En cours </b></Row>
                     :
                     <Row className="passenger-trip-status-close"> <b> Terminé </b></Row>
                    } 
                    <Row className="trip-content">
                        <Col className="trip-driver col-5">
                            <Row className="justify-content-center"> 
                                <Avatar className="trip-driver-avatar"  src={trip.driver.picture}/>
                            </Row>
                            <Row className="trip-driver-profil">
                                {trip.driver.fname} {trip.driver.lname} <br/>
                            </Row>
                            <Row className="trip-driver-profil">
                                <span>Statut: {trip.status}</span>
                            </Row>
                        </Col>
                        <Col className="trip-description col-5">
                            <Row className="trip-description-date"> 
                                {moment(trip.startDate, "YYYY-MM-DD").format("DD MMM YYYY")}
                            </Row>
                            <Row className="trip-description-from"> 
                                <b>Départ </b> &nbsp; {trip.startCity}
                            </Row>
                            <Row className="trip-description-icon"> </Row>
                            <Row className="trip-description-to">
                                <b>Arrivée </b> &nbsp; {trip.endCity}
                            </Row>
                        </Col>
                        <Col className="col-2"> 
                            <Row className="trip-amount">
                                {trip.price}gnf 
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Button className = "cancelBtn" 
                         disabled = {this.isClose(trip.startDate) ? false : true}
                         onClick={() => this.showModal(trip.reference)}> Annuler ce trajet</Button>
                    </Row>
                </div>
            )}

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        Annulation
                    </ModalHeader>
                    <ModalBody>
                        <b>Voulez vous vraiment annuler ce trajet?</b>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.cancelBooking}>Oui</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Non</Button>
                    </ModalFooter>
            </Modal>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cov_user: state.cov_user,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps)(PassengerTrips)