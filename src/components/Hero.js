import React from "react";

export default function Hero() {
    return (
        <div className="heroContainer">
            <div className="heroContent">
                <h1>Hello! </h1><br/>
                <h2>I'm Shawn,<br/><br/>a GIS analyst and web developer based in Seattle, WA.</h2>
                <p>Scroll down to see my collection of projects highlighting my skills in GIS, web mapping, and design.
                </p>
            </div>
            <img src="img/osaka.png" alt="Me standing in front of Osaka"/>
        </div>
    )
}