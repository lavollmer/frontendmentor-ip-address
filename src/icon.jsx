import L from 'leaflet';
import iconLocationImg from "./assets/icon-location.svg"

const iconLocation = new L.Icon({
    iconUrl: iconLocationImg,
    iconRetinaUrl: iconLocationImg,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 60),
    className: ''
});

export default iconLocation ;