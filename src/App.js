import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import {store, persistor}  from './store/configureStore'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HashRouter>
              <React.Suspense fallback={loading()}>
                <Switch>
                  <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
                </Switch>
              </React.Suspense>
          </HashRouter>
          </PersistGate>
       </Provider>
    );
  }
}

export default App;
