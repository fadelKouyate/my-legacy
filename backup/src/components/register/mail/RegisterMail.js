import React from 'react'
import './Register.css'
import { withRouter } from 'react-router-dom'
import { Register_Config } from '../../../config/register_config'
import { connect } from 'react-redux'
import {  updateMail } from '../../../store/actions/UserActions'


class RegisterMail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cov_mail: '',
            isError:false,
            message: '',
          }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.config = Register_Config['cov_mail']
    }
    
    componentDidMount() {
        this.setState({'cov_mail':this.props.cov_user.cov_mail})
    }

    handleChange(event) {
        let value = event.target.value
        this.setState({cov_mail:value})    
    }

    handleSubmit(event) {
        event.preventDefault()
        let regex = new RegExp(this.config.regex)
        if (! regex.test(this.state.cov_mail)) {
            this.setState({
                isError:true,
                message:this.config.errorMessage
            })
        }

       this.props.dispatch(checkMail(this.state.cov_mail))
            .then((response) => {
                this.props.history.push(this.config.redirect)
            })
            .catch(error => {
                this.setState({message:'Erreur Server', isError:true})
            });
        
       //this.props.dispatch(updateMail(this.state.cov_mail))
       //this.props.history.push(this.config.redirect)
        
    }
    render() {  
        const className = this.state.isError ? "arrondi form-control is-invalid" : "arrondi form-control"  
        return (
                        <form onSubmit={this.handleSubmit} noValidate>
                        <div className="form-group form-inscription">
                            <br />
                            <label> { this.config.title } </label>
                                <input type="email" 
                                    className={className}
                                    name="cov-mail"
                                    value={this.state.cov_mail}
                                    onChange={this.handleChange}
                                />
                            <div className="invalid-feedback">
                                { 
                                  this.state.message
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
  
  export default withRouter(connect(mapStateToProps)(RegisterMail))
