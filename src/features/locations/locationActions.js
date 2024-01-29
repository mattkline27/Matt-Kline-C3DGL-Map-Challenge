import * as actionTypes from './locationActionTypes';

export const fetchLocationsSuccess = (locations) => {
    return {
        type: actionTypes.FETCH_LOCATIONS_SUCCESS,
        payload: locations
    }
}

export const toggleLocationForm = () => {
    return {
        type: actionTypes.TOGGLE_NEW_LOCATION_FORM
    }
}