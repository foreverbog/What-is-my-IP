import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar  bg-base-300 border-b-2 border-primary/30  justify-between">
      <img
        className="ml-8"
        src="/public/IP-logo.png"
        alt="IP App Logo"
        width="30px"
      />

      <div className="flex gap-4">
        <NavLink
          to="/about"
          className="btn btn-outline bg-base-300  text-base-content font-bold hover:bg-primary hover:text-base-300 transition-all duration-1000 mr-4"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
