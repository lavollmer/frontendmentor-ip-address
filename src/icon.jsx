import L from 'leaflet';

const iconLocation = new L.Icon({
    iconUrl: require('../src/assets/icon-location.svg'),
    iconRetinaUrl: require('../src/assets/icon-location.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconLocation };