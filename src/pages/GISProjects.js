import React from "react";
import HeatMap from "../components/HeatMap";

export default function GISProjects() {
    return (
        <div>
            <div className="heatmap">
                <h2>Seattle Collision Heatmap (unfinished)</h2>
                <HeatMap />
            </div>
            <br/>
            <p><strong>Project Timeline: 4 weeks</strong>
            <br/>
            <br/>
            As part of a group project in GEOG 328 (Web-Based GIS), I collaborated with four students to create an
            interactive heatmap depicting vehicle collision severity in Seattle. Utilizing GeoJSON data from the Seattle
            Department of Transportation, we focused on a 21-month period from March 2022 to December 2023, condensing a
            dataset spanning 20 years for storage efficiency.</p>
            <br/>
            <br/> 
            Development stack:
            <ul>
                <li>Mapbox</li>
                <li>Python (GeoPandas)</li> 
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Github</li>
            </ul>
            <br/>
            Data Source:
            <a href="https://data-seattlecitygis.opendata.arcgis.com/datasets/sdot-collisions-all-years-2/explore"
                target="_blank"> SDOT Collisions All Years</a> 
            {/* Horizontal separator line */}
            <div className="separator"></div>
        </div>
    )
}