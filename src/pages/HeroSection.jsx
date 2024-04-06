import { Link } from "react-router-dom";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const HeroSection = () => {
  L.Icon.Default.imagePath = "images/";
  return (
    <div className="flex-grow flex-col flex gap-2 justify-center items-center">
      <div className="text-4xl mb-28 divider mt-8">Welcome ! </div>

      <Link to="addresscheck" className="btn btn-accent text-xl">
        Get your IP Adress
      </Link>

      <div className="collapse collapse-arrow bg-base-200 max-w-[500px] text-center mt-16 mb-4">
        <input type="checkbox" />
        <div className="collapse-title  text-2xl font-medium">
          Example Outcome:
        </div>
        <div className="collapse-content">
          <div className="flex flex-col justify-center items-center gap-4">
            <em>
              <b>Your IP address is:</b> 8.8.8.8
            </em>
            <div className="flex flex-wrap text-center justify-center gap-2 text-balance">
              <em>You are currently located in: London, United Kingdom</em>
              <img
                src="https://flagcdn.com/w320/gb.png"
                alt="The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew."
                className="h-[20px] rounded-sm "
              />
            </div>
            <em>Local Time: Mar 2, 2024 6:21PM </em>
            <MapContainer
              className="card card-compact w-60 bg-base-100 shadow-xl h-[200px] mt-4"
              center={[51.505, -0.09]}
              zoom={20}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
