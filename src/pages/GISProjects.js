import React from "react";
import projectData from '../data/projectData.json';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function GISProjects() {
    return (
        <div>
            <div className="container">
              <h3></h3>
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
                            <b>Tech stack:</b>
                            <ul>
                              {card.stack.map((listItem) => (
                                  <li>{listItem}</li>
                              ))}
                            </ul>
                            <a className="btn btn-dark" href={card.link} target="_blank" rel="noreferrer">See this project</a>
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

            <div className="separator" />

            <h2 className="title">Mapping Fire and Emergency Medical Incidents in Kent, Washington</h2>
            <div class="contour-maps">
                <img src="img/contour-maps/allResponses.png" alt="All Responses" />
                <img src="img/contour-maps/fireExplosionHazMat.png" alt="Fire, Explosion, Haz Mat" />
                <img src="img/contour-maps/structureFires.png" alt="Structure Fires" />
                <img src="img/contour-maps/rescueEMS.png" alt="Rescue, EMS" />
                <img src="img/contour-maps/serviceCallsOther.png" alt="Service Calls, Other" />
            </div>         
        </div>
    )
}