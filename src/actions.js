import * as actionTypes from './actionTypes';

export const fetchLocationsSuccess = (locations) => {
    return {
        type: actionTypes.FETCH_LOCATIONS_SUCCESS,
        locations: locations
    }
}