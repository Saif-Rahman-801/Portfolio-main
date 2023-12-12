/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Aos from "aos";
import JS from "../../../assets/js.png";
import react from "../../../assets/atom.png";
import nodeJS from "../../../assets/nodejs.png";
import expressJs from "../../../assets/icons8-express-js-50.png";
import mongoDb from "../../../assets/icons8-mongo-db-64.png";

const AboutMe = () => {
  useEffect(() => {
    Aos.init();
    // AOS.refresh();
  }, []);

  const fullName = "Saif Rahman";
  const education = "Higher Secondary Certificate in Science";
  const email = "saifurs102@gmail.com";
  const phone = "+8801873090443";
  const age = "21";
  const nationality = "Bangladeshi";

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row items-center p-8 font-medium border-l-2 border-gray-400"
    >
      {/* About Me Content */}
      <div className="text-gray-600 px-5">
        <h2 className="text-4xl font-semibold mb-4">{`About me`}</h2>
        <p className="text-lg leading-relaxed mb-6">
          Hey there! I'm {fullName}, a MERN stack enthusiast with a strong
          learning in JavaScript, React, NodeJS, ExpressJS & MongoDB. I earned my {education} from
          Hajera Taju University College.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          As a developer, I've dedicated my efforts to crafting dynamic and
          responsive web applications. Here are some technologies I'm proficient
          in:
        </p>
        <div className="flex gap-5 mb-6">
          <img src={JS} alt="JavaScript" className="w-10 h-10" />
          <img src={react} alt="React" className="w-10 h-10" />
          <img src={nodeJS} alt="Node.js" className="w-10 h-10" />
          <img src={expressJs} alt="Express.js" className="w-10 h-10" />
          <img src={mongoDb} alt="MongoDB" className="w-10 h-10" />
        </div>
        <p className="text-lg leading-relaxed">
          I thrive on tackling intricate problems and transforming ideas into
          reality through well-organized and efficient code. My journey as a
          developer is an ongoing exploration of new technologies, and I'm
          committed to delivering top-notch software solutions.
        </p>

        {/* Additional Information */}
        <div className="mt-6 text-gray-700">
          <p className="text-lg">Name: {fullName}</p>
          <p className="text-lg">Education: {education}</p>
          <p className="text-lg">Email: {email}</p>
          <p className="text-lg">Phone: {phone}</p>
          <p className="text-lg">Age: {age}</p>
          <p className="text-lg">Nationality: {nationality}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
