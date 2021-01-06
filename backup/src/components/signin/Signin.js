
import React from 'react'
import { withRouter } from "react-router-dom"
import {Register_Config} from '../../config/register_config'
import './signin.css'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {connectUser} from '../../store/actions/UserActions'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cov_mail:'',
            cov_password:'',
            isErrorMail:false,
            isErrorPassword:false,
            message:' '
          }
        
          this.handleSubmit = this.handleSubmit.bind(this)
          this.handleChange = this.handleChange.bind(this)
          this.configCovMail = Register_Config['cov_mail']
          this.configCovPassword = Register_Config['cov_password']
    }

    handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        
        if (name === "cov_mail")
            this.setState({cov_mail:value})
        else
            this.setState({cov_password:value})     
    }


    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            isErrorMail:false,
            isErrorPassword:false,
        })

        let regexMail = new RegExp(this.configCovMail.regex)
        let regexPassword = new RegExp(this.configCovPassword.regex)

        if ( ! regexMail.test(this.state.cov_mail)) {
            this.setState({isErrorMail:true, message: this.configCovMail.errorMessage})
        }
        else if ( ! regexPassword.test(this.state.cov_password)) {
            this.setState({isErrorPassword:true, message: this.configCovPassword.errorMessage})
        }
        
        this.props.dispatch(connectUser(this.state.cov_mail, this.state.cov_password))
            .then(() => {
                this.props.history.push("/")
            })
            .catch(error => {
                this.setState({message:'Erreur to connect', isError:true})
            })
        
    }
    

    render() {
        let classEmail = this.state.isErrorMail ? "arrondi form-control is-invalid" : "arrondi form-control"  
        let classPassword = this.state.isErrorPassword ? "arrondi form-control is-invalid" : "arrondi form-control"  
        
    return (
        <div className="container">
            <br />
            <br />
                <p>
                    Identification
                </p>
                <Row>
                    <Col sm="2" />
                    <Col sm="6">
                        <Form noValidate>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Email
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="email" placeholder="" className={classEmail} name="cov_mail" value={this.state.cov_mail} onChange={this.handleChange} />
                            </Col>
                        </Form.Group>
                    

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={4}>
                            Password
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="password" placeholder="" className={classPassword} name="cov_password" value={this.state.cov_password} onChange={this.handleChange}  />
                            </Col>
                        </Form.Group> 
                    
                        <Row>
                            <Col sm="3" />
                            <Col>
                                <div className="invalid-feedback">
                                    { 
                                        this.state.message
                                    }
                                </div>
                                <br />
                    
                                <Button onClick={this.handleSubmit} variant="primary arrondi" type="submit">
                                    Submit
                                </Button>
                                <br /> <br /> <br />
                            </Col>
                        </Row>
                        </Form> 
                    </Col>
                    <Col sm="3" />
                </Row>

        </div>

      )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
  }
  
  export default withRouter(connect(mapStateToProps)(SignIn))