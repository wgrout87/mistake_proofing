import React from "react";

import ExampleCard from "../../components/ExampleCard";

import examples from "./examples";

const Examples = () => {
    return (
        <main className="">
            <h1>Examples</h1>
            <section className="container">
                <div className="row">
                    {examples.map((example, index) => (
                        <ExampleCard
                            key={`example${index}`}
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