import { Link } from "react-router-dom";
import MapLocation from "../components/MapLocation";
import { DateTime } from "luxon";

const FetchIp = ({ userData, countryData }) => {
  const dt = DateTime.now();

  return (
    <>
      {countryData.length > 0 ? (
        <div className="flex-grow bg-base flex flex-col justify-center items-center ">
          <div className="  flex flex-col gap-8 justify-center items-center p-8 w-[100%]">
            <div className="flex flex-col justify-center items-center gap-4">
              <div>
                <b>Your IP address is:</b> {userData.ip}
              </div>
              <div className="flex gap-2 ">
                You are currently located in: {userData.location.city},{" "}
                {countryData[0].name.common}
                <img
                  className="h-[20px] rounded-sm "
                  src={countryData[0].flags.png}
                  alt={countryData[0].flags.alt}
                />
              </div>
              <p>Local Time: {dt.toLocaleString(DateTime.DATETIME_MED)}</p>
            </div>
            <MapLocation userData={userData} />
          </div>
          <Link to="/" className="btn btn-primary mt-16">
            Go back
          </Link>
        </div>
      ) : (
        <div className="flex-grow flex flex-col justify-center items-center">
          <span className="loading loading-spinner loading-lg  "></span>
          <Link to="/" className="btn btn-primary mt-16">
            Go back
          </Link>
        </div>
      )}
    </>
  );
};

export default FetchIp;
