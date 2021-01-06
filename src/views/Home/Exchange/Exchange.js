import React from 'react';
import { connect } from 'react-redux';
import { Button, Col,  Row } from 'reactstrap';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import {TRIP_SEARCH_PATH, TRIP_CREATE_PATH} from '../../../config/paths';

class Exchange extends React.Component{

    constructor(props){
      super(props);
      this.onClickToSearchTrip = this.onClickToSearchTrip.bind(this);
      this.onClickToCreateTrip = this.onClickToCreateTrip.bind(this);
    }

    onClickToSearchTrip(event){
      event.preventDefault();
      this.props.history.push(TRIP_SEARCH_PATH);
    }

    onClickToCreateTrip(event){
      event.preventDefault();
      this.props.history.push(TRIP_CREATE_PATH);
    }

    handleChange(event){

    }

      render(){
        return(
            <React.Fragment>
             <Row className="card-area"> 
                  <Col className="mb-4 col-sm-12 col-md-6 col-lg-3">
                    <Card>
                        <CardImg top width="100%" src="/card1.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Ousmane le conducteur</CardTitle>
                            <CardText>Je suis en route pour retrouver Binta et Amadou avec qui je ferai le trajet de Nongo à Madina </CardText>
                            <Button onClick={this.onClickToCreateTrip}>Proprosez votre trajet</Button>
                        </CardBody>
                    </Card>
                  </Col>

                  <Col className="mb-4 col-sm-12 col-md-6 col-lg-3">
                    <Card>
                        <CardImg top width="100%" src="/card2.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Moment de convivialité</CardTitle>
                            <CardText>C'est formidable d'effectuer ce voyage avec quelqu'un d'aussi drôle comme Mohamed</CardText>
                            <Button onClick={this.onClickToSearchTrip}>Rechercher votre trajet</Button>
                        </CardBody>
                    </Card>
                  </Col>

                  <Col className="mb-4 col-sm-12 col-md-6 col-lg-3">
                    <Card>
                        <CardImg top width="100%" src="/card3.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>De nouvelles rencontres</CardTitle>
                            <CardText>Wahou, Christelle est trop cool! nous resterons en contact après ce covoiturage</CardText>
                            <Button onClick={this.onClickToCreateTrip}>Proprosez un trajet</Button>
                        </CardBody>
                    </Card>
                  </Col>

                  <Col className="mb-4 col-sm-12 col-md-6 col-lg-3">
                    <Card>
                        <CardImg top width="100%" src="/card4.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Et vous?</CardTitle>
                            <CardText> Aimeriez-vous aller à Kindia avec moi demain? <br /> &nbsp;</CardText>
                            <Button onClick={this.onClickToSearchTrip}>Rechercher ce trajet</Button>
                        </CardBody>
                    </Card>
                  </Col>
              </Row>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      auth: state.auth, 
  }
}


export default connect(mapStateToProps)(Exchange)