// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

const month_year = ["2022-03-01", "2022-04-01", "2022-05-01", "2022-06-01", "2022-07-01", "2022-08-01", "2022-09-01", "2022-10-01", "2022-11-01", "2022-12-01", "2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01", "2023-05-01", "2023-06-01", "2023-07-01", "2023-08-01", "2023-09-01", "2023-10-01", "2023-11-01", "2023-12-01"];
const showDate = ["March 2022", "April 2022", "May 2022",   "June 2022", "July 2022", "August 2022", "September 2022", "October 2022", "November 2022", "December 2022", "January 2023", "February 2023", "March 2023", "April 2023", "May 2023", "June 2023", "July 2023", "August 2023", "September 2023", "October 2023", "November 2023", "December 2023"]
mapboxgl.accessToken = 'pk.eyJ1Ijoibm9haHNhbW9hIiwiYSI6ImNsb3Q3Z2lkaTA2aDQycnA4MmdqZ2J1cGYifQ.8NMJu7X2FcPeARpvIH0ItA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // A dark style to contrast with the heatmap
    center: [-122.3321, 47.6062],
    zoom: 12
});

map.on('load', function () {
    // Load your GeoJSON data
    map.addSource('collisions', {
        type: 'geojson',
        data: '../assets/sdot-collisions.geojson' // Your GeoJSON file location
    });
    
    // Add a heatmap layer
    map.addLayer(
        {
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
                
        }
    );

    map.addLayer(
        {
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
        },
        );

    function updateDateRange() {
        const sdate = parseInt(document.getElementById('minSlider').value);
        const edate = parseInt(document.getElementById('maxSlider').value);
        const startDate = month_year[sdate];
        const endDate = month_year[edate];

        // Update the map filter
        map.setFilter('heatmap-layer', ['all',
            ['>=', ['get', 'ADDDTTM'], startDate],
            ['<=', ['get', 'ADDDTTM'], endDate]
        ]);

        map.setFilter('collisions-point', ['all',
            ['>=', ['get', 'ADDDTTM'], startDate],
            ['<=', ['get', 'ADDDTTM'], endDate] 
        ]);

        // Update text in the UI
        document.getElementById('minDate').innerText = showDate[sdate];
        document.getElementById('maxDate').innerText = showDate[edate];
    }

    document.getElementById('minSlider').addEventListener('input', (event) => {
        updateDateRange();
    });

    document.getElementById('maxSlider').addEventListener('input', (event) => {
        updateDateRange();
    });

    map.on('click', 'collisions-point', (event) => {
        new mapboxgl.Popup()
            .setLngLat(event.features[0].geometry.coordinates)
            .setHTML(`<strong>INJURIES:</strong> ${event.features[0].properties.INJURIES}<br>
            <strong>SERIOUS INJURIES:</strong> ${event.features[0].properties.SERIOUSINJURIES}<br>
            <strong>COLLISION TYPE:</strong> ${event.features[0].properties.COLLISIONTYPE}<br>
            <strong>STREET:</strong> ${event.features[0].properties.LOCATION}<br>
            `)
            .addTo(map);
        });
});