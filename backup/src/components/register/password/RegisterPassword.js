import React from 'react'
import './Register.css'
import { withRouter } from "react-router-dom"
import {Register_Config} from '../../../config/register_config'
import { connect } from 'react-redux'
import {updatePassword} from '../../../store/actions/UserActions'

class RegisterPassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cov_password: '',
            cov_pwd_confirmer: '',
            isError:false,
            message:''
          }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.config = Register_Config['cov_password']
    }
   
    componentDidMount() {
        if (! this.props.cov_user.cov_mail ||  this.props.cov_user.cov_mail === "")
            this.props.history.push(this.config.index)
        this.setState({cov_password:this.props.cov_user.cov_password})
        this.setState({cov_pwd_confirmer:this.props.cov_user.cov_password})
    }

    handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        if (name === "password_1")
            this.setState({"cov_password":value})
        else
            this.setState({"cov_pwd_confirmer":value})     
    }

    handleSubmit(event) {
        event.preventDefault()
        let regex = new RegExp(this.config.regex)
        if(this.state.cov_password !== this.state.cov_pwd_confirmer)
            this.setState({ 
                isError:true, 
                message:"mots de passe non identiques"
        })
        else if (! regex.test(this.state.cov_password)) {
            this.setState({
                isError:true,
                message:this.config.errorMessage
            })
        }
        else {
            this.props.dispatch(updatePassword(this.state.cov_password))
            this.props.history.push(this.config.redirect)
        }
        
    }
    render() {  
        const className = this.state.isError ? "arrondi form-control is-invalid" : "arrondi form-control" 
        return (
                        <form onSubmit={this.handleSubmit} noValidate>
                        <div className="form-group form-inscription">
                            <br />
                            <label>{this.config.title}</label>
                                <label className="sr-only">Password</label>
                                <input type="password" 
                                       className={className}
                                       id="inputPassword1" 
                                       name="password_1"
                                       placeholder="mot de passe"
                                       value={this.state.cov_password}
                                       onChange={this.handleChange}
                                />  
                                <br />
                                <input type="password" 
                                       className={className}
                                       id="inputPassword2" 
                                       name="password_2"
                                       placeholder="confirmation"
                                       value={this.state.cov_pwd_confirmer}
                                       onChange={this.handleChange}
                                />                             
                            <div className="invalid-feedback">
                                { 
                                  this.state.isError ? this.state.message : ''
                                }
                            </div>
                            <p>
                                <br />
                            </p>
                            <button type="submit" className="btn btn-primary mb-2 arrondi">Continuer</button>
                        </div>
                        </form>                  

        )
    }
}
const mapStateToProps = (state) => {
    return {
        cov_user: state.cov_user
    }
  }
  
  export default withRouter(connect(mapStateToProps)(RegisterPassword))
