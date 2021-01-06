import * as types from './actionTypes' 
import TripApi from '../../api/TripApi'

class TripActions {

      static updateLastAction() { 
        return {
        type: 'UPDATE_LAST_ACTION'
        }
      }

      static setTrips(value) { 
        return function (dispatch)  {
          dispatch({ type: types.SET_TRIPS, value: value })
          dispatch(TripActions.updateLastAction())
        }
      }

      static setCurrentTrip(value){
        return function(dispatch){
          dispatch({ type: types.SET_CURRENT_TRIP, value: value});
          dispatch(TripActions.updateLastAction());
        }
      }

      static setTripDesiredPlace (value){
        return function(dispatch){
          dispatch({ type: types.SET_TRIP_DESIRED_PLACE, value: value});
          dispatch(TripActions.updateLastAction());
        }
      }

      static searchTrips(trip_from, trip_to, trip_date, trip_place){
        return async function(dispatch){
          try {
            const response = await TripApi.searchTrips(trip_from, trip_to, trip_date, trip_place)
            dispatch(TripActions.setTrips(response.data))
          }
          catch (error) {
            throw (error)
          }
        }
      }
}

export default TripActions