import React from "react";

export default function NavBar() {
    return (
		<nav className="topnav" id="myTopnav">
			{/* Active link pointing to the index.html page */}
			<a className="active" href="index.html">Home</a>

			{/* Links to other sections */}
			<a href="html/gis_projects.html">GIS Projects</a>
			<a href="html/java_projects.html">Java Projects</a>
			<a href="html/python_projects.html">Python Projects</a>

			{/* "Hamburger menu" / "Bar icon" to toggle the navigation links on smaller screens */}
			<label className="hamburger">
				<input type="checkbox" />
				<svg viewBox="0 0 32 32">
					<path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
					<path className="line" d="M7 16 27 16"></path>
				</svg>
			</label>
		</nav>
    )
}