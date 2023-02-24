import React from "react";
import GlossaryEntry from "../../components/GlossaryEntry";
import entries from "./entries"

const Glossary = () => {
    return (
        <main className="d-flex flex-column">
            <h1>Glossary</h1>
            <div className="container">
                {entries.map((entry, index) => (
                    <GlossaryEntry
                        key={`entry${index}`}
                        word={entry.word}
                        definition={entry.definition}
                    />
                ))}
            </div>
        </main>
    );
};

export default Glossary;