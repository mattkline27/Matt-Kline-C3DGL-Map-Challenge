import {combineReducers} from "redux";
import locationReducer from "./features/locations/locationReducer";

const rootReducer = combineReducers({
    locations: locationReducer
})

export default rootReducer;