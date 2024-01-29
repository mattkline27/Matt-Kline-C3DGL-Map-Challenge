import * as actionTypes from './locationActionTypes';

export const fetchLocationsSuccess = (locations) => {
    return {
        type: actionTypes.FETCH_LOCATIONS_SUCCESS,
        payload: locations
    }
}