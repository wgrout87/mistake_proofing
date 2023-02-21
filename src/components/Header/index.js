import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="d-flex flex-column bg-dark text-light">
            <Link className="navbar-brand text-decoration-none" to="/">
                <h1 className="mx-4 my-3 text-start">
                    John Grout's Mistake-Proofing Center
                </h1>
            </Link>

            <nav className="navbar navbar-expand-md w-100">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle='collapse'
                    data-bs-target='#toggleMobileMenu'
                    aria-controls="toggleMobileMenu"
                    aria-expanded='false'
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon navbar-dark"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav text-center">
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1 text-light" to="/examples">EXAMPLES</Link>
                        </li>
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1 text-light" to="/blogsandvlogs">BLOGS/VLOGS</Link>
                        </li>
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1 text-light" to="/books">BOOKS</Link>
                        </li>
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1 text-light" to="/articles">ARTICLES</Link>
                        </li>
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1 text-light" to="/glossary">GLOSSARY</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;