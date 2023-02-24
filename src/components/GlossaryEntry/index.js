import React from "react";
import Card from 'react-bootstrap/Card';

const GlossaryEntry = ({ word, definition }) => {
    return (
        <Card className="m-2 px-0 text-start">
            <Card.Body className="pt-0 px-0">
                <Card.Title className="px-2 py-1 border-bottom">{word}</Card.Title>
                <Card.Text className="px-3">
                    {definition}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GlossaryEntry;