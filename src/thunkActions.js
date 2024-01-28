import {fetchLocationsSuccess} from "./reduxActions";

export const fetchLocations = () => async(dispatch) => {
    try {
        const response = await fetch('http://localhost:3001/locations');
        const data = await response.json();
        dispatch(fetchLocationsSuccess(data.locations))
    }
    catch (err) {
        console.log(err);
    }
}