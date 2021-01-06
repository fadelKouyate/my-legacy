import {API_URL, WS_CREATE_TRIP, WS_SEARCH_TRIP, WS_BOOK_TRIP, WS_READ_PASSENGER_TRIPS, 
	    WS_READ_DRIVER_TRIPS, WS_BOOKING_VALIDATION, WS_CANCEL_BOOKING, WS_CANCEL_TRIP, WS_UPDATE_TRIP} from './url';
import axios from 'axios';

class TripApi{

	static createTrip(cov_trip) {
		let url = API_URL + WS_CREATE_TRIP;
		let cov_trip_string = JSON.stringify(cov_trip);
		let cov_tirp_json = JSON.parse(cov_trip_string);
		return axios.post(url, cov_tirp_json)
					.then(res => {
						return res;
					})
					.catch(error => {
						console.log("Error lors de la creation du trajet");
						throw(error)
					});
	}

	static updateTrip(cov_trip) {
		let url = API_URL + WS_UPDATE_TRIP;
		let cov_trip_string = JSON.stringify(cov_trip);
		let cov_tirp_json = JSON.parse(cov_trip_string);
		return axios.post(url, cov_tirp_json)
					.then(res => {
						return res;
					})
					.catch(error => {
						console.log("Error lors de la modification du trajet");
						throw(error)
					});
	}

	static bookTrip(bookValues){
		let url = API_URL + WS_BOOK_TRIP; 
		let book_trip_string = JSON.stringify(bookValues);
		let book_tirp_json = JSON.parse(book_trip_string);
		return axios.post(url, book_tirp_json)
					.then(res => {
						return res;
					})
					.catch(error => {
						console.log("Error lors de la reservation du trajet");
						throw(error)
					});
	}

	static async bookingValidation(responseBody){
		let url = API_URL + WS_BOOKING_VALIDATION; 
		let book_trip_string = JSON.stringify(responseBody);
		let book_tirp_json = JSON.parse(book_trip_string);
		try {
			const res = await axios.post(url, book_tirp_json);
			return res;
		} catch (error) {
			console.log("Error lors de la validation de la reservation du trajet");
			throw (error);
		}
	}

	static async cancelBooking(data){
		let url = API_URL + WS_CANCEL_BOOKING;
		let cancel_booking_string = JSON.stringify(data);
		let cancel_booking_json = JSON.parse(cancel_booking_string);
		try {
			const res = await axios.post(url, cancel_booking_json);
			return res;
		} catch (error) {
			console.log("Error lors de l'annulation de la reservation");
			throw (error);
		}
	}

	static async cancelTrip(data) {
		let url = API_URL + WS_CANCEL_TRIP;
		let cancel_trip_string = JSON.stringify(data);
		let cancel_trip_json = JSON.parse(cancel_trip_string);
		try {
			const res = await axios.post(url, cancel_trip_json);
			return res;
		} catch (error) {
			console.log("Error lors de l'annulation du trajet");
			throw (error);
		}
	}

	static async readDriverTrips(driverEmail){
			let url = API_URL + WS_READ_DRIVER_TRIPS + "?email=" + driverEmail;
			try {
				const res = await axios.get(url);
				return res;
			}
			catch (error) {
				console.log("erreur lors de la recherche de trajet" + error);
				throw (error);
			}
	}

	static async readPassengerTrips(driverEmail){
		let url = API_URL + WS_READ_PASSENGER_TRIPS + "?email=" + driverEmail;
		try {
			const res = await axios.get(url);
			return res;
		}
		catch (error) {
			console.log("erreur lors de la recherche de trajet" + error);
			throw (error);
		}
	}

	static async searchTrips(trip_from, trip_to, trip_date, trip_place){
		let url = API_URL + WS_SEARCH_TRIP + "?trip_from=" + trip_from + "&trip_to=" + trip_to 
						  + "&trip_date=" + trip_date + "&trip_place=" + trip_place;
		try {
			const res = await axios.get(url);
			return res;
		}
		catch (error) {
			console.log("erreur lors de la recherche de trajet" + error);
			throw (error);
		}
	}

}

  
export default TripApi;