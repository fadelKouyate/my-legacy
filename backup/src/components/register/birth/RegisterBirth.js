import React from 'react'
import './Register.css'
import { withRouter } from "react-router-dom"
import {Register_Config} from '../../../config/register_config'
import { connect } from 'react-redux'
import {updateBirth} from '../../../store/actions/UserActions'

class RegisterBirth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cov_birth: '',
            isError:false
          }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.config = Register_Config['cov_birth']
    }
    
    componentDidMount() {
        if (! this.props.cov_user.cov_mail ||  this.props.cov_user.cov_mail === "")
            this.props.history.push(this.config.index)
            
        this.setState({cov_birth:this.props.cov_user.cov_birth})
    }

    handleChange(event) {
        let value = event.target.value
        this.setState({cov_birth:value})     
    }

    handleSubmit(event) {
        event.preventDefault()
        let regex = new RegExp(this.config.regex)
        if (! regex.test(this.state.cov_birth)) {
            this.setState({
                isError:true
            })
        }
        else {
            this.props.dispatch(updateBirth(this.state.cov_birth))
            this.props.history.push(this.config.redirect)
        }
        
    }
    render() {  
        const className = this.state.isError ? "arrondi form-control is-invalid" : "arrondi form-control" 
        return (
                <form onSubmit={this.handleSubmit} noValidate>
                <div className="form-group form-inscription">
                    <br />
                    <label> { this.config.title }</label>
                    <input type="date"
                            className={className} 
                            value={this.state.cov_birth} 
                            id="example-date-input" 
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
  
  export default withRouter(connect(mapStateToProps)(RegisterBirth))
