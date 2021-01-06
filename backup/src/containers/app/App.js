import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Register from '../../components/register/Register'
import Home from '../../components/home/Home'
import Menu from '../../components/menu/Menu'

import SignIn from '../../components/signin/Signin'
import { Provider } from 'react-redux'
import {store, persistor}  from '../../store/configureStore'
import PrivateRoute from '../../components/routes/PrivateRoute'
import PublicRoute from '../../components/routes/PublicRoute'
import Footer from '../../components/footer/Footer'
import NotFoundPage from '../../components/notfoundpage/NotFoundPage'
import Dashboard from '../../components/dashboard/Dashboard'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Logout from '../../components/logout/Logout'

function App(){
    return (
      <div className="App">
        
        <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Menu />
          <Router>
            <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/home" component={Home} />
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <PublicRoute path="/register" component={Register} />
                  <PublicRoute path="/signin" component={SignIn} />
                  <PrivateRoute path="/logout" component={Logout} />
                  <Route component={NotFoundPage} />
            </Switch>
          </Router>
          <Footer />
          </PersistGate>
        </Provider>
        </div>
    )
}

export default App
