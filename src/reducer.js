import * as actionTypes from "./actionTypes";

const initialState = {
  locations: [],
  polygons: [],
  filters: {
    status: 'All',
  }
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.payload
      }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}