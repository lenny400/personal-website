import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
		<nav className={`topnav ${isOpen ? 'responsive' : ''}`}>
			{/* Active link pointing to the index.html page */}
			<Link className="active" to="/">Home</Link>

			{/* Links to other sections */}
			<Link to="python">Python Projects</Link>
			<Link to="gis">GIS Projects</Link>

			{/* <a href="html/gis_projects.html">GIS Projects</a>
			<a href="html/java_projects.html">Java Projects</a>
			<a href="html/python_projects.html">Python Projects</a> */}

			{/* "Hamburger menu" / "Bar icon" to toggle the navigation links on smaller screens */}
			<label className="hamburger">
				<input type="checkbox" onClick={toggleMenu} />
				<svg viewBox="0 0 32 32">
					<path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
					<path className="line" d="M7 16 27 16"></path>
				</svg>
			</label>
		</nav>
    )
}