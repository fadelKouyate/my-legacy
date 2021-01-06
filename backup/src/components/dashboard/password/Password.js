

import React from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import './Password.css'
import {updateUserPassword, updatePassword} from '../../../store/actions/UserActions'

class Password extends React.Component {

  constructor(props) {
    super(props)
    this.state = {cov_password: '', confirm_password: '', message: ''}

    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
 
}


handleChange(event) {
  let name = event.target.name
  let value = event.target.value
  if (name === 'cov_password') 

      this.setState({cov_password: value })
  else
      this.setState({confirm_password: value })    
}



async updateData() {
  console.log("updating data")
  await this.props.dispatch(updatePassword(this.state.cov_password))
  this.props.dispatch(updateUserPassword(this.props.cov_user, this.props.token))
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
  console.log('new password ',this.state.confirm_password)
  console.log('confirm ',this.state.cov_password)
  if (this.state.confirm_password !== this.state.cov_password) {
    this.setState({message: 'Mots de passe différents'})
  }
  else
  {
     this.updateData()     
  }   
}


  render() {
    return (
       <div className="update-password">
         <div className="login-box">
  <div className="login-logo">
    <br /> <br />
    <b>Changement de mot de passe</b>
  </div>

  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>

      <form onSubmit={this.handleSubmit} noValidate>
        <div className="input-group mb-3">
          <input type="password" className="form-control" name="cov_password" placeholder="Password" value={this.state.cov_password} onChange={this.handleChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" value={this.state.confirm_password} onChange={this.handleChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
          <br />
        </div>
        <div className="row">
          <div className="col-12">
            <div> {this.state.message} </div>
         
          <br />
            <button type="submit" className="btn btn-primary btn-block">Change password</button>
          </div>
 
        </div>
      </form>

    </div>
 
  </div>
  <br />
</div>
      </div>

    )
  }
}
  
const mapStateToProps = (state) => {
  return {
      cov_user: state.cov_user,
      token: state.auth.token
  }
}

export default withRouter(connect(mapStateToProps)(Password))