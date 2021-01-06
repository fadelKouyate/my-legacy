import React from 'react';
import './Register.css';
import {Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import UserApi from '../../../api/UserApi';
import HttpStatus  from 'http-status-codes';
import {INDEX_HOME} from '../../../config/register_url'
import queryString from 'query-string'

class RegisterSave extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valid:true,
            show:false
          };
        
    }

     componentDidMount() {
            const values = queryString.parse(this.props.location.search)
            let token = values.token
            if (!token)     
                this.props.history.push(INDEX_HOME)
            UserApi.validateAccount(token).then((response) => {
            if (response === HttpStatus.OK) {
                this.setState({valid:true, show:true});
            }
            else
                this.setState({valid:false, show:true});
        });
    }
    
    render() {  
        return (
             this.state.show === false 
             ? 
             <div> Validation du compte en cours </div> 
             :
            <div className="div-register-validate">
                {
                    this.state.valid ?
                    <div>
                    <div className="alert alert-success" role="alert">
                        <br />
                        Validation effectuée avec succès
                        <br />
                        <br />
                    </div>
                    <br />
                    <Link to="/home" className="btn btn-primary">  Aller à la page d'accueil </Link>
                    </div>
                    :
                    <div>
                    <div className="alert alert-danger" role="alert">
                        Problème de Validation du compte
                        <br />
                        Veuillez contacter le support 
                        <br />
                    </div>   
                    <Link to="/home" className="btn btn-primary"> Aller à la page d'accueil</Link>
                    </div>
                }
                        
            </div>     

        );
    }
}

export default withRouter(RegisterSave);
