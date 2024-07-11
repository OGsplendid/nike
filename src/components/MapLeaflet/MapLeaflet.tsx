import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './MapLeaflet.css'

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
        <Marker position={[45.510556, -122.831944]}>
            <Popup>
              Location
            </Popup>
        </Marker>
    </MapContainer>
  )
}

export default MapLeaflet