import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './MapLeaflet.css'
import L from 'leaflet';
import markerIcon from '../../assets/images/marker-icon.png'
import markerShadow from '../../assets/images/marker-shadow.png'

const icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [20, 38],
  shadowSize: [35, 55],
  iconAnchor: [0, 64],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});

const MapLeaflet = () => {
  return (
    <MapContainer
        center={[45.510556, -122.831944]}
        zoom={13} scrollWheelZoom={true}
        style={{ width: '100%', height: '30vh' }}
      >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.510556, -122.831944]} icon={icon}>
            <Popup>
              Our location
            </Popup>
        </Marker>
    </MapContainer>
  )
}

export default MapLeaflet