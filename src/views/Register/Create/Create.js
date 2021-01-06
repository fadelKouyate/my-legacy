import './Create.css';
import Mail from './Mail';
import Names from './Names';
import Infos from './Infos';
import Others from './Others';
import Review from './Review';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Step from '@material-ui/core/Step';
import UserApi from '../../../api/UserApi';
import { Button,  Row,  Col} from 'reactstrap';
import Stepper from '@material-ui/core/Stepper';
import UserUtils from '../../../utils/UserUtils';
import StepLabel from '@material-ui/core/StepLabel';
import UserActions from '../../../store/actions/UserActions'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cov_mail: '',
      cov_first_name: '',
      cov_last_name: '',    
      cov_city:'',
      cov_phone:'',
      cov_gender:'H',
      cov_password:'',
      cov_password_confirmer:'',
      activeStep: 0,
      save: false,
      error: false,
      errorStep: -1,
      message: '',
      cov_mail_exist: false
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goHome = this.goHome.bind(this)
    this.steps = ['Identification', 'Noms', 'Autres', 'Validation']
  }
  
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
  
  async checkEmail(cov_mail){
    try {
      const response = await UserApi.checkMail(cov_mail);
      this.setState({ cov_mail_exist: response.data });
    } catch (error) {
      throw (error);
    }
  }

  async handleNext(){
    let { activeStep, cov_mail, cov_first_name, cov_last_name, cov_gender, cov_phone, cov_city, cov_password, cov_password_confirmer } = this.state
  
    if (activeStep < this.steps.length -1) {
      var data = {}
      
      //mail
      if (activeStep === 0){
          data = UserUtils.checkValue('cov_mail', cov_mail, 1)
          if(data.resultat){
              await this.checkEmail(cov_mail);
              
              if(this.state.cov_mail_exist){
                this.setState({error:true, message:"Ce compte existe déjà", errorStep:1});
                return ;
              }

              data = UserUtils.checkValue('cov_password', cov_password, 2)
              if(cov_password !== cov_password_confirmer) {
                  this.setState({ error:true, message:"mots de passe différents", errorStep:2});
                  return ;
              }
          }
      }
      //noms
      else if (activeStep === 1) {
          data = UserUtils.checkValue('cov_names', cov_first_name, 1)
          if(data.resultat)
            data = UserUtils.checkValue('cov_names', cov_last_name, 2)
      }
      //autres
      else if (activeStep ===2 ) {
          data = UserUtils.checkValue('cov_city', cov_city, 1)
          if(data.resultat)
            data = UserUtils.checkValue('cov_phone', cov_phone, 2)
          if(data.resultat)
          data = UserUtils.checkValue('cov_gender', cov_gender, 3)
      }

      if (! data.resultat) {
          this.setState({ error:true, message:data.message, errorStep:data.errorStep});
          return ;
      }
    }   
    this.setState({error:false, message:'', activeStep:activeStep + 1});
  };

  handleBack(){
    this.setState({error:false, activeStep:this.state.activeStep -1});
  }

  goHome() {
    this.props.history.push("/")
  }

  cov_user() {
    let { cov_mail, cov_first_name, cov_last_name, cov_gender, cov_phone, cov_city, cov_password } = this.state
    return {
      'cov_mail': cov_mail,
      'cov_first_name' : cov_first_name,
      'cov_last_name' : cov_last_name,
      'cov_gender': cov_gender,
      'cov_phone' : cov_phone,
      'cov_city' : cov_city,
      'cov_password' : cov_password,
      'cov_description' : ''
    }
  }

  handleSubmit(event){
    event.preventDefault()
    let cov_user = this.cov_user()
    this.props.dispatch(UserActions.saveUser(cov_user))
    .then((response) => {
        this.setState( { save: true })
        this.handleNext()
    })
   .catch(error => {
       this.setState( { save: false })
       this.handleNext()
    });
  }
   
  render() {
    const steps = this.steps;
    const cov_user = this.cov_user()
    const {activeStep, cov_mail, cov_first_name, cov_last_name, cov_phone, cov_city, cov_gender, cov_password, cov_password_confirmer, message, error, errorStep} = this.state;
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
                  activeStep === steps.length ? (
                  <Infos save={this.state.save} goHome={this.goHome} />
                ) :
                <form onSubmit={e => { e.preventDefault(); }}>
                    <div >
                        <Mail 
                            formStep={0} 
                            activeStep={activeStep} 
                            value_mail={cov_mail} 
                            value_password={cov_password} 
                            value_password_confirmer={cov_password_confirmer} 
                            message={message} 
                            error={error} 
                            errorStep={errorStep} 
                            handleChange={this.handleChange} 
                        />
                        <Names 
                            formStep={1} 
                            activeStep={activeStep} 
                            value_first_name={cov_first_name} 
                            value_last_name={cov_last_name} 
                            message={message} 
                            error={error} 
                            errorStep={errorStep} 
                            handleChange={this.handleChange} 
                        />
                        <Others 
                            formStep={2} 
                            activeStep={activeStep} 
                            value_phone={cov_phone} 
                            value_city={cov_city} 
                            message={message} 
                            value_gender={cov_gender} 
                            error={error} 
                            errorStep={errorStep} 
                            handleChange={this.handleChange} 
                        />
                        <Review 
                            formStep={3} 
                            activeStep={activeStep} 
                            cov_user={cov_user} 
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

export default connect(mapStateToProps)(Register)
