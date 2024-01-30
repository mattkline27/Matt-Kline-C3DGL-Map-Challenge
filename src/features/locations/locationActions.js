import * as actionTypes from './locationActionTypes';

export const fetchLocationsSuccess = (locations) => {
    return {
        type: actionTypes.FETCH_LOCATIONS_SUCCESS,
        payload: locations
    }
}
export const addLocationSuccess = (location) => {
    return {
        type: actionTypes.ADD_LOCATION_SUCCESS,
        payload: location
    }
}

export const toggleLocationForm = () => {
    return {
        type: actionTypes.TOGGLE_NEW_LOCATION_FORM
    }
}