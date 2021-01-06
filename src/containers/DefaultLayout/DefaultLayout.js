import React, { Component, Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux'
import Security from '../../utils/Security'
import UserActions from '../../store/actions/UserActions'
import HandleRoute from './HandleRoute'
import { AUTH_TOKEN_EXPIRATION_SECONDS } from '../../config/Security'

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refSetInterval : ''
    }
    this.checkAccess=this.checkAccess.bind(this)
  }

  loading () {
     return <div className="animated fadeIn pt-1 text-center">Loading...</div>
  }

  typeAccess(logged, check) {
    if( logged && check === false) 
      return 0;
   
      if (! logged && check === true)
      return 1
   
      return 2
  }

  checkAccess() {
    let logged = this.props.auth.logged
    console.log("log donne ",logged)
      if(logged) {
      console.log("i am in access")
      let { dispatch, action_date } = this.props
      let isAccess = Security.isAccess(action_date)
      if(! isAccess) {
        dispatch(UserActions.logout())
        //clearInterval(this.state.refSetInterval)
        //window.location.reload()
      }
    }
  }

  componentDidMount() {
   let logged = this.props.auth.logged
   let timeTo = parseInt(AUTH_TOKEN_EXPIRATION_SECONDS)
   console.log("log donne , timeTo",logged, " ",timeTo)
   if(logged) {
   //let ref = setInterval(this.checkAccess,  timeTo * 1000)
   // this.setState({ refSetInterval: ref})
   this.checkAccess()
   }
  }

  render() {
    let logged = this.props.auth.logged
    let { dispatch } = this.props
    let currentPage = this.props.location.pathname
    let sidebarClass = currentPage.startsWith("/profile") ? 'sidebar-fixed' : 'sidebar-hidden'
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader logged={logged} dispatch={dispatch} currentPage={currentPage} history={this.props.history}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          {
            logged && (currentPage.startsWith("/profile") && currentPage.indexOf("forgot") === -1 && currentPage.indexOf("init") === -1)
            ?
              <AppSidebar className={sidebarClass} display="lg">
                <AppSidebarHeader />
                <AppSidebarForm />
                <Suspense>
                <AppSidebarNav navConfig={navigation}  router={router}/>
                </Suspense>
                <AppSidebarFooter />
                <AppSidebarMinimizer />
              </AppSidebar> 
              :
              ''
          }
          <main className="main">
            <Container fluid>
              <Suspense fallback={this.loading()}>
              <Switch>
                  {routes.map((route, idx) => {
                    let  key = {idx}
                    let accessValue = this.typeAccess(logged, route.check)
                    return accessValue === 2 ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} gotoAfter={route.gotoAfter}/>
                        )} />
                    ) :
                    accessValue === 1  ? <HandleRoute key={key} path={route.path} />: 
                      (null);
                  })}
                   { <Redirect from="/" to="/" /> }
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      action_date: state.action_date,
      auth: state.auth,
      logged: state.auth.logged
  }
} 

export default connect(mapStateToProps)(DefaultLayout)