import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NotFoundPage from '../../components/notfoundpage/NotFoundPage.js';
import CovUser from './CovUser.js';
import Picture from './picture/Picture.js';
import Adresse from './adresse/Adresse.js';
import Password from './password/Password.js';
/*import DashboardProfilePicture from '../../components/dashboard/DashboardProfilePicture';
import DashboardProfileAddress from '../../components/dashboard/DashboardProfileAddress.js';
import DashboardProfilePassword from '../../components/dashboard/DashboardProfilePassword.js';*/

class Dashboard extends React.Component{

  render() {
    return (
      <div className="dashboard">
            <Switch>
                <Route exaxt path="/dashboard/data" component={CovUser} />
                <Route exaxt path="/dashboard/picture" component={Picture} />
                <Route exaxt path="/dashboard/adresse" component={Adresse} />
                <Route exaxt path="/dashboard/password" component={Password} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
  }
}

export default Dashboard;
