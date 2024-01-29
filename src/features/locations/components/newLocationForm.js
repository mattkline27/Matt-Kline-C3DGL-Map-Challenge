import React from "react";
import './newLocationForm.css';

export default function NewLocationForm(props) {
    return (
        <form className="new-location-form">
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Latitude:
                <input type="text" name="name" />
            </label>
            <label>
                Longitude:
                <input type="text" name="name" />
            </label>
            <input className='new-location-form' type="submit" value="Submit" />
        </form>
    )
}