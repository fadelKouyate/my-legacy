import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

class Infos extends React.Component{

    handleChange(event){

    }

      render(){
        return(
            <React.Fragment>
              <Row className="info-area"> 
                    <Col className="mb-4 col-sm-12 col-md-6 col-lg-3"> 
                        <h5><i className="fa fa-handshake-o"/>  Pratique</h5>
                        <p>Trouvez rapidement un covoiturage ou un bus à proximité parmi les millions de trajets proposés.</p>
                    </Col>
                    <Col className="mb-4 col-sm-12 col-md-6 col-lg-3"> 
                        <h5><i className="fa fa-id-card"/>  Sécurisé</h5>
                        <p>Voyagez en toute sécurité avec des personnes connues et responsables</p>
                    </Col>
                    <Col className="mb-4 col-sm-12 col-md-6 col-lg-3"> 
                        <h5><i className="fa fa-check"/>  Facile</h5>
                        <p>Trouvez le trajet parfait ! Il vous suffit d’entrer votre destination, de choisir le voyage qui vous convient le mieux, et de réserver.</p>
                    </Col>
                    <Col className="mb-4 col-sm-12 col-md-6 col-lg-3"> 
                        <h5><i className="fa fa-bolt"/> Direct</h5>
                        <p>Que vous prévoyiez à l’avance ou réserviez en dernière minute, vous trouverez toujours un tarif avantageux. </p>
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


export default connect(mapStateToProps)(Infos)