/* eslint-disable react/prop-types */
import Aos from "aos";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    Aos.init();
    // AOS.refresh();
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="container mx-auto my-10 p-8">
          <h2 className="text-4xl font-semibold mb-5 text-center">Skills</h2>
        <div className="px-5 flex flex-col md:flex-row justify-evenly gap-5">
          {/* Frontend Skills */}
          <div className="w-auto md:w-[40%] my-7 border-2 border-gray-400 rounded-xl p-4">
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SkillBadge name="JavaScript" />
              <SkillBadge name="React.js" />
              <SkillBadge name="Daisy Ui" />
              <SkillBadge name="HTML5" />
              <SkillBadge name="CSS3" />
              {/* Add more frontend skills as needed */}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="my-7 w-auto md:w-[40%] border-2 border-gray-400 rounded-xl p-4">
            <h3 className="text-2xl font-semibold mb-4">
              Backend Technologies
            </h3>
            <div className="flex flex-wrap gap-4">
              <SkillBadge name="Node.js" />
              <SkillBadge name="Express.js" />
              <SkillBadge name="MongoDB" />
              {/* Add more backend skills as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SkillBadge = ({ name }) => {
  return (
    <div className="flex items-center font-medium text-gray-600 py-2 px-4 rounded-full">
      <span className="text-black">
        <FaCheckCircle className="mr-2" />
      </span>
      {name}
    </div>
  );
};

export default Skills;
