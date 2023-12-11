/* eslint-disable react/no-unescaped-entities */
import JS from "../../../assets/js.png";
import react from "../../../assets/atom.png";
import nodeJS from "../../../assets/nodejs.png";
import expressJs from "../../../assets/icons8-express-js-50.png";
import mongoDb from "../../../assets/icons8-mongo-db-64.png";

const AboutMe = () => {
  return (
    <div className=" text-gray-600 p-8 rounded-lg font-medium">
      <h2 className="text-4xl font-semibold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed mb-6">
        Hey there! I'm Saif Rahman, a MERN stack enthusiast with a strong
        background in scientific principles. My educational journey includes
        earning a Higher Secondary Certificate in Science from Hajera Taju
        University College. During this time, I immersed myself in a
        comprehensive science program.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        As a developer, I've dedicated my efforts to crafting dynamic and
        responsive web applications. Here are some technologies I'm proficient
        in:
      </p>
      <div className="flex gap-5">
        <img src={JS} alt="JavaScript" className="w-10 h-10" />
        <img src={react} alt="React" className="w-10 h-10" />
        <img src={nodeJS} alt="Node.js" className="w-10 h-10" />
        <img src={expressJs} alt="Express.js" className="w-10 h-10" />
        <img src={mongoDb} alt="MongoDB" className="w-10 h-10" />
      </div>
      <p className="text-lg leading-relaxed mt-6">
        I thrive on tackling intricate problems and transforming ideas into
        reality through well-organized and efficient code. My journey as a
        developer is an ongoing exploration of new technologies, and I'm
        committed to delivering top-notch software solutions.
      </p>
    </div>
  );
};

export default AboutMe;
