import React from "react";
import { useEffect, useRef, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export default function HeatMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoibm9haHNhbW9hIiwiYSI6ImNsb3Q3Z2lkaTA2aDQycnA4MmdqZ2J1cGYifQ.8NMJu7X2FcPeARpvIH0ItA';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [long, setLong] = useState(-122.3321);
    const [lat, setLat] = useState(47.6062);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/dark-v10',
                center: [-122.3321, 47.6062],
                zoom: 12
            });

            map.current.on('load', function () {
                // Load your GeoJSON data
                map.current.addSource('collisions', {
                    type: 'geojson',
                    data: '../assets/sdot-collisions.geojson' // Your GeoJSON file location
                });

                // Add a heatmap layer
                map.current.addLayer({
                    id: 'heatmap-layer',
                    type: 'heatmap',
                    source: 'collisions',
                    maxzoom: 15,
                    paint: {
                        'heatmap-weight': {
                            property: 'INJURIES',
                            type: 'interval',
                            stops: [
                                [0, .1],   // No injuries, weight 0
                                [1, 0.2], // 1 injury, weight 0.2
                                [2, 0.3], // 2 injuries, weight 0.4
                                [3, 0.5], // 3 injuries, weight 0.6
                                [4, 0.7],
                                [7, 0.8],
                                [10, 0.9], // 4 injuries, weight 0.8
                                [13, 1]   // 13 injuries, weight 1
                            ]
                        },
                        'heatmap-color': [
                            'interpolate',
                            ['linear'],
                            ['heatmap-density'],
                            0, 'rgba(33, 102, 172, 0)',  // Color for intensity 0
                            0.1, 'blue',                 // Color for intensity 0.1
                            0.2, 'royalblue',            // Color for intensity 0.2
                            0.3, 'cyan',                 // Color for intensity 0.3
                            0.5, 'lime',                 // Color for intensity 0.5
                            0.7, 'yellow',               // Color for intensity 0.7
                            0.8, 'orange',               // Color for intensity 0.8
                            0.9, 'darkorange',                  // Color for intensity 0.9
                            1, 'red'                   // Color for 1 intensity
                        ]
                    }
                });

                map.current.addLayer({
                    id: 'collisions-point',
                    type: 'circle',
                    source: 'collisions',
                    minzoom: 14,
                    paint: {
                        'circle-radius': {
                            property: 'INJURIES',
                            type: 'exponential',
                            stops: [
                                [{ zoom: 15, value: 0 }, 5],
                                [{ zoom: 15, value: 3 }, 10],
                                [{ zoom: 22, value: 0 }, 20],
                                [{ zoom: 22, value: 3 }, 50]
                            ]
                        },
                        'circle-color': {
                            property: 'INJURIES',
                            type: 'interval',
                            stops: [
                                [0, 'rgba(33, 102, 172, 0)'],   // No injuries, weight 0
                                [1, 'blue'], // 1 injury, weight 0.2
                                [2, 'royalblue'], // 2 injuries, weight 0.4
                                [3, 'cyan'], // 3 injuries, weight 0.6
                                [4, 'lime'],
                                [7, 'yellow'],
                                [10, 'orange'], // 4 injuries, weight 0.8
                                [13, 'darkorange']   // 13 injuries, weight 1
                            ]
                        },
                        'circle-stroke-color': 'white',
                        'circle-stroke-width': 1,
                        'circle-opacity': {
                            stops: [
                                [14, 0],
                                [15, 1]
                            ]
                        }
                    }
                });
            });
        }
    }, []);

    return (
        <div>
            <div id="map">
                <div ref={mapContainer} className="map-container" />
                <div className="map-overlay" id="features">
                    <div className="session" id="sliderbar">
                        <h2><label>Choose Active Date Range</label></h2>
                        <h3>Start Date<div id="minDate">March 2022</div></h3>
                        <input id="minSlider" className="row" type="range" min="0" max="21" step="1" value="0" />
                        <h3>End Date<div id="maxDate">December 2022</div></h3>
                        <input id="maxSlider" className="row" type="range" min="0" max="21" step="1" value="21" />
                    </div>
                    <div class="session">
                        <h2>Injuries</h2>
                        <div className="row colors"></div>
                        <div className="row labels">
                            <div className="label">0</div>
                            <div className="label">1</div>
                            <div className="label">2</div>
                            <div className="label">3</div>
                            <div className="label">4</div>
                            <div className="label">7</div>
                            <div className="label">10</div>
                            <div className="label">13</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}