import React from 'react'
import 'moment/locale/fr';
import moment from 'moment';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import Message from '../../Tools/Message/Message'
import DeleteIcon from '@material-ui/icons/Delete';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {Col, Row, Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

import './DriverTrips.css'
import TripApi from '../../../api/TripApi';

class DriverTrips extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
        modal: false,
        modalAction: '',
        profileModal: false,
        driverTrips : [],
        modalBodyMessage: '',
        updateTripModal:false,
        current_passenger: {},
        current_trip_hour:'',
        current_trip_amount:'',
        modalHeaderMessage: '',
        current_trip_reference: '',
        current_trip_description:'',
        current_passenger_email : ''
    }

    this.toggle = this.toggle.bind(this);
    this.confirmModal = this.confirmModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleProfileModal = this.toggleProfileModal.bind(this);
    this.toggleUpdateTripModal = this.toggleUpdateTripModal.bind(this);
    this.confirmUpdateTripModal = this.confirmUpdateTripModal.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleProfileModal(){
    this.setState({
      profileModal: !this.state.profileModal
    });
  }

  toggleUpdateTripModal(){
    this.setState({
      updateTripModal: !this.state.updateTripModal
    });
  }

  showProfilModal(passenger){
    this.setState({
      current_passenger: passenger.user
    });

    this.toggleProfileModal();
  }

  showUpdateModal(trip){
      this.setState({
        current_trip_amount: trip.price,
        current_trip_hour : trip.startHour,
        current_trip_reference: trip.reference,
        current_trip_description: trip.description
      });

      this.toggleUpdateTripModal();
  }

  showModal(trip_reference, passenger_email, modalAction){
    this.setState({
      current_trip_reference: trip_reference,
      current_passenger_email: passenger_email
    });

    if(modalAction === 'DELETE_TRIP'){
      this.setState({
        modalHeaderMessage:'Suppression',
        modalBodyMessage: 'Voulez vous vraiment supprimer ce trajet?',
        modalAction: modalAction
      })
    } else if(modalAction === 'CANCEL_BOOKING'){
      this.setState({
        modalHeaderMessage:'Annulation',
        modalBodyMessage: 'Voulez vous vraiment annuler la réservation de ce passager?',
        modalAction: modalAction
      })
    } else if(modalAction === 'REFUSE_BOOKING'){
      this.setState({
        modalHeaderMessage:'Refus',
        modalBodyMessage: 'Voulez vous vraiment refuser la réservation de ce passager?',
        modalAction: modalAction
      })
    }

    this.toggle();
  }

  confirmModal(){
      let action = this.state.modalAction;

      if(action === 'DELETE_TRIP'){
        this.cancelTrip(this.state.current_trip_reference);
      } else if(action === 'CANCEL_BOOKING'){
        this.cancelBooking(this.state.current_trip_reference, this.state.current_passenger_email);
      }else if(action === 'REFUSE_BOOKING'){
        this.refuseBooking(this.state.current_trip_reference, this.state.current_passenger_email);
      }

      this.toggle();
  }

  updateBody(){
    return {
        trip_reference : this.state.current_trip_reference,
        trip_hour: this.state.current_trip_hour,
        trip_amount: this.state.current_trip_amount,
        trip_comment: this.state.current_trip_description
    }
  }

  confirmUpdateTripModal(){
      let body = this.updateBody();

      TripApi.updateTrip(body)
            .then((response) => {
              Message.success('Modifications enregistrées avec succès', 2);
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            }).catch(error => {
                Message.error('Erreur technique: veuillez rééssayer plus tard', 2)
                throw(error)
            });
      this.toggleUpdateTripModal();
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  getResponseBody(trip_reference, passengerEmail, driverResponse){
    return {
        trip_reference : trip_reference,
        trip_passenger: passengerEmail,
        trip_driver_response: driverResponse,
    }
  }

  refuseBooking(trip_reference, passenger_email){
    let body = this.getResponseBody(trip_reference, passenger_email, "REFUSE")
    TripApi.bookingValidation(body)
            .then((response) => {
                window.location.reload();
            }).catch(error => {
                throw(error)
            });
  }

  validateBooking(trip_reference, passenger_email) {
    let body = this.getResponseBody(trip_reference, passenger_email, "VALIDE")
    TripApi.bookingValidation(body)
            .then((response) => {
              window.location.reload();
            }).catch(error => {
                throw(error)
            });
  }

  cancelBody(trip_reference, email){
    return {
        trip_reference : trip_reference,
        trip_passenger: email,
    }
  }

  cancelBooking(trip_reference, passenger_email) {
    let body = this.cancelBody(trip_reference, passenger_email)
    TripApi.cancelBooking(body)
            .then((response) => {
              window.location.reload();
            }).catch(error => {
                throw(error)
            });
  }

  cancelTrip(trip_reference){
    let body = {trip_reference: trip_reference};
    TripApi.cancelTrip(body)
            .then((response) => {
              window.location.reload();
            }).catch(error => {
                throw(error)
            });
  }

  componentDidMount(){
    let drvierEmail = this.props.cov_user.cov_mail
    TripApi.readDriverTrips(drvierEmail)
            .then((response) => {
                this.setState({
                  driverTrips : response.data
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
    let trips = this.state.driverTrips;
    trips.sort((a,b) => (a.startDate < b.startDate) ? 1 : -1);

    return (
      <div className="container driver-trip-content">
            {trips.map((trip, i) =>
                <div key={i} className="trip-element">
                    {this.isClose(trip.startDate) ?
                    <Row className="passenger-trip-status-open"> <b> En cours </b></Row>
                     :
                     <Row className="passenger-trip-status-close"> <b> Terminé </b></Row>
                    } 
                    
                    <Row className="driver-trip-header">
                      <Col className="col-8 col-sm-10">
                        <Row> {trip.startCity} <span>&nbsp; ...<AirportShuttleIcon/>...&nbsp; </span> {trip.endCity} </Row>
                        <Row> Le {moment(trip.startDate, "YYYY-MM-DD").format("DD MMM YYYY")} &nbsp;
                              à {trip.startHour}
                        </Row>
                        <Row> Montant {trip.price}gnf </Row>
                      </Col>
                      <Col className="driver-trip-edit-icon col-2 col-sm-1"> 
                        <EditIcon onClick={() => this.showUpdateModal(trip)}/> 
                      </Col>
                      <Col className="col-2 col-sm-1 driver-trip-delete-icon"> 
                        <DeleteIcon onClick={() => this.showModal(trip.reference , '', 'DELETE_TRIP')}/> 
                      </Col>
                    </Row> 

                    <Row className="driver-trip-passenger-title"> 
                          Liste des passagers de ce voyage
                    </Row> 

                    {trip.passenger.length > 0 ?
                      (                                            
                        <Row className="driver-trip-body">
                          {trip.passenger.map((passenger, i) =>
                            <Col key = {i} className="driver-trip-passenger col-12 col-sm-6">
                              <Row className="driver-trip-passenger-picture">
                              <Avatar className="driver-trip-passenger-avatar"  
                                      src={passenger.user.picture}
                                      onClick={() => this.showProfilModal(passenger)}/>
                              </Row>
                              <Row className="driver-trip-passenger-name">
                                  {passenger.user.fname} {passenger.user.lname}
                              </Row>
                              <Row className="driver-trip-passenger-status">
                                  Statut: {passenger.status}<br/>
                              </Row>
                              <Row className="driver-trip-passenger-body">
                                  {passenger.status === 'VALIDE' ?
                                      (
                                        <Button className = "driver-trip-cancel"  onClick={() => this.showModal(trip.reference ,  passenger.user.email, 'CANCEL_BOOKING')}> Annuler</Button>
                                      ):(
                                      <Row>
                                        <Col>
                                          <Button className = "driver-trip-accept"  onClick={() => this.validateBooking(trip.reference, passenger.user.email)}> Accepter</Button>
                                        </Col>
                                        <Col>
                                          <Button className = "driver-trip-refuse"  onClick={() => this.showModal(trip.reference ,  passenger.user.email, 'REFUSE_BOOKING')}> Refuser </Button>
                                        </Col>
                                      </Row>
                                      )
                                    }
                              </Row>
                            </Col>
                            )}
                        </Row>
                      ):(
                        <Row className="driver-trip-no-passenger"> Vous n'avez pas encore de passager pour ce trajet...</Row>
                      )}  
                </div>
            )}

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                    {this.state.modalHeaderMessage}
                </ModalHeader>
                <ModalBody>
                    <b>{this.state.modalBodyMessage}</b>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={this.confirmModal}>Oui</Button>{' '}                   
                <Button color="secondary" onClick={this.toggle}>Non</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.profileModal} toggle={this.toggleProfileModal}>
                <ModalHeader toggle={this.toggleProfileModal}>
                    <Avatar className="driver-trip-passenger-avatar"  src={this.state.current_passenger.picture}/>
                </ModalHeader>
                <ModalBody>
                    <Row className="passenger-profil-name">{this.state.current_passenger.fname} {this.state.current_passenger.lname}</Row>
                    <Row className="passenger-profil-register">Membre depuis : {moment(this.state.current_passenger.registerDate, "dd/MM/yyy HH:mm:ss").format("MMMM YYYY")}</Row>
                    <Row className="passenger-profil-email">Email vérifié : Oui <CheckCircleOutlineIcon className="passenger-profil-check"/> </Row>
                    <Row className="passenger-profil-phone">Numero vérifié: Oui <CheckCircleOutlineIcon className="passenger-profil-check"/> </Row>
                    <Row className="passenger-profil-description">{this.state.current_passenger.description}</Row>
                </ModalBody>
                <ModalFooter>                 
                <Button color="secondary" onClick={this.toggleProfileModal}>Retour</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.updateTripModal} toggle={this.toggleUpdateTripModal}>
                <ModalHeader toggle={this.toggleUpdateTripModal}>
                      Modification du trajet
                </ModalHeader>
                <ModalBody className="update_trip_modal_body">
                    <Row className=""> 
                      <Label className="detailLabel">Heure de départ</Label>
                      <Input type="time" name="current_trip_hour" value={this.state.current_trip_hour} className="trip_hour" onChange={this.handleChange} />
                    </Row>
                    <Row className=""> 
                      <Label className="detailLabel">Montant</Label>
                      <Input type="text" name="current_trip_amount" value={this.state.current_trip_amount} className="trip_amount" onChange={this.handleChange} />
                    </Row>
                    <Row className=""> 
                      <Label className="detailLabel">Description</Label>
                      <Input type="text" name="current_trip_description" value={this.state.current_trip_description} className="trip_description" onChange={this.handleChange} />
                    </Row>
                </ModalBody>
                <ModalFooter>                 
                  <Button color="primary" onClick={this.confirmUpdateTripModal}>Valider</Button>                  
                  <Button color="secondary" onClick={this.toggleUpdateTripModal}>Annuler</Button>
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
    cov_trips: state.cov_trips
  }
}

export default connect(mapStateToProps)(DriverTrips)