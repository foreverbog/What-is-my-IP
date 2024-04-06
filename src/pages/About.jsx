import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex-grow bg-base flex flex-col justify-center items-center gap-4 ">
      <div className="text-4xl mb-28 divider ">What is my IP </div>
      <p className="text-secondary-content text-center text-balance mb-8">
        A website that get the user IP and geolocation and display a map from
        Leaflet according to the API's coordinates.
      </p>
      <div className="collapse collapse-arrow bg-base-300">
        <input type="checkbox" />
        <div className="text-xl collapse-title text-center font-medium">
          Tech Used:
        </div>
        <div className="collapse-content flex flex-col items-center justify-center gap-4">
          <div className="flex flex-wrap gap-4">
            <img src="public/html5-icon.svg" alt="HTML-Logo" />
            <img src="public/css-icon.svg" alt="CSS-Logo" />
            <img src="public/tailwind-css-icon.svg" alt="TAILWIND-CSS-Logo" />
            <img
              src="public/daisyui-logo.svg"
              alt="DaisyUI-Logo"
              width="48px"
              height="48px"
            />
            <img src="public/javascript-icon.svg" alt="JavaScript-Logo" />
            <img
              src="public/react.svg"
              alt="React-Logo"
              width="48px"
              height="48px"
            />
          </div>
          <p className="text-secondary-content text-lg font-bold">
            HTML, CSS, Tailwind-CSS, DaisyUI, JS, React
          </p>
          <p className="text-secondary-content text-center text-sm text-balance">
            REST API: to fetch user Location(IP, lat, lng, country flag)
            <br />
            useState, useEffect: to control the states, to fetch the data from
            the API
            <br />
            React Router: to link all the pages
            <br />
            React Leaflet: to display a map based on the lat/lng fetched from
            the API
            <br />
            React Icons: Links to Github repo and LinkedIn profile
            <br />
            Luxon: to get the exact time of the user
            <br />
            Storing API credentials locally in .env file
          </p>
        </div>
      </div>
      <Link to="/" className="btn btn-primary mt-16">
        Home
      </Link>
    </div>
  );
};

export default About;
