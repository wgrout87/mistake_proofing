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
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav ms-auto text-center">
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1" to="/examples">EXAMPLES</Link>
                        </li>
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1" to="/blogsandvlogs">BLOGS/VLOGS</Link>
                        </li>
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1" to="/books">BOOKS</Link>
                        </li>
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1" to="/articles">ARTICLES</Link>
                        </li>
                        <li>
                            <Link className="nav-link btn btnForm rounded text-decoration-none px-4 m-1" to="/glossary">GLOSSARY</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;