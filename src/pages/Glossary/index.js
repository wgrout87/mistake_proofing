import React from "react";
import GlossaryButton from "../../components/GlossaryButton";
import LetterGroup from "../../components/LetterGroup";
import entries from "./entries"
import Button from "react-bootstrap/Button";
import "./style.css";
import { CaretUpFill } from "react-bootstrap-icons";

const Glossary = () => {
    console.log(CaretUpFill);
    return (
        <main className="d-flex flex-column">
            <h1>Glossary</h1>
            <Button variant="dark" className="m-1 rounded-circle d-flex justify-content-center align-items-center" id="scrollToTop" onClick={() => {
                document.getElementById("top").scrollIntoView();
            }}><CaretUpFill /></Button>
            <div className="container">
                <div className="m-1">
                    {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map(letter => (
                        <GlossaryButton
                            key={letter + letter}
                            letter={letter}
                        />
                    ))}
                </div>
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