import { Link } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const HeroSection = () => {
  return (
    <div className="flex-grow flex-col flex gap-2 justify-center items-center">
      <Link to="addresscheck" className="btn btn-accent text-xl">
        Get your IP Adress
      </Link>
      <details className="collapse collapse-arrow flex justify-center items-center  max-w-[300px] text-center mt-16 ">
        <summary className="collapse-title text-xl font-medium px-0 ">
          <em className="text-2xl ">Example Outcome:</em>
        </summary>
        <div className="collapse-content">
          <div className="flex  flex-col justify-center items-center gap-4 mt-16">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <div>
                <em>
                  <b>Your IP address is:</b> 8.8.8.8
                </em>
              </div>
              <div className="flex flex-wrap text-center justify-center gap-2 ">
                <em>You are currently located in: London, United Kingdom</em>
                <img
                  src="https://flagcdn.com/w320/gb.png"
                  alt="The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew."
                  className="h-[20px] rounded-sm "
                />
              </div>
              <p>
                <em>Local Time: Mar 2, 2024 6:21PM </em>
              </p>
            </div>
            <MapContainer
              className="card card-compact w-60 bg-base-100 shadow-xl h-[200px]"
              center={[51.505, -0.09]}
              zoom={13}
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
      </details>
      {/* <div className="flex  flex-col justify-center items-center gap-4 mt-16">
        <div className="text-[2em]">
          <em>Example Outcome:</em>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div>
            <em>
              <b>Your IP address is:</b> 8.8.8.8
            </em>
          </div>
          <div className="flex flex-wrap text-center justify-center gap-2 ">
            <em>You are currently located in: London, United Kingdom</em>
            <img
              src="https://flagcdn.com/w320/gb.png"
              alt="The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew."
              className="h-[20px] rounded-sm "
            />
          </div>
          <p>
            <em>Local Time: Mar 2, 2024 6:21PM </em>
          </p>
        </div>
        <MapContainer
          className="card card-compact w-60 bg-base-100 shadow-xl h-[200px]"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}></Marker>
        </MapContainer>
      </div> */}
    </div>
  );
};

export default HeroSection;
