import React from 'react';
import './Validate.css';
import queryString from 'query-string'
import UserActions from '../../../store/actions/UserActions'
import { connect } from 'react-redux'
import { Card, CardBody, CardHeader, Col, Row, Button, Spinner } from 'reactstrap';

class Validate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valid:true,
             show:false
          };
    }

    validate(token) {
        //let token = this.state.token
        this.props.dispatch(UserActions.validateUser(token))
        .then(() => {
            this.setState({ show:true, valid:true })
        })
        .catch((error) => {
            this.setState({ show:true, valid:false })
        }) 
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        let token = values.token
        if (!token)     
            this.props.history.push("/")
        this.validate(token)
    }

    goHome() {
        this.props.history.push("/")
    }

    
    render() {  
        let { show } = this.state
        return (
            <div className="validate-account">
             {
               ! show ? 
               <Row className="justify-content-center">
                   <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" /> 
               </Row>
              : 
                    <Row className="justify-content-center">
                    <Col md="4" xs="12">
                        <Card>
                        <CardHeader>
                        <strong>Validation du compte en cours</strong>
                        </CardHeader>
                        <CardBody>
                                {
                                    this.state.valid ?
                                    <div className="alert alert-success" role="alert">
                                        <p>
                                        Validation effectuée avec succès
                                        </p>
                                    </div>
                                    :
                                    <div>
                                    <div className="alert alert-danger" role="alert">
                                        <p>
                                        Problème de Validation du compte
                                        <br />
                                        Veuillez contacter le support 
                                        </p>
                                    </div>   
                                    </div>
                                }
                                <Row className="justify-content-center">
                                        <Col xs="3">
                                            <Button onClick={() =>this.goHome()} color="primary" className="px-4">OK</Button>
                                        </Col>
                                </Row>
                            </CardBody>
                            </Card>
                            </Col>
                            </Row>
                   }
                </div>
                
                        
               

        );
    }
}

const mapStateToProps = (state) => {
    return {
    state: state
    }
  }
  
  export default connect(mapStateToProps)(Validate)
