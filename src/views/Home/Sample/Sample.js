import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import {TRIP_SEARCH_PATH} from '../../../config/paths';

class Sample extends React.Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.history.push(TRIP_SEARCH_PATH);
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <React.Fragment>
             <Row className="home-content-two-message"> 
                  <h3>Où allez-vous ? </h3>
              </Row>
              <Row className="row home-content-two">
                  <Col className="mb-4 col-sm-12 col-md-6 col-lg-3">
                      <Button className="btn btn-lg home-content-two-btn" onClick={this.handleSubmit}>  Conakry » Kankan <RightIcon/> </Button>
                  </Col>
                  <Col className="mb-4 col-sm-12 col-md-6 col-lg-3">
                      <Button className="btn btn-lg home-content-two-btn" onClick={this.handleSubmit}>  Madina » Dixinn <RightIcon/> </Button>
                  </Col>
                  <Col className="mb-4 col-sm-12 col-md-6 col-lg-3">
                      <Button className="btn btn-lg home-content-two-btn" onClick={this.handleSubmit}>  Cosa » Cobaya <RightIcon/> </Button>
                  </Col>
                  <Col className="mb-4 col-sm-12 col-md-6 col-lg-3">
                      <Button className="btn btn-lg home-content-two-btn" onClick={this.handleSubmit}>  Conakry » Mamou <RightIcon/> </Button>
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


export default connect(mapStateToProps)(Sample)