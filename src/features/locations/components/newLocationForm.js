import React, {useRef} from "react";
import './newLocationForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from "react-redux";
import {addLocation} from "../locationThunks";

export default function NewLocationForm(props) {
    const dispatch = useDispatch();
    const formRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault();
        const newLocation = Object.fromEntries(new FormData(e.target).entries());
        dispatch(addLocation(newLocation))
        formRef.current?.reset();
    }

    return (
        <Form ref={formRef} className="new-location-form" onSubmit={onSubmit}>
            <Form.Group  className="new-location-form-group" controlId="form-name">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" size="sm" type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="new-location-form-group new-location-coordinate-input" controlId="form-latitude">
                <Form.Label>Latitude</Form.Label>
                <Form.Control name="lat" size="sm" type="text" placeholder="39.742043" />
            </Form.Group>
            <Form.Group className="new-location-form-group new-location-coordinate-input" controlId="form-longitude">
                <Form.Label>Longitude</Form.Label>
                <Form.Control name="lng" size="sm" type="text" placeholder="-104.99153" />
            </Form.Group>
            <Button className="new-location-form-button" variant="primary" type="submit">
                Save
            </Button>
        </Form>
    )
}