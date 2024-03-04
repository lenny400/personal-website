import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import NavBar from './Nav'
import Home from "./pages/Home";
import GISProjects from "./pages/GISProjects";
import JavaProjects from "./pages/JavaProjects";
import PythonProjects from "./pages/PythonProjects";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="gis" element={<GISProjects />} />
				<Route path="java" element={<JavaProjects />} />
				<Route path="python" element={<PythonProjects />} />
				<Route path="*" element={<Navigate to="/" />}/>
			</Routes> 
		</div>
	)
}

export default App;
