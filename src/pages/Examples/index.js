import React from "react";
import Card from 'react-bootstrap/Card';

import ExampleCard from "../../components/Card";

import examples from "./examples";

const Examples = () => {
    return (
        <main className="">
            <h1>Examples</h1>
            <section className="container">
                <div className="row">
                    {examples.map((example) => (
                        <ExampleCard
                            img={example.img}
                            title={example.title}
                            text={example.text}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Examples;