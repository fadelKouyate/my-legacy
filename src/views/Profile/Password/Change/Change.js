import React, { Component } from 'react';
import {  Button, Card, CardBody, CardHeader, Col, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';
import './Change.css'
import UserActions from '../../../../store/actions/UserActions'
import { connect } from 'react-redux'
import UserUtils from '../../../../utils/UserUtils'
import Message from '../../../Tools/Message'
import UserApi from '../../../../api/UserApi';
import HttpStatus  from 'http-status-codes';

class ChangePassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cov_old_password: '',
      cov_password: '',
      cov_password_confirmer: '',
      error: false,
      errorStep: -1,
      message: '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  toggle() {
    this.setState({ message:''});
  }

  async updateData() {
    this.setState({error:false})
    let {dispatch} = this.props
    await dispatch(UserActions.updatePassword(this.state.cov_password))
    dispatch(UserActions.updateUserPassword(this.props.cov_user, this.props.token))
      .then(() => {
          Message.loading().then(() => {
              Message.success('Modifications enregistrées avec succès')
                  this.props.history.push("/")
            });           
      })
      .catch((error) => {
        let codeError = UserApi.handleError(error)
        switch(codeError) {
          case HttpStatus.CONFLICT:
           Message.error('Veuillez choisir un mot de passe différent de votre ancien mot de passe');
            break;
           default:
             Message.error('Connexion impossible veuillez réessayer plus tard');
           }         
      }) 
  }

  handleSubmit(event){
    event.preventDefault()
    let { cov_password_confirmer, cov_password, cov_old_password } = this.state

    if (cov_password !== cov_password_confirmer) {
      this.setState({error:true, message:'Erreur mots de passe différents' })
      return;
    }

    let check_new_password = UserUtils.checkValue('cov_password', cov_password)

    let check_old_password = UserUtils.checkValue('cov_password', cov_old_password)

    if ( ! check_old_password.resultat) {
      this.setState({error:true, errorStep:1, message: check_old_password.message})
    }
    else if ( ! check_new_password.resultat) {
      this.setState({error:true, errorStep:2, message: check_new_password.message})
    }
    else {
         this.updateData()
    }
  }

  render() {
    let {  message, error, cov_password_confirmer, cov_password, cov_old_password, errorStep } = this.state
    return (
      <div className="profile-change-passwowrd">
        <Row className="justify-content-center" >
            <Col md="4">
                  <Card>
                  <CardHeader>
                  <span className="profile-title">Mise à jour du mot de passe</span>
                  </CardHeader>
                  <CardBody>
                      <Form onSubmit={ (e) => this.handleSubmit(e) } noValidate>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        
                        <Input 
                            type="password" 
                            placeholder="Ancien mot de passe" 
                            value={cov_old_password} 
                            name="cov_old_password" 
                            invalid={ error && errorStep===1} 
                            onChange={this.handleChange} 
                            autoComplete="email"
                        />
                         <FormFeedback> {message} </FormFeedback>
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        
                        <Input 
                            type="password" 
                            placeholder="Nouveau mot de passe" 
                            value={cov_password} 
                            name="cov_password" 
                            invalid={ error && errorStep===2} 
                            onChange={this.handleChange} 
                            autoComplete="email"
                        />
                        </InputGroup>
                        <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            type="password" 
                            placeholder="confirmation" 
                            value={cov_password_confirmer} 
                            name="cov_password_confirmer" 
                            invalid={error && errorStep === 2} 
                            onChange={this.handleChange} 
                            autoComplete="password"
                        />
                       <FormFeedback> {message} </FormFeedback>
                        </InputGroup>
                        <Row className="justify-content-center">
                        <Col xs="4">
                          <Button color="primary" className="px-4">Valider</Button>
                        </Col>
                        </Row>
                      </Form>
                  </CardBody>
                  </Card>
              </Col>
          </Row>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      cov_user: state.cov_user,
      token: state.auth.token
  }
} 

export default connect(mapStateToProps)(ChangePassword)
