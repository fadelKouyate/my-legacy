import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';
import './Login.css'
import UserActions from '../../store/actions/UserActions'
import { connect } from 'react-redux'
import UserUtils from '../../utils/UserUtils'
import Message from '../Tools/Message'
import HttpStatus  from 'http-status-codes';
import UserApi from '../../api/UserApi';
import {TRIP_CREATE_PATH, TRIP_SHOW_DETAIL_PATH} from '../../config/paths';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cov_mail: '',
      cov_password: '',
      errorStep: 0,
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let logged = this.props.logged;
    let gotoAfter = this.props.gotoAfter;

    //when user is logged and want to create trip
    if(logged &&  gotoAfter === 'CREATE_TRIP'){
      this.props.history.push(TRIP_CREATE_PATH);
    }
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });    
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({errorStep:0})

    let { cov_mail, cov_password } = this.state
    let { dispatch, pathname} = this.props

    let check_mail = UserUtils.checkValue('cov_mail', cov_mail)
    let check_password = UserUtils.checkValue('cov_password', cov_password)

    if ( ! check_mail.resultat) {
      this.setState({errorStep:1, message: check_mail.message})
    }
    else if ( ! check_password.resultat) {
      this.setState({errorStep:2, message: check_password.message})
    }
    else {
         dispatch(UserActions.connectUser(cov_mail, cov_password))
            .then((response) => {
                if(this.props.gotoAfter === 'CREATE_TRIP'){
                  this.props.history.push(TRIP_CREATE_PATH);
                }else if(this.props.gotoAfter === 'BOOK_TRIP'){
                  this.props.history.push(TRIP_SHOW_DETAIL_PATH);
                }else{
                  this.props.history.push(pathname);
                }
            })
          .catch(error => {
            let codeError = UserApi.handleError(error)
             switch(codeError) {
               case HttpStatus.UNAUTHORIZED:
                 Message.error('Email et/ou mot de passe incorrecte(s) vérifier les de nouveau ou faites mot de passe oublié pour réinitialiser votre mot de passe',4);
                 break;
               default:
                  Message.error('Connexion impossible veuillez réessayer plus tard');
                }         
               
            });
  }
  }

  render() {
    let {  message, errorStep, cov_mail, cov_password } = this.state
    return (
      <div className="login">
      <Container> 
        <br />
        <br />
        <br />
        
      <Row className="justify-content-center" >
       
          <Col md="5">
                <Card>
                <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Connexion</strong>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={ (e) => this.handleSubmit(e) } noValidate>
                      <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                          type="text" 
                          placeholder="email" 
                          value={cov_mail} 
                          name="cov_mail" 
                          invalid={ errorStep === 1 } 
                          onChange={this.handleChange} 
                          autoComplete="email"
                      />
                      <FormFeedback> {message} </FormFeedback>
                      </InputGroup>
                      <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                          type="password" 
                          placeholder="mot de passe" 
                          value={cov_password} 
                          name="cov_password" 
                          invalid={errorStep === 2} 
                          onChange={this.handleChange} 
                          autoComplete="password"
                      />
                      <FormFeedback> {message} </FormFeedback>
                      </InputGroup>
                      <Row className="justify-content-center">
                      <Col xs="5">
                        <Button color="primary" className="px-4">connexion</Button>
                      </Col>
                      <Col xs="7" className="text-right">
                        <a color="link" href="/#/profile/password/forgot">Mot de passe oublié</a>
                      </Col>
                      </Row>
                    </Form>
                </CardBody>
                </Card>
            </Col>
        </Row>
        </Container>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      cov_user: state.cov_user,
      pathname: state.pathname,
      logged: state.auth.logged
  }
} 

export default connect(mapStateToProps)(Login)
