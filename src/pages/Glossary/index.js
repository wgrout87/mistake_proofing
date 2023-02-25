import React from "react";
import LetterGroup from "../../components/LetterGroup";
import entries from "./entries"

const Glossary = () => {
    return (
        <main className="d-flex flex-column">
            <h1>Glossary</h1>
            <div className="container">
                {entries.map((group, index) => (
                    <LetterGroup
                        key={group.letter + index}
                        letter={group.letter}
                        words={group.words}
                    />
                ))}
            </div>
        </main>
    );
};

export default Glossary;