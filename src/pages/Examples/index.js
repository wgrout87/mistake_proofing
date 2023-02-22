import React from "react";
import Card from 'react-bootstrap/Card';

import ExampleCard from "../../components/Card";

const Examples = () => {
    return (
        <main className="">
            <h1>Examples</h1>
            <section className="container">
                <div className="row">
                    <ExampleCard
                        title={"Moving Shelves"}
                        text={"The library at Southern Methodist University has a moving shelf system to increase the space utilization. I used to worry that some one would come along and start cranking the shelves and smash me. Luckily, the shelf system designers knew that I would have this fear and installed floor sensors that keep the shelves from moving while someone is stepping on it."}
                    />
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src="./images/movingShelves.jpg" />
                        <Card.Body>
                            <Card.Title>This Thing</Card.Title>
                            <Card.Text>
                                The library at Southern Methodist University has a moving shelf system to increase the space utilization. I used to worry that some one would come along and start cranking the shelves and smash me. Luckily, the shelf system designers knew that I would have this fear and installed floor sensors that keep the shelves from moving while someone is stepping on it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src="./images/movingShelves.jpg" />
                        <Card.Body>
                            <Card.Title>Moving Shelves</Card.Title>
                            <Card.Text>
                                The library at Southern Methodist University has a moving shelf system to increase the space utilization. I used to worry that some one would come along and start cranking the shelves and smash me. Luckily, the shelf system designers knew that I would have this fear and installed floor sensors that keep the shelves from moving while someone is stepping on it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src="./images/movingShelves.jpg" />
                        <Card.Body>
                            <Card.Title>Moving Shelves</Card.Title>
                            <Card.Text>
                                The library at Southern Methodist University has a moving shelf system to increase the space utilization. I used to worry that some one would come along and start cranking the shelves and smash me. Luckily, the shelf system designers knew that I would have this fear and installed floor sensors that keep the shelves from moving while someone is stepping on it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="m-2">
                        <Card.Img variant="top" src="./images/movingShelves.jpg" />
                        <Card.Body>
                            <Card.Title>Moving Shelves</Card.Title>
                            <Card.Text>
                                The library at Southern Methodist University has a moving shelf system to increase the space utilization. I used to worry that some one would come along and start cranking the shelves and smash me. Luckily, the shelf system designers knew that I would have this fear and installed floor sensors that keep the shelves from moving while someone is stepping on it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </main>
    );
};

export default Examples;