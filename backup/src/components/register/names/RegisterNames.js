import React from 'react'
import './Register.css'
import { withRouter } from "react-router-dom"
import {Register_Config} from '../../../config/register_config'
import { connect } from 'react-redux'
import {updateFirstName, updateLastName} from '../../../store/actions/UserActions'

class RegisterNames extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cov_first_name: '',
            cov_last_name: '',
            isErrorFirstname:false,
            isErrorLastname:false
          }
        
        this.handleChange   = this.handleChange.bind(this)
        this.handleSubmit   = this.handleSubmit.bind(this)
        this.config = Register_Config['cov_names']
    }
   
    componentDidMount() {
        if (! this.props.cov_user.cov_mail ||  this.props.cov_user.cov_mail === "")
            this.props.history.push(this.config.index)
        this.setState({cov_first_name:this.props.cov_user.cov_first_name})
        this.setState({cov_last_name:this.props.cov_user.cov_last_name})
    }

    handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        if (name === "cov-firstname")
            this.setState({"cov_first_name":value})
        else
            this.setState({"cov_last_name":value})     
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            isErrorFirstname:false,
            isErrorLastname:false,
        })
        let regex = new RegExp(this.config.regex)
        if (! regex.test(this.state.cov_first_name)) {
            this.setState({
                isErrorFirstname:true,
            })
        }      
        else if (! regex.test(this.state.cov_last_name)) {
            this.setState({
                isErrorLastname:true,
            })
        }    
        else {
            this.props.dispatch(updateFirstName(this.state.cov_first_name))
            this.props.dispatch(updateLastName(this.state.cov_last_name))
            this.props.history.push(this.config.redirect)
        }
    }
    render() {  
        const classNameFirstname = this.state.isErrorFirstname ? "arrondi form-control is-invalid" : "arrondi form-control"  
        const classNameLastname = this.state.isErrorLastname ? "arrondi form-control is-invalid" : "arrondi form-control"  
        return (
                        <form onSubmit={this.handleSubmit} noValidate>
                        <div className="form-group form-inscription">
                            <br />
                            <label>{ this.config.title }</label>
                                <input type="text" 
                                    className={classNameFirstname}
                                    name="cov-firstname"
                                    value={this.state.cov_first_name}
                                    onChange={this.handleChange}
                                    placeholder="prenom"
                                />
                                <br />
                                <input type="text" 
                                    className={classNameLastname}
                                    name="cov-lastname"
                                    value={this.state.cov_last_name}
                                    onChange={this.handleChange}
                                    placeholder="nom"
                                />
                            <div className="invalid-feedback">
                                { 
                                  this.state.isErrorFirstname || this.state.isErrorLastname ? this.config.errorMessage : ''
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
  
  export default withRouter(connect(mapStateToProps)(RegisterNames))
