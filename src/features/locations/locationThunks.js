import {addLocationSuccess, fetchLocationsSuccess} from "./locationActions";
import axios from "axios";

export const fetchLocations = () => async(dispatch) => {
    try {
        const response = await axios.get('http://localhost:3001/locations');
        dispatch(fetchLocationsSuccess(response.data.locations))
    }
    catch (err) {
        // TODO: add error handling here
        console.log(err);
    }
}

export const addLocation = (location) => async(dispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/location', {location})

        const addedLocation = response.data.addedLocation
        dispatch(addLocationSuccess(addedLocation))
    }
    catch (err) {
        console.log(err);
    }
}