import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <h1 className="text-3xl font-bold">Saif Rahman</h1>
        </div>
        <div className="navbar-end flex items-center">
          {/* Email */}
          <p className="text-base mr-4 hidden md:flex">saifurs102@gmail.com</p>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Saif-Rahman-801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/saif-rahman-72a659290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300 ml-4"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
