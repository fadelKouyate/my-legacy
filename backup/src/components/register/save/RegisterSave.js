import React from 'react';
import './Register.css';
import {Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {REGISTER_MAIL_URL} from '../../../config/register_url'
import { connect } from 'react-redux'
import {saveUser} from '../../../store/actions/UserActions'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'


class RegisterSave extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valid:true,
            loading: true
          };
        
    }

    /* UserApi.createAccount(this.props.cov_user).then((response) => {
                if (response.status === HttpStatus.OK) {
                    this.props.dispatch(saveUser(this.props.cov_user))
                    console.log("ADD DONE WITH SUCESS")
                    this.setState({valid:true})
                }
                else {
                    console.log("ERROR ADD")
                    this.setState({valid:false})
                }
            });
    */

     componentDidMount() {
        if (! this.props.cov_user.cov_mail ||  this.props.cov_user.cov_mail === "")
            this.props.history.push(REGISTER_MAIL_URL);
        else {
                this.props.dispatch(saveUser(this.props.cov_user))
                     .then((response) => {
                         this.setState( { 'valid': true, 'loading': false })
                     })
                    .catch(error => {
                        this.setState( { 'valid': false, 'loading': false })
                     });
        }
    }
    
    render() {  
        return (
            <div className="div-register-validate">
                {
                   this.state.loading ? 
                   <div>
                        <br />
                       <Alert key='idx' variant='dark'>
                                Validation en cours
                        </Alert>
                        <br /> 
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                  <br /> <br />
                  </div>
                  :
                    this.state.valid ?
                    <div>
                    <div className="alert alert-success" role="alert">
                        <br />
                        Inscription effectuée avec succès
                        <br />
                        <br />
                        Vous allez recevoir un mail de confirmation
                        <br />
                        <br />
                    </div>
                    <br />
                    <Link to="/" className="btn btn-primary">  Aller à la page d'accueil </Link>
                    </div>
                    :
                    <div>
                        <br />
                    <div className="alert alert-danger" role="alert">
                        Problème d'Inscription veuillez réessayer plus tard
                        <br />
                    </div>   
                    <Link to="/" className="btn btn-primary"> Aller à la page d'accueil <br /></Link>
                    <br />
                    <p><br /></p>
                    </div>
    }
            </div>     
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cov_user: state.cov_user
    }
  }
  
  export default withRouter(connect(mapStateToProps)(RegisterSave))
