import React, { Component } from 'react';
import UserActions from '../../store/actions/UserActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
class HandleRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    let { dispatch } = this.props
     dispatch(UserActions.setPathName(this.props.path))
  }

  render() {
    return (
      <Redirect to = "/login" />
  )
  }
}

const mapStateToProps = (state) => {
  return {
      pathname: state.pathname
  }
} 

export default connect(mapStateToProps)(HandleRoute)
