import React from 'react';
import './Home.css';

import { connect } from 'react-redux'

class Home extends React.Component{

      render(){  
        console.log("state -->",this.props.state)
        return( 
           
              <img src="/homeT.jpg" width="100%" height="100%" alt="Home"/>
        
        )
    }
}
const mapStateToProps = (state) => {
  return {
      auth: state.auth, 
      state: state
  }
}


export default connect(mapStateToProps)(Home)