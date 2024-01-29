import * as actionTypes from "./locationActionTypes";

const initialState = {
  locations: [],
}

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.payload
      }
    default:
      return state
  }
}