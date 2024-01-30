import axios from "axios";
import {API_URL} from "../../config";

export const fetchLocations = async() => {
    const response = await axios.get(`${API_URL}/locations`)
    return response.data.locations;
}
export const addLocation = async(location) => {
    const response = await axios.post(`${API_URL}/locations`, {location});
    return response.data.addedLocation;
}