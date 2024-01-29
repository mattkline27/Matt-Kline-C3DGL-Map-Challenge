import React from "react";
import './addLocationFAB.css';
import {useDispatch, useSelector} from "react-redux";
import {toggleLocationForm} from "../locationActions";

export default function NewLocationFAB(props) {
    const dispatch = useDispatch();
    const showForm = useSelector(state => state.showNewLocationForm);

    return (
        <button className="add-location-fab" onClick={() => dispatch(toggleLocationForm())}>
            {showForm ? <div>x</div> : <div>+</div>}
        </button>
    )
}