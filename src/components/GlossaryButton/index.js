import React from "react";
import Button from 'react-bootstrap/Button';

const GlossaryButton = ({ letter }) => {
    return (
        <Button variant="dark" className="m-1" onClick={() => {
            (document.getElementById(letter) ?? document.getElementById("top")).scrollIntoView();
        }}>{letter}</Button>
    )
}

export default GlossaryButton;