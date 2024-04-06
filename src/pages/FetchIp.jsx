import { Link } from "react-router-dom";
import MapLocation from "../components/MapLocation";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import { fetchIp, fetchCountry } from "../services/fetchData";
const FetchIp = () => {
  const dt = DateTime.now();
  const [userData, setUserData] = useState(null);
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetchIp();

        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData && userData.location) {
          const data = await fetchCountry(userData.location.country);
          setCountryData(data);
        }
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userData]);
  return (
    <>
      {countryData.length > 0 ? (
        <div className="flex-grow bg-base flex flex-col justify-center items-center ">
          <div className="  flex flex-col gap-8 justify-center items-center p-8 w-[100%]">
            <div className="flex flex-col justify-center items-center gap-4">
              <div>
                <b>Your IP address is:</b> {userData.ip}
              </div>
              <div className="flex flex-wrap gap-2  text-center text-balance justify-center">
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
          <p className="leading-8 mt-8 text-center text-balance text-xs">
            <b>
              If no data is displayed, it means that the API request limit has
              been exceeded.
              <br />
              The problem will be fixed soon! Thank you for your understanding!
            </b>
          </p>
          <Link to="/" className=" btn btn-primary mt-16">
            Go back
          </Link>
        </div>
      )}
    </>
  );
};

export default FetchIp;
