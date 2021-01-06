import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button,  Row,  Col} from 'reactstrap';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TripFrom from './TripFrom/TripFrom';
import TripDetail from './TripDetail/TripDetail';
import TripComment from './TripComment/TripComment';
import './CreateTrip.css';
import Review from './Review';
import TripApi from '../../../api/TripApi';
import TripInfos from './TripInfos/TripInfos';
import TripUtils from '../../../utils/TripUtils'

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip_driver:'',
      trip_from: '',
      trip_to: '',
      trip_intermediate:'',
      trip_date: '',
      trip_hour:'',
      trip_place:1,
      trip_amount:'',
      trip_comment: '',
      activeStep: 0,
      save: false,
      error: false,
      errorStep: -1,
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goHome = this.goHome.bind(this);
    this.childData = this.childData.bind(this);

    this.steps = ['Trajet', 'Détail', 'Commentaire', 'Validation'];
  }
  
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
  
  handleNext(){
    let { activeStep, trip_from, trip_to, trip_intermediate, trip_date, trip_hour,
    trip_place, trip_amount, trip_comment } = this.state
    
    if (activeStep < this.steps.length -1) {
      var data = {}

      // départ / arrivée / intermediaire
      if (activeStep === 0){
          data = TripUtils.areValidInput(trip_from, trip_to, trip_intermediate);
      }
      // Details
      else if (activeStep === 1) {
        data = TripUtils.areValidDetailInput(trip_date, trip_hour, trip_place, trip_amount);
      }
      // Commentaire
      else if (activeStep === 2 ) { 
           data = TripUtils.isValidComment(trip_comment);
      }      
      
      if (data.resultat === false) {
          this.setState({ error:true, message:data.message, errorStep:data.errorStep});
          return ;
      }
    }   

    this.setState({error:false, message:'', activeStep:activeStep + 1});
  }

  handleBack(){
    if(this.state.activeStep === 1){
      this.setState({trip_from:'', trip_to:''}); //cause: autoComplete can't take them values
    }

    this.setState({error:false, activeStep:this.state.activeStep -1});
  }

  goHome() {
    this.props.history.push("/")
  }

  cov_trip() {
    let {trip_from, trip_to, trip_intermediate, trip_date, trip_hour, trip_place, trip_amount, trip_comment } = this.state
    return {
      trip_driver: this.props.cov_user.cov_mail,
      trip_from: trip_from,
      trip_to: trip_to,
      trip_intermediate: trip_intermediate,
      trip_date: trip_date,    
      trip_hour: trip_hour,
      trip_max_place: trip_place,
      trip_amount: trip_amount,
      trip_comment: trip_comment
    }
  }

  handleSubmit(event){
    event.preventDefault()
    let cov_trip = this.cov_trip();
 
    TripApi.createTrip(cov_trip)
            .then((response) => {
              this.setState( { save: true });
              this.handleNext();
            })
            .catch(error => {
                throw(error)
            });
  }
  
  // recuperation de valeur saisie dans les champs from, to
  childData(name , value){
    this.setState({
      [name] : value
    })
  }

  render() {
    const steps = this.steps;
    const cov_trip = this.cov_trip()
    const {activeStep, trip_from, trip_to,trip_intermediate, 
          trip_date, trip_hour, trip_place, trip_amount, trip_comment, message} = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
            <Col xs="12">
                <Stepper activeStep={activeStep} alternativeLabel>
                    {
                        steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
                <div>
                  {
                    activeStep === steps.length ? 
                     (
                      <TripInfos save={this.state.save} goHome={this.goHome} />
                     ) 
                    :
                    <form onSubmit={e => { e.preventDefault(); }}>
                        <div>
                            <TripFrom 
                                formStep={0} 
                                activeStep={activeStep} 
                                message={message}  
                                handleChange={this.handleChange} 
                                childData = {this.childData}
                                trip_intermediate = {trip_intermediate}
                            />
                            <TripDetail
                                formStep={1} 
                                activeStep={activeStep} 
                                message={message} 
                                trip_date={trip_date}
                                trip_hour={trip_hour}
                                trip_place={trip_place}
                                trip_amount={trip_amount}
                                handleChange={this.handleChange} 
                            />
                            <TripComment
                                formStep={2} 
                                activeStep={activeStep} 
                                trip_comment={trip_comment}
                                message={message} 
                                handleChange={this.handleChange} 
                            />
                            <Review 
                                formStep={3} 
                                activeStep={activeStep} 
                                cov_trip={cov_trip} 
                                submit={this.handleSubmit} 
                            />
                        </div>
                    </form>
                  }
                </div>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col md="1" xs="5">
                <Button onClick={this.handleBack} disabled={activeStep === 0} aria-pressed="true" block color="primary" className="btn-pill">
                Précédent
                </Button>
            </Col>
            <Col md="1" xs="5">
                <Button onClick={activeStep >= steps.length-1 ? this.handleSubmit : this.handleNext} aria-pressed="true" block color="primary" className="btn-pill">
                {activeStep >= steps.length-1 ? 'Valider' : 'Suivant'}
                </Button>
                <br />
            </Col>
        </Row>
      </div>
     
    );
  }
}

const mapStateToProps = (state) => {
  return {
      cov_user: state.cov_user
  }
}

export default connect(mapStateToProps)(CreateTrip)
