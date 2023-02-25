import React from "react";
import GlossaryEntry from "../../components/GlossaryEntry";

const LetterGroup = (letter, entries) => {
    return (
        <main className="d-flex flex-column">
            <h2>{letter}</h2>
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

export default LetterGroup;