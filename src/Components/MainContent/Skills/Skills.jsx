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
      <div data-aos="fade-up" className="container mx-auto my-10 border-l-2 border-gray-400 p-8">
        <div className="px-5">
          <h2 className="text-4xl font-semibold mb-5">Skills</h2>
          {/* Frontend Skills */}
          <div className="w-auto md:w-[40%] my-7">
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Technologies
            </h3>
            <div className="flex flex-wrap gap-4">
              <SkillBadge name="JavaScript" />
              <SkillBadge name="React.js" />
              <SkillBadge name="Daisy Ui" />
              <SkillBadge name="HTML5" />
              <SkillBadge name="CSS3" />
              {/* Add more frontend skills as needed */}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-8 w-auto md:w-[40%]">
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
    <div className="flex items-center font-medium bg-blue-500 text-white py-2 px-4 rounded-full">
      <span className="text-black">
        <FaCheckCircle className="mr-2" />
      </span>
      {name}
    </div>
  );
};

export default Skills;
