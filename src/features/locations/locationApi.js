import axios from "axios";

export const fetchLocations = async() => {
    const response = await axios.get('http://localhost:3001/locations')
    return response.data.locations;
}
export const addLocation = async(location) => {
    const response = await axios.post('http://localhost:3001/locations', {location});
    return response.data.addedLocation;
}