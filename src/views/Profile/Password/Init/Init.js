import React, { Component } from 'react';
import {  Button, Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';
import './Init.css'
import UserActions from '../../../../store/actions/UserActions'
import { connect } from 'react-redux'
import UserUtils from '../../../../utils/UserUtils'
import queryString from 'query-string'
import Message from '../../../Tools/Message'

class Init extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cov_password: '',
      cov_password_confirmer: '',
      error: false,
      message: '',
      token:''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target;
    console.log(value);
    this.setState({
      [name]: value
    })    
  }

  toggle() {
    this.setState({ error: false});
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    let token = values.token
    if (!token)     
        this.props.history.push("/")
    this.setState({token: token})
  }

  goHome() {
    this.props.history.push("/")
  }

  async updateData() {
    let {dispatch} = this.props
    await dispatch(UserActions.updatePassword(this.state.cov_password))
    dispatch(UserActions.initPassword(this.props.cov_user, this.state.token))
        .then(() => {
          Message.success('Modifications enregistrées avec succès')
            UserUtils.sleep(1).then(()=> {
                this.props.history.push("/")
            })
        })
        .catch((error) => {
          Message.success('Modifications enregistrées avec succès')
            UserUtils.sleep(1).then(()=> {
                this.props.history.push("/")
            })
        }) 
  }

  handleSubmit(event){
    event.preventDefault()

    let { cov_password, cov_password_confirmer } = this.state

    if (cov_password !== cov_password_confirmer) {
      this.setState({error:true, message:'Erreur mots de passe différents' })
      return;
    }

    let check_password = UserUtils.checkValue('cov_password', cov_password)

    if ( ! check_password.resultat) {
      this.setState({error:true, message: check_password.message})
    }
    else {
         this.updateData()
    }
  }

  render() {
    let {  error, cov_password_confirmer, cov_password, message } = this.state
    return (
      <div className="login">
      <Container> 
        <br />
        {
          !error ? <br />: ''
        }
      <Row className="justify-content-center"> 
        <Col md="8">
          </Col>
      </Row>
      <Row className="justify-content-center" >
          <Col md="5">
                <Card>
                <CardHeader>
                <strong>Initialisation du mot de passe</strong>
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
                          placeholder="mot de passe" 
                          value={cov_password} 
                          name="cov_password" 
                          invalid={ error} 
                          onChange={this.handleChange} 
                          autoComplete="password"
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
                          placeholder="confirmation" 
                          value={cov_password_confirmer} 
                          name="cov_password_confirmer" 
                          invalid={error} 
                          onChange={this.handleChange} 
                          autoComplete="password"
                      />
                       <FormFeedback> {message} </FormFeedback>
                      </InputGroup>
                      <Row className="justify-content-center">
                      <Col xs="4">
                        <Button onClick={this.handleSubmit} color="primary" className="px-4">valider</Button>
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
      token: state.auth.token
    } 
}

export default connect(mapStateToProps)(Init)
