import axios from "axios";
import {API_PORT} from "../../config";

export const fetchLocations = async() => {
    const response = await axios.get(`http://localhost:${API_PORT}/locations`)
    return response.data.locations;
}
export const addLocation = async(location) => {
    const response = await axios.post(`http://localhost:${API_PORT}/locations`, {location});
    return response.data.addedLocation;
}