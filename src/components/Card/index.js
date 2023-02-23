import React from "react";
import Card from 'react-bootstrap/Card';

const ExampleCard = ({ img, title, text }) => {
    return (
        <Card style={{ width: '18rem' }} className="m-2 px-0">
            <Card.Img className="mt-2" variant="top" src={`./images/${img}.jpg`} />
            <Card.Body className="pt-0 px-0">
                <Card.Title className="bg-dark text-light p-1">{title}</Card.Title>
                <Card.Text className="px-3">
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ExampleCard;