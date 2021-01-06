import React from 'react'
import './Register.css'
import { withRouter } from "react-router-dom"
import {Register_Config} from '../../../config/register_config'
import { connect } from 'react-redux' 
import {updatePhone} from '../../../store/actions/UserActions'

class RegisterTel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cov_phone: '',
            isError:false
          }
        
        this.handleChange   = this.handleChange.bind(this)
        this.handleSubmit   = this.handleSubmit.bind(this)
        this.config = Register_Config['cov_phone']
        this.BASE_TEL = "+224"
    }
    
    componentDidMount() {
        if (! this.props.cov_user.cov_mail ||  this.props.cov_user.cov_mail === "")
            this.props.history.push(this.config.index)

        this.setState({cov_phone:this.props.cov_user.cov_phone})
    }

    handleChange(event) {
        let tel = event.target.value      
        .replace(/\D+/, '')
        .slice(0, 13)
        .replace(/(\d{2})(?=\d)/g, '$1 ')  
        this.setState({cov_phone:tel})    
    }

    handleSubmit(event) {
        event.preventDefault()
        let regex = new RegExp(this.config.regex)
        if (! regex.test(this.state.cov_phone)) {
            this.setState({
                isError:true
            })
        }
        else {
            let phone = this.BASE_TEL + this.state.cov_phone.replace(/ /g,"")
            this.props.dispatch(updatePhone(phone))
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
                            
                                <label className="sr-only">tel</label>
                                <input type="text" 
                                       className={className}
                                       id="inputtel2" 
                                       placeholder="0X XX XX XX XX"
                                       value={this.state.cov_phone}
                                       onChange={this.handleChange}
                                />                       
                            <div className="invalid-feedback">
                                { 
                                  this.state.isError ? this.config.errorMessage : ''
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
  
  export default withRouter(connect(mapStateToProps)(RegisterTel))
