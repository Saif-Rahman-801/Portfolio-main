import react from "../../../assets/atom.png";
import nodeJS from "../../../assets/nodejs.png";
import expressJs from "../../../assets/icons8-express-js-50.png";
import mongoDb from "../../../assets/icons8-mongo-db-64.png";
import { useEffect } from "react";
import Aos from "aos";

const Experience = () => {
  useEffect(() => {
    Aos.init();
    // AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" className="container mx-auto my-10">
      <h2 className="text-4xl font-semibold mb-6 mx-3">Experience</h2>
      {/* Web Development Course */}
      <div data-aos="fade-up" className="container mx-auto my-5">
        {/* <h2 className="text-4xl font-semibold mb-6 mx-3">
          Learning
        </h2> */}

        <div className="flex items-center flex-col md:flex-row">
          <div className="ml-6 mb-8 p-3">
            <h3 className="text-2xl font-semibold mb-4">Web Development Course</h3>
            <p className="text-gray-600">
              Completed a web development course at{" "}
              <a
                href="https://web.programming-hero.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Programming Hero
              </a>{" "}
              and earned a certificate.
            </p>
            <p className="text-gray-600 mt-2">
              View my certificate{" "}
              <a
                href="https://drive.google.com/file/d/1B1hfbpSJIA0g1LJqvmu6g4FTu-EeZqMM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col md:flex-row">
        {/* Frontend Experience */}
        <div className="ml-6 mb-8 border-r-2 border-gray-400 p-3">
          <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>

          {/* Individual Job/Project */}
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-2">React Developer</h4>
            <p className="text-gray-600">
              Tech stack: Daisy Ui, React-router with Firebase{" "}
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Developed responsive and user-friendly web interfaces using
                <img
                  src={react}
                  alt="React"
                  className="inline-block w-6 h-6 mx-2"
                />{" "}
                React.js.
              </li>
              <li>
                Collaborated with design teams to implement UI/UX improvements.
              </li>
              {/* Add more points as needed */}
            </ul>
          </div>

          {/* Add more Frontend Experience sections as needed */}
        </div>

        {/* Backend Experience */}
        <div className="border-r-2 mb-8 md:border-none border-gray-400 ml-6 p-3">
          <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>

          {/* Individual Job/Project */}
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-2">Node.js Developer</h4>
            <p className="text-gray-600">Tech stack: Express, MongoDB </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Implemented server-side logic using
                <img
                  src={nodeJS}
                  alt="Node.js"
                  className="inline-block w-6 h-6 mx-2"
                />{" "}
                Node.js and
                <img
                  src={expressJs}
                  alt="Express.js"
                  className="inline-block w-6 h-6 mx-2"
                />{" "}
                Express.js.
              </li>
              <li>
                Designed and maintained databases using
                <img
                  src={mongoDb}
                  alt="MongoDB"
                  className="inline-block w-6 h-6 mx-2"
                />{" "}
                MongoDB.
              </li>
              {/* Add more points as needed */}
            </ul>
          </div>

          {/* Add more Backend Experience sections as needed */}
        </div>
      </div>

      
    </div>
  );
};

export default Experience;
