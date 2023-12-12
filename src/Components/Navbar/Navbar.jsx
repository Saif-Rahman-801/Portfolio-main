const Navbar = () => {
  const li = (
    <>
      <li>
        <a className="font-medium text-lg">About</a>
      </li>
      <li>
        <a className="font-medium text-lg">Experience</a>
      </li>
      <li>
        <a className="font-medium text-lg">Skills</a>
      </li>
      <li>
        <a className="font-medium text-lg">Projects</a>
      </li>
      <li>
        <a className="font-medium text-lg">Contact</a>
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <h1 className="text-3xl font-bold">Saif Rahman</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
