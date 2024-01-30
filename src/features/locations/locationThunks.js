import {addLocationSuccess, fetchLocationsSuccess} from "./locationActions";
import {map} from '../../components/map.js'
import * as locationApi from "./locationApi";

export const fetchLocations = () => async(dispatch) => {
    try {
        const fetchedLocations = await locationApi.fetchLocations();
        dispatch(fetchLocationsSuccess(fetchedLocations));
    }
    catch (err) {
        alert(`Error fetching locations: ${err?.response?.data?.error || err}`);
    }
}

export const addLocation = (location) => async(dispatch) => {
    try {
        const addedLocation = await locationApi.addLocation(location);
        dispatch(addLocationSuccess(addedLocation));

        map.current.flyTo({
            center: [addedLocation.lng, addedLocation.lat],
            zoom: 14
        });
    }
    catch (err) {
        if (err?.response?.data?.error) {
            alert(`There was a problem adding your location: ${err.response.data.error}`);
        }
        else {
            alert(`Error adding location: ${err}`);
        }
    }
}