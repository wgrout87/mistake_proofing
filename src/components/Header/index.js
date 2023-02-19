import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="d-flex justify-content-between">
            <Link className="navbar-brand text-decoration-none" to="/">
                <h1 className="font-weight-bold mx-4 my-3">
                    John Grout's Mistake-Proofing Center
                </h1>
            </Link>
        </header>
    )
}

export default Header;