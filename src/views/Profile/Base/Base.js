import React from 'react';
import { connect } from 'react-redux';
import './Base.css';
import { Button, Card, CardHeader,CardBody, Col, Form, Input, 
         FormGroup, Label, Row, FormFeedback } from 'reactstrap';
import UserActions from '../../../store/actions/UserActions';
import Message from '../../Tools/Message/Message'
import UserUtils from '../../../utils/UserUtils'

class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            cov_first_name: '',
            cov_last_name: '',
            cov_mail: '',
            cov_phone: '',
            cov_birth: '',
            cov_city: '',
            cov_description: '',
            errorStep: 0,
            message: '',
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    cov_user() {
        let {cov_mail, cov_first_name, cov_last_name, cov_phone, cov_birth, cov_city, cov_description} = this.state;
        return {
          cov_mail: cov_mail,
          cov_first_name : cov_first_name,
          cov_last_name : cov_last_name,
          cov_birth : cov_birth,
          cov_phone : cov_phone,
          cov_city : cov_city,
          cov_description : cov_description
        }
      }

    handleChange(event){
        const {name, value} = event.target
        console.log(value)
        this.setState({
            [name]: value
        })  
    }

    validateFields() {
        this.setState({ message:''});
        let {cov_mail, cov_first_name, cov_last_name, cov_phone, cov_birth, cov_city} = this.state;
        var data = {}
        data = UserUtils.checkValue('cov_names', cov_first_name, 1)
        if(data.resultat)
           data = UserUtils.checkValue('cov_names', cov_last_name, 2)

        if(data.resultat)
        data = UserUtils.checkValue('cov_mail', cov_mail, 3)

        if(data.resultat)
        data = UserUtils.checkValue('cov_phone', cov_phone, 4)

        if(data.resultat)
        data = UserUtils.checkValue('cov_birth', cov_birth, 5)

        if(data.resultat)
        data = UserUtils.checkValue('cov_city', cov_city, 6)
    
        if (! data.resultat) {
            this.setState({ message:data.message, errorStep:data.errorStep});
            return ;
        }

        return data.resultat
    }

    handleSubmit(event) {
        event.preventDefault();
        if (! this.validateFields())
           return ;
        let cov_user = this.cov_user();
        this.props.dispatch(UserActions.updateUser(cov_user, this.props.token))
        .then(() => {
            Message.success('Modifications enregistrées avec succès')         
        })
        .catch((error) => {
            Message.error('Mise à jour échouée veuillez réessayer plus tard');
        }) 
    }
    
    componentDidMount(){
        let { cov_user } = this.props;
        
        console.log("name " + cov_user.cov_last_name)
        this.setState({
            cov_mail:cov_user.cov_mail,
            cov_first_name : cov_user.cov_first_name,
            cov_last_name : cov_user.cov_last_name,
            cov_birth : cov_user.cov_birth,
            cov_phone : cov_user.cov_phone,
            cov_city : cov_user.cov_city,
            cov_description : cov_user.cov_description || '',
        });
    }

    render() {
        let {cov_mail, cov_first_name, cov_last_name, cov_phone, cov_birth, cov_city, cov_description, message, errorStep} = this.state;
        return (
            <div className="profile-infos">
                <Row className="justify-content-center cov-zone">
                    <Col xs="12" md="12" lg="12" xl="10">
                    <Card className="mx-4">
                        <CardHeader> 
                            Mes informations personnelles
                        </CardHeader>
                        <CardBody className="p-4">
                            <Form onSubmit={ (e) => this.handleSubmit(e) }>
                                <FormGroup row>
                                    <Col md="6">
                                        <Label htmlFor="nf-first-name">Nom</Label>
                                        <Input type="text" id="nf-first-name" name="cov_first_name" 
                                                value={cov_first_name} onChange={this.handleChange}  
                                                placeholder="Votre nom.."
                                                invalid={ message !== "" && errorStep === 1 }
                                                />
                                         <FormFeedback> {message} </FormFeedback>
                                    </Col>
                                    <Col md="6">
                                        <Label htmlFor="nf-last-name">Prénom</Label>
                                        <Input type="text" id="nf-last-name" name="cov_last_name" 
                                                value={cov_last_name} onChange={this.handleChange}  
                                                placeholder="Votre prenom.."
                                                invalid={ message !== "" && errorStep === 2 }
                                                />
                                         <FormFeedback> {message} </FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="6">
                                        <Label htmlFor="nf-email">Email</Label>
                                        <Input type="email" id="nf-email" name="cov_mail" 
                                                value={cov_mail} onChange={this.handleChange} 
                                                placeholder="Votre email.." autoComplete="email"
                                                invalid={ message !== "" && errorStep === 3 }
                                                />
                                         <FormFeedback> {message} </FormFeedback>
                                    </Col>
                                    <Col md="6">
                                        <Label htmlFor="nf-last-phone">Numéro</Label>
                                        <Input type="text" id="nf-last-phone" name="cov_phone" 
                                                value={cov_phone} onChange={this.handleChange} 
                                                placeholder="Votre numéro.."
                                                invalid={ message !== "" && errorStep === 4 }
                                                />
                                         <FormFeedback> {message} </FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="6">
                                        <Label htmlFor="date-input">Date de naissance</Label>
                                        <Input type="date" id="date-input" name="cov_birth" 
                                                value={cov_birth} onChange={this.handleChange} 
                                                placeholder="date" 
                                                invalid={ message !== "" && errorStep === 5 }
                                                />
                                         <FormFeedback> {message} </FormFeedback>
                                    </Col>
                                    <Col md="6">
                                        <Label htmlFor="city-input">Ville</Label>
                                        <Input type="text" id="city-input" name="cov_city" 
                                                value={cov_city} onChange={this.handleChange} 
                                                placeholder="ville"
                                                invalid={ message !== "" && errorStep === 6 }
                                                />
                                         <FormFeedback> {message} </FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="textarea-input">Description</Label>
                                    <Input type="textarea" id="textarea-input" name="cov_description" rows="2" 
                                            value={cov_description} onChange={this.handleChange} placeholder="Content..." />
                                </FormGroup>
                                
                                <Row className="justify-content-center">
                                            <Button className="profile-btn" color="success" size="md">Enregister</Button>
                                            <div>
                                                <p>
                                                <br />&nbsp;
                                                </p>
                                            </div>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </div>
        );
}

}

const mapStateToProps = (state) => {
    return {
        cov_user: state.cov_user,
        token: state.auth.token
    }
} 

export default connect(mapStateToProps)(Profile);
