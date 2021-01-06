
import React from 'react';
import { withRouter } from "react-router-dom";
import './Logout.css'
import { connect } from 'react-redux'
import * as types from '../../store/actions/actionTypes'; 

class Logout extends React.Component{
    

    componentDidMount() {
        let action = { type: types.INIT_STATE }
        this.props.dispatch(action)        
        this.props.history.push("/") 
    }

    

    render() { 
    return (
      <div></div> 
    );
   }

}

const mapStateToProps = (state) => {
    return {
        state: state
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Logout))