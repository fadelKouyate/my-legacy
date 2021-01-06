import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import Search from '@material-ui/icons/Search';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import { connect } from 'react-redux';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'
import './DefaultHeader.css';
import UserActions from '../../store/actions/UserActions'
import Message from '../../views/Tools/Message';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      imagePreviewUrl:''
    }
  }

  async logout(dispatch, history) {
    dispatch(UserActions.logout())
    Message.loading("",1).then(() => {
      history.push("/");   
      //window.location.reload()
    })
   
  }

  goHome() {
    alert('ok')
  }

  updateImage(value){
      this.setState({
        imagePreviewUrl: value
      });
  }

  componentDidMount(){
    let {cov_user} = this.props;
    if(cov_user.cov_picture){
      this.setState({
        imagePreviewUrl:cov_user.cov_picture
      });
    }
  } 

  render() {
    let { logged , dispatch, currentPage, history } = this.props
    let  {imagePreviewUrl } = this.state;

    return (
      <React.Fragment>
        {
        (logged)
        ?
          <AppSidebarToggler className="d-lg-none" display="md" mobile>
              <span className="line"></span> 
              <span className="line"></span> 
              <span className="line"></span>
          </AppSidebarToggler>
        : ""
        }

        <Nav>
        <AppNavbarBrand  href="#"
          full={{ src: logo, width: 80, height: 45, alt: 'Cov Guinée'}}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Cov Guinée'}}
        />
        </Nav>

        {
        (!logged)
        ?
          <Nav className="sign-icon" navbar>
              <NavItem className="px-3">
                  <NavLink to="/login" className="nav-link"><i className="fa fa-user"></i> </NavLink>
            </NavItem>
          </Nav>
        : ""
        }

        {
        (logged) && (currentPage.startsWith("/profile") && currentPage.indexOf("forgot") === -1 && currentPage.indexOf("init") === -1) 
        ?
          <AppSidebarToggler className="d-md-down-none account-menu" display="lg">
              <span className="line"></span> 
              <span className="line"></span> 
              <span className="line"></span>
          </AppSidebarToggler>
        : ""
        }

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/trip/search" className="nav-link"> <Search/>Rechercher</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/login/createTrip" className="nav-link"> <DirectionsCarIcon/>Proposer</NavLink>
          </NavItem>
          {
          (!logged) 
          ?
            <NavItem className="px-3">
              <NavLink to="/register" className="nav-link">Inscription</NavLink>
            </NavItem>
          : ""
          }
          {
           (!logged) 
           ?
            <NavItem className="px-3">
                <NavLink to="/login" className="nav-link">Connexion</NavLink>
            </NavItem>
            :""
          }
        </Nav>
        {
        (logged)
        ?
          <Nav className="ml-auto  logout-menu" navbar>
            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav>
                <img src={imagePreviewUrl} className="img-avatar" alt="admin@bootstrapmaster.com" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="text-center"><a href="/#/profile/infos">Mon compte</a></DropdownItem>
                <DropdownItem><i className="fa fa-bell-o"></i> Alertes<Badge color="success">42</Badge></DropdownItem>
                <DropdownItem onClick={e => this.logout(dispatch, history)}><i className="fa fa-lock"></i> Déconnexion</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        :""
        }
        {
        (!logged)
        ?
          <Nav className="ml-auto mobile-menu" navbar>
              <NavItem className="px-3">
                  <NavLink to="/login" className="nav-link"><i className="fa fa-car"></i></NavLink>
              </NavItem>
              <NavItem className="px-3">
                  <NavLink to="/login" className="nav-link"><i className="fa fa-search"></i></NavLink>
            </NavItem>
          </Nav>
        :""
        }

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    cov_user: state.cov_user
  }
}

export default connect(mapStateToProps) (DefaultHeader);
