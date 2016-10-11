
/*Map*/

(function($) {
    "use strict";


    function initialize_map() {

        // Základní nastavení GoogleMap
        // MORE: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

        var myLatLng = new google.maps.LatLng(50.7991156, 14.9541811);

        var mapOptions = {
            zoom: 15,
            center: myLatLng,
            disableDefaultUI: true,
            scrollwheel: true,
            navigationControl: true,
            mapTypeControl: true,
            scaleControl: false,
            draggable: true,

            // STYL MAPY (Lze vlažit jakýkoliv styl pro Snazzy Maps.)

            styles: [{ "featureType": "landscape", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "stylers": [{ "hue": "#00aaff" }, { "saturation": -100 }, { "gamma": 2.15 }, { "lightness": 1 }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "lightness": -20 }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 57 }] }]
        };

        // HTML DOM, id="map" v <body>
        var mapElement = document.getElementById('map-canvas');

        // VYTVOŘENÍ Google Map
        var map = new google.maps.Map(mapElement, mapOptions);

        // IKONA
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.7991156, 14.9541811),
            map: map,
            icon: 'images/icons/map-marker.png',
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize_map);

})(jQuery);