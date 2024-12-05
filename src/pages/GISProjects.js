import React from "react";
import projectData from '../data/projectData.json';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function GISProjects() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {projectData.map((card, index) => (
              <div key={index} className="col-md-6 col-xl-6 d-flex">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-auto col-xl-12">
                        <img className="pb-3 img-fluid" src={card.imgSrc} alt={`${card.name}`} />
                      </div>
                      <div className="col-sm">
                        <h2 className="card-title">{card.name}</h2>
                        <p className="card-text">{card.description}</p>
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
      </div>
    )
}