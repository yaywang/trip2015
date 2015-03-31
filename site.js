var city_coordinates = {
    'Prague': [14.4167,50.0833],
    'Barcelona': [2.1833,41.3833],
    'Beijing': [116.3833, 39.9167],
    'Xian': [108.9000, 34.2667],
    'Lhasa' : [91.1167, 29.6500],
    'Kathmandu': [85.3333, 27.7000]
};

function getGeojson(city_coordinates) {
    var geojson = {
        type: 'FeatureCollection',
        features: [
        /*
        {
            type:'Feature',
            properties: {
                title: '',
                'marker-color': '#f86767',
                'marker-size': 'large',
                'marker-symbol': 'star'
            },
            geometry: {
                type: 'Point',
                coordinates: ''
            }
        }
        */
        ]
    };

    var CityJson = function (city) {
        this.type = 'Feature',
        this.properties ={},
        this.properties.title = city,
        this.properties['marker-color'] = '#377BB5',
        this.properties['marker-size'] ='medium',
        this.properties['marker-symbol'] = 'circle',
        this.geometry ={},
        this.geometry.type = 'Point',
        this.geometry.coordinates = city_coordinates[city]
    };

    for (var city in city_coordinates) {
        var cityJson = new CityJson(city);
        geojson.features.push(cityJson)
    };
    
    console.log(geojson.features[0].geometry.type);

    return geojson
}

geojson = getGeojson(city_coordinates);

/*
geojson.features[0].properties.title = 'Barcelona';
geojson.features[0].geometry.coordinates = city_coordinates['Barcelona'];
*/


/*
var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        properties: {
            title: 'Washington, D.C.',
            url: 'http://en.wikipedia.org/wiki/Washington,_D.C.'
        },
        geometry: {
            type: 'Point',
            coordinates: [-77.03201, 38.90065]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Baltimore, MD',
            'marker-color': '#7ec9b1',
            'marker-size': 'large',
            'marker-symbol': 'star',
            url: 'http://en.wikipedia.org/wiki/Baltimore'
        },
        geometry: {
            type: 'Point',
            coordinates: [-76.60767, 39.28755]
        }
    }]
};
*/

L.mapbox.accessToken = 'pk.eyJ1Ijoid2FuZ3llZ3AiLCJhIjoiQjRYNUhMRSJ9._8jAvYGD1h2BLOwwNC89Kw';

var map = L.mapbox.map('map-one', 'wangyegp.lh2462d2', {
    scrollWheelZoom: false,
})

var myLayer = L.mapbox.featureLayer().addTo(map);
myLayer.setGeoJSON(geojson);

