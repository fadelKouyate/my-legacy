import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';
import './ForgotPassword.css'
import UserActions from '../../../store/actions/UserActions'
import { connect } from 'react-redux'
import UserUtils from '../../../utils/UserUtils'

class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cov_mail: '',
      error: false,
      message: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ error: false })

    let { cov_mail } = this.state
    let { dispatch } = this.props

    let check_mail = UserUtils.checkValue('cov_mail', cov_mail)
    if (!check_mail.resultat) {
      this.setState({ error: true, message: check_mail.message })
    }
    else {
      dispatch(UserActions.forgotPassword(cov_mail))
        .then((response) => {
          this.props.history.push("/")
        })
        .catch(error => {
          this.setState({ error: true, message: 'Impossible de réinitialiser le mot de passe' })
        });
    }
  }

  render() {
    let { message, error, cov_mail } = this.state
    console.log(this.props)
    return (
      <div className="login">
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row className="justify-content-center" >

            <Col md="5">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Initialisation du mot de passe</strong>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={(e) => this.handleSubmit(e)} noValidate>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Saisir l'adresse email"
                        value={cov_mail}
                        name="cov_mail"
                        invalid={error}
                        onChange={this.handleChange}
                        autoComplete="email"
                      />
                      <FormFeedback> {message} </FormFeedback>
                    </InputGroup>

                    <Row className="justify-content-center">
                      <Col xs="4">
                        <Button color="primary" className="px-4">valider</Button>
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
    cov_user: state.cov_user
  }
}

export default connect(mapStateToProps)(ForgotPassword)
