const NavBar = () => {
  return (
    <div className="navbar  bg-base-300 shadow-md shadow-info-content  justify-between">
      <p className="text-accent-content">Check my IP!</p>
      <div className="flex gap-4">
        <button className="btn bg-secondary text-accent-content">About</button>
        <button className="btn bg-secondary text-accent-content">Log in</button>
      </div>
    </div>
  );
};

export default NavBar;
