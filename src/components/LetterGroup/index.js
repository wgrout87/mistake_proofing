import React from "react";
import GlossaryEntry from "../../components/GlossaryEntry";

const LetterGroup = ({ letter, words }) => {
    return (
        <main className="d-flex flex-column">
            <h2 className="w-75 bg-dark text-light rounded mx-auto" id={letter}>{letter}</h2>
            <div className="container">
                {words.map((entry, index) => (
                    <GlossaryEntry
                        key={`entry${index}`}
                        word={entry.word.toUpperCase()}
                        definition={entry.definition}
                    />
                ))}
            </div>
        </main>
    );
};

export default LetterGroup;