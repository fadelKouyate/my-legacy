import React from 'react';
import {Switch, Route} from 'react-router-dom';
import RegisterMail from './mail/RegisterMail.js'
import RegisterNames from './names/RegisterNames.js'
import RegisterBirth from './birth/RegisterBirth.js'
import RegisterGender from './gender/RegisterGender.js'
import RegisterPassword from './password/RegisterPassword.js'
import RegisterTel from './tel/RegisterTel.js'
import RegisterCity from './city/RegisterCity.js';
import RegisterSave from './save/RegisterSave.js';
import {REGISTER_MAIL_URL,REGISTER_BIRTH_URL,REGISTER_CITY_URL,REGISTER_GENDER_URL,REGISTER_NAMES_URL} from '../../config/register_url'
import {REGISTER_PASSWORD_URL,REGISTER_PHONE_URL,REGISTER_SAVE_URL,REGISTER_VALIDATE_URL,REGISTER_URL} from '../../config/register_url'
import RegisterValidate from './validate/RegisterValidate.js';
import NotFoundPage from '../notfoundpage/NotFoundPage.js';

class Register extends React.Component{

  render() {
    return (
      <div className="Register">
            <Switch>
                <Route exact path={REGISTER_MAIL_URL} component={RegisterMail} />
                <Route exact path={REGISTER_NAMES_URL} component={RegisterNames} />
                <Route exact path={REGISTER_BIRTH_URL} component={RegisterBirth} />
                <Route exact path={REGISTER_GENDER_URL} component={RegisterGender} />
                <Route exact path={REGISTER_PASSWORD_URL} component={RegisterPassword} />
                <Route exact path={REGISTER_PHONE_URL} component={RegisterTel} />
                <Route exact path={REGISTER_CITY_URL} component={RegisterCity} />
                <Route exact path={REGISTER_SAVE_URL} component={RegisterSave} />
                <Route exact path={REGISTER_VALIDATE_URL} component={RegisterValidate} />
                <Route exact path={REGISTER_URL} component={RegisterMail} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
  }
}

export default Register;
