import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapLocation = ({ userData }) => {
  return (
    <MapContainer
      className="card card-compact w-60 bg-base-100 shadow-xl h-[200px]"
      center={[userData.location.lat, userData.location.lng]}
      zoom={20}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[userData.location.lat, userData.location.lng]}
      ></Marker>
    </MapContainer>
  );
};

export default MapLocation;
