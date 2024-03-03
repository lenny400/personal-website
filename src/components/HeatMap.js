import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geojsonData from '../sdot-collisions.geojson'; // Import the GeoJSON data

export default function HeatMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoibm9haHNhbW9hIiwiYSI6ImNsb3Q3Z2lkaTA2aDQycnA4MmdqZ2J1cGYifQ.8NMJu7X2FcPeARpvIH0ItA';
    const mapContainer = useRef(null);
    const map = useRef(null);

    // const month_year = ["2022-03-01", "2022-04-01", "2022-05-01", "2022-06-01", "2022-07-01", "2022-08-01", "2022-09-01", "2022-10-01", "2022-11-01", "2022-12-01", "2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01", "2023-05-01", "2023-06-01", "2023-07-01", "2023-08-01", "2023-09-01", "2023-10-01", "2023-11-01", "2023-12-01"];
    // const showDate = ["March 2022", "April 2022", "May 2022",   "June 2022", "July 2022", "August 2022", "September 2022", "October 2022", "November 2022", "December 2022", "January 2023", "February 2023", "March 2023", "April 2023", "May 2023", "June 2023", "July 2023", "August 2023", "September 2023", "October 2023", "November 2023", "December 2023"]

    useEffect(() => {
        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/dark-v10',
                center: [-122.3321, 47.6062],
                zoom: 12
            });

            map.current.on('load', function () {
                map.current.addSource('collisions', {
                    type: 'geojson',
                    data: geojsonData // Use imported GeoJSON data as the data source
                });

                // Add heatmap layer
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
                    // increase the radius of the circle as the zoom level and dbh value increases
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
        <div className="map">
            <h2>Seattle Collision Heatmap (unfinished)</h2>
            <div ref={mapContainer} className="map-container"></div>
            {/* <div class='map-overlay' id='features'>
                <div class='session' id='sliderbar'>
                    <h2><label>Choose Active Date Range</label></h2>
                    <h3>Start Date<div id="minDate">March 2022</div></h3>
                    <input id='minSlider' class='row' type='range' min='0' max='21' step='1' value='0' />
                    <h3>End Date<div id="maxDate">December 2022</div></h3>
                    <input id='maxSlider' class='row' type='range' min='0' max='21' step='1' value='21' />
                </div>
                <div class='session'>
                    <h2>Injuries</h2>
                    <div class='row colors'></div>
                    <div class='row labels'>
                        <div class='label'>0</div>
                        <div class='label'>1</div>
                        <div class='label'>2</div>
                        <div class='label'>3</div>
                        <div class='label'>4</div>
                        <div class='label'>7</div>
                        <div class='label'>10</div>
                        <div class='label'>13</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}