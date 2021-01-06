//USER
export const API_URL = 'http://localhost:8080';
export const WS_CONNECT = '/cov/auth/signin';
export const WS_READ_ACCOUNT = '/cov/ws_read_account';
export const WS_UPDATE_ACCOUNT = '/cov/ws_update_account';
export const WS_UPLOAD_PICTURE = '/cov/auth/ws_upload_picture';
export const WS_CHECK_EMAIL = '/cov/auth/ws_check_email';
export const WS_CREATE_ACCOUNT = '/cov/auth/ws_create_account';
export const WS_VALIDATE_ACCOUNT = '/cov/auth/ws_validate_account';
export const WS_CHANGE_PASSWORD = '/cov/ws_change_password';
export const WS_INIT_PASSWORD = '/cov/ws_reset_password';
export const WS_FORGOT_PASSWORD = '/cov/auth/ws_forgot_password';

//TRIP
export const WS_SHOW_TRIP = '/cov/auth/trip/findAll';
export const WS_CREATE_TRIP = '/cov/auth/trip/ws_create_trip';
export const WS_UPDATE_TRIP = '/cov/auth/trip/ws_update_trip';
export const WS_SEARCH_TRIP = '/cov/auth/trip/ws_search_trip';
export const WS_BOOK_TRIP = '/cov/auth/trip/ws_book_trip';
export const WS_READ_DRIVER_TRIPS = '/cov/auth/trip/ws_read_driver_trips';
export const WS_READ_PASSENGER_TRIPS = '/cov/auth/trip/ws_read_passenger_trips';
export const WS_BOOKING_VALIDATION = '/cov/auth/trip/ws_booking_validation';
export const WS_CANCEL_BOOKING = '/cov/auth/trip/ws_cancel_booking';
export const WS_CANCEL_TRIP = '/cov/auth/trip/ws_cancel_driver_trip';