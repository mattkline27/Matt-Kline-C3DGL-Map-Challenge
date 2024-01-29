import React from "react";
import './newLocationForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";

export default function NewLocationForm(props) {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <Form className="new-location-form">
            <Form.Group as={Col} className="new-location-form-group" controlId="form-name">
                <Form.Label>Name</Form.Label>
                <Form.Control size="sm" type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group as={Col} className="new-location-form-group new-location-coordinate-input" controlId="form-latitude">
                <Form.Label>Latitude</Form.Label>
                <Form.Control size="sm" type="text" placeholder="39.742043" />
            </Form.Group>
            <Form.Group as={Col} className="new-location-form-group new-location-coordinate-input" controlId="form-longitude">
                <Form.Label>Longitude</Form.Label>
                <Form.Control size="sm" type="text" placeholder="-104.99153" />
            </Form.Group>


            <Button className="new-location-form-button" variant="primary" type="submit" onClick={onSubmit}>
                Save
            </Button>


        </Form>
    )
}