import React from "react";
import GlossaryEntry from "../../components/GlossaryEntry";

const Glossary = () => {
    return (
        <main className="d-flex flex-column">
            <h1>Glossary</h1>
            <div className="container">
                <GlossaryEntry
                    word={"ACTIVE ERROR"}
                    definition={"An active error has immediate consequences. Compare to latent errors."}
                />
            </div>
        </main>
    );
};

export default Glossary;