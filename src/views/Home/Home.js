import React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import Slide from './Slide/Slide';
import Search from './Search/Search';
import Sample from './Sample/Sample';
import Exchange from './Exchange/Exchange';
import Infos from './Infos/Infos';
import UserActions from '../../store/actions/UserActions'

class Home extends React.Component{

    constructor(props) {
      super(props);
    }

    handleChange(event){

    }

    componentDidMount(){
       let {dispatch} = this.props
       let pathname = this.props.history.location.pathname
       dispatch(UserActions.setPathName(pathname))

    }

      render(){
        return( 
            <div className="home container-fluid">
              <Slide/>
              <Search {...this.props}/>
              <Sample {...this.props}/>
              <Exchange {...this.props}/>
              <Infos />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      auth: state.auth, 
  }
}


export default connect(mapStateToProps)(Home)