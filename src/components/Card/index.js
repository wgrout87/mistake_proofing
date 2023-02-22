import React from "react";
import Card from 'react-bootstrap/Card';

const ExampleCard = ({ title, text }) => {
    return (
        <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src="./images/movingShelves.jpg" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ExampleCard;