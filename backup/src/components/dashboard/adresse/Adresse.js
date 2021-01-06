

import React from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import {updateUser, updateCity} from '../../../store/actions/UserActions'
import './Adresse.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class Adresse extends React.Component {

  constructor(props) {
    super(props)
    this.state = {cov_city: ''}
 
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
}

componentDidMount() {
    console.log("did mount ",this.props.cov_user)
    this.setState({ cov_city:this.props.cov_user.cov_city })
 }

 handleChange(event) {
    let value = event.target.value
    this.setState({cov_city:value})     
}



async updateData() {
    await this.props.dispatch(updateCity(this.state.cov_city))
    this.props.dispatch(updateUser(this.props.cov_user, this.props.token))
        .then(() => {
            console.log("UPDATE DONE WITH SUCESS ")
            this.props.history.push("/")
        })
        .catch((error) => {
            console.log("ERROR UPDATE ",error)
        }) 
}

handleSubmit(e) {
    e.preventDefault()
    this.updateData()        
}


  render() {
    return (
        <Container className="dashboard-adresse">
        <p className="title-adresse"> Modification de l'adresse </p>
        <hr />
        <Form onSubmit={this.handleSubmit} noValidate>

                <br />
            <Row>
                <Col sm="3"> <label> Adresse </label> </Col>
                <Col sm="4"> <Form.Control type="text" value={this.state.cov_city} onChange={this.handleChange}  /> </Col>
            </Row>

            <Row>
                <Col sm="3"> </Col>
                <Col sm="4"> <br />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button> 
                             
                </Col>
            </Row>
                     <br />
      </Form>
      </Container>

    )
  }
}
  
const mapStateToProps = (state) => {
  return {
      cov_user: state.cov_user,
      token: state.auth.token
  }
}

export default withRouter(connect(mapStateToProps)(Adresse))