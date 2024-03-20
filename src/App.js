import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import NavBar from './Nav'
import Home from "./pages/Home";
import GISProjects from "./pages/GISProjects";
import PythonProjects from "./pages/PythonProjects";
import PhotoshopProjects from "./pages/PhotoshopProjects";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="gis" element={<GISProjects />} />
				<Route path="python" element={<PythonProjects />} />
				<Route path="photoshop" element={<PhotoshopProjects />} />
				<Route path="*" element={<Navigate to="/" />}/>
			</Routes> 
		</div>
	)
}

export default App;
