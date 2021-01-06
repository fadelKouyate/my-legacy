import React from 'react';
import {DASHBOARD_PATH, THEME_PATH, THEME_TYPOGRAPHY_PATH, REGISTER_PATH, PAGE_404_PATH,
        LOGIN_PATH, LOGIN_CREATE_TRIP_PATH, LOGIN_BOOK_TRIP_PATH, REGISTER_VALIDATE_PATH,
        PROFILE_INFOS_PATH, PROFILE_PASSWORD_FORGOT_PATH, PROFILE_PASSWORD_CHANGE_PATH,
        PROFILE_PASSWORD_INIT_PATH, PROFILE_DRIVER_TRIPS_PATH, PROFILE_PASSENGER_TRIPS_PATH,
        PROFILE_PICTURE_PATH, TRIP_SEARCH_PATH, TRIP_SHOW_PATH, TRIP_CREATE_PATH, PAGE_500_PATH,
        TRIP_SHOW_DETAIL_PATH, TRIP_BOOKING_INFO
       } from './config/paths';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Colors = React.lazy(() => import('./views/Dashboard/Theme/Colors/Colors'));
const Typography = React.lazy(() => import('./views/Dashboard/Theme/Typography/Typography'));
const ProfileInfos = React.lazy(() => import('./views/Profile/Base'));

const Login = React.lazy(() => import('./views/Login/Login'));
const Page404 = React.lazy(() => import('./views/Tools/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Tools/Pages/Page500'));
const RegisterCreate = React.lazy(() => import('./views/Register/Create'));
const Home = React.lazy(() => import('./views/Home/Home'));

const ForgotPassword = React.lazy(() => import('./views/Profile/Password/Forgot'));
const ChangePassword = React.lazy(() => import('./views/Profile/Password/Change'));
const InitPassword = React.lazy(() => import('./views/Profile/Password/Init'));

const Picture = React.lazy(() => import ('./views/Profile/Picture'));
const DriverTrips = React.lazy(() => import ('./views/Profile/DriverTrips/DriverTrips'));
const PassengerTrips = React.lazy(() => import ('./views/Profile/PassengerTrips/PassengerTrips'));

const RegisterValidate = React.lazy(() => import('./views/Register/Validate'));
const SearchTrips = React.lazy(() => import('./views/Trip/SearchTrips/SearchTrips'));
const ShowAllTrips = React.lazy(() => import('./views/Trip/ShowAllTrips/ShowAllTrips'));
const CreateTrip = React.lazy(() => import('./views/Trip/CreateTrip/CreateTrip'));
const ShowTripDetail = React.lazy(() => import('./views/Trip/ShowTripDetail/ShowTripDetail'));
const BookingTripInfo = React.lazy(() => import('./views/Trip/BookingTripInfo/BookingTripInfo'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home},
  { path: DASHBOARD_PATH, name: 'Dashboard', component: Dashboard },
  { path: THEME_PATH, exact: true, name: 'Theme', component: Colors },
  { path: THEME_TYPOGRAPHY_PATH, name: 'Typography', component: Typography, check:true },
  
  
  { path: LOGIN_CREATE_TRIP_PATH, name: 'Login', component: Login, gotoAfter:"CREATE_TRIP" },
  { path: LOGIN_BOOK_TRIP_PATH, name: 'Login', component: Login, gotoAfter:"BOOK_TRIP" },
  { path: LOGIN_PATH, name: 'Login', component: Login, check:false, gotoAfter:"DASHBORD" },

  { path: REGISTER_PATH, exact: true, name: 'Create', component: RegisterCreate, check:false },
  { path: REGISTER_VALIDATE_PATH, name: 'Register', component: RegisterValidate, check:false },
  { path: PAGE_404_PATH, name: 'Page404', component: Page404 },
  { path: PAGE_500_PATH, name: 'Typography', component: Page500 },

  { path: PROFILE_INFOS_PATH,  exact: true, name: 'Profile', component: ProfileInfos, check:true },
  { path: PROFILE_PASSWORD_FORGOT_PATH,  exact: true, name: 'Forgot', component: ForgotPassword, check: false},
  { path: PROFILE_PASSWORD_CHANGE_PATH,  exact: true, name: 'Change', component: ChangePassword, check: true },
  { path: PROFILE_PASSWORD_INIT_PATH,  exact: true, name: 'Init', component: InitPassword, check:false },
  { path: PROFILE_DRIVER_TRIPS_PATH,  exact: true, name: 'driverTrips', component: DriverTrips, check:true },
  { path: PROFILE_PASSENGER_TRIPS_PATH,  exact: true, name: 'passengerTrips', component: PassengerTrips, check:true },
  { path: PROFILE_PICTURE_PATH, name: 'Picture', component: Picture, check:true },

  { path: TRIP_SEARCH_PATH, name: 'SearchTrip', component: SearchTrips},
  { path: TRIP_SHOW_PATH + '/:trip_from/:trip_to/:trip_date/:trip_place', name: 'ShowAllTrips', component: ShowAllTrips},
  { path: TRIP_SHOW_DETAIL_PATH + '/:trip_reference', name: 'ShowTripDetail', component: ShowTripDetail, check:false},
  { path: TRIP_SHOW_DETAIL_PATH, name: 'ShowTripDetail', component: ShowTripDetail, check:true},
  { path: TRIP_CREATE_PATH, name: 'CreateTrip', component: CreateTrip, check:true},
  { path: TRIP_BOOKING_INFO, name: '/BookingTripInfo', component: BookingTripInfo, check:true}
];

export default routes;
