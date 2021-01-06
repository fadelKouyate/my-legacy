
import React from 'react';
import './Slide.css';
import {Carousel, Row} from 'react-bootstrap'

class Slide extends React.Component{
      render(){
        return( 
            <Row>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src="/digi1.jpg" alt="Bienvenue" />
                <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                  <img className="d-block w-100" src="/digi2.jpg" alt="Bienvenue" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="/digi3.jpg" alt="Bienvenue" />
                </Carousel.Item>
              </Carousel>
            </Row>
        )
    }
}

export default Slide;