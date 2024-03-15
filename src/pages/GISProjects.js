import React from "react";
// import HeatMap from "../components/HeatMap";
import projectData from '../data/projectData.json';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function GISProjects() {
    return (
        <div>
            {/* <div className="heatmap">
                <HeatMap />
            </div>
            <br/>
            <div className="description">
                <b>Project Timeline: 4 weeks</b>
                <br/>
                <br/>
                As part of a group project in GEOG 328 (Web-Based GIS), I collaborated with four students to create an
                interactive heatmap depicting vehicle collision severity in Seattle. Utilizing JSON data from the Seattle
                Department of Transportation, we focused on a 21-month period from March 2022 to December 2023, condensing a
                dataset spanning 20 years for storage efficiency.
                <br/>
                <br/> 
                Development stack:
                <ul>
                    <li>Mapbox API (Mapbox.js)</li>
                    <li>JavaScript</li>
                    <li>Python (GeoPandas)</li> 
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Github</li>
                </ul>
                <br/>
                Data Source:
                <a href="https://data-seattlecitygis.opendata.arcgis.com/datasets/sdot-collisions-all-years-2/explore"
                    target="_blank" rel="noreferrer">SDOT Collisions All Years</a>
            </div>  */}

            <h2 className="title">Mapping Fire and Emergency Medical Incidents in Kent, Washington</h2>
            <div class="contour-maps">
                <img src="img/contour-maps/allResponses.png" alt="All Responses" />
                <img src="img/contour-maps/fireExplosionHazMat.png" alt="Fire, Explosion, Haz Mat" />
                <img src="img/contour-maps/structureFires.png" alt="Structure Fires" />
                <img src="img/contour-maps/rescueEMS.png" alt="Rescue, EMS" />
                <img src="img/contour-maps/serviceCallsOther.png" alt="Service Calls, Other" />
            </div>

            <div className="separator"></div>

            <div className="container">
              <div className="row">
                {projectData.map((card, index) => (
                  <div key={index} className="col-md-6 col-xl-3 d-flex">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-auto col-xl-12">
                            <img className="pb-3 img-fluid" src={card.imgSrc} alt={`${card.name}`} />
                          </div>
                          <div className="col-sm">
                            <h2 className="card-title">{card.name}</h2>
                            <p className="card-text">{card.description}</p>
                            <a className="btn btn-dark" href={card.link} target="_blank" rel="noreferrer">Link</a>
                            {card.repo && (
                              <a className="btn btn-dark" href={card.repo} target="_blank" rel="noreferrer">Repo</a>
                            )}
                          </div>
                        </div>
                      </div>          
                    </div>
                  </div>
                ))}
              </div>
            </div>
                
        </div>
    )
}