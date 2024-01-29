import * as locationActionTypes from "./locationActionTypes";

const initialState = {
  locations: [],
  showNewLocationForm: false
}

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case locationActionTypes.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.payload
      }
    case locationActionTypes.TOGGLE_NEW_LOCATION_FORM:
        return {
            ...state,
            showNewLocationForm: !state.showNewLocationForm
        }
    default:
      return state
  }
}