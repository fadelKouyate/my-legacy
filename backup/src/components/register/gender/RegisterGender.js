import React from 'react'
import './Register.css'
import { withRouter } from "react-router-dom"
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import {Register_Config} from '../../../config/register_config'
import { connect } from 'react-redux'
import {updateGender} from '../../../store/actions/UserActions'

class RegisterGender extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cov_gender: '',
            isError:false
          }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.config = Register_Config['cov_gender']
    }
    
    componentDidMount() {
        if (! this.props.cov_user.cov_mail ||  this.props.cov_user.cov_mail === "")
            this.props.history.push(this.config.index)

        this.setState({cov_gender:this.props.cov_user.cov_gender})
    }

    handleChange(event) {
        this.setState({cov_gender:event.target.value})     
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatch(updateGender(this.state.cov_gender))
        this.props.history.push(this.config.redirect)
    }
    render() {  
        return (
                        <form onSubmit={this.handleSubmit} noValidate>
                        <div className="form-group form-inscription">
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">{ this.config.title }</FormLabel>
                                <RadioGroup aria-label="gender" name="cov-gender" value={this.state.cov_gender} onChange={this.handleChange}>
                                    <FormControlLabel value="H" control={<Radio />} label="Homme" />
                                    <FormControlLabel value="F" control={<Radio />} label="Femme" />
                                </RadioGroup>
                            </FormControl>               
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
  
  export default withRouter(connect(mapStateToProps)(RegisterGender))
