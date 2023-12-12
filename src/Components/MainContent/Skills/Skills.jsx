/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-[70%] mx-auto my-10">
      <h2 className="text-4xl font-semibold mb-6">Skills</h2>

      {/* Frontend Skills */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Frontend Technologies</h3>
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
      <div>
        <h3 className="text-2xl font-semibold mb-4">Backend Technologies</h3>
        <div className="flex flex-wrap gap-4">
          <SkillBadge name="Node.js" />
          <SkillBadge name="Express.js" />
          <SkillBadge name="MongoDB" />
          {/* Add more backend skills as needed */}
        </div>
      </div>
    </div>
  );
};

const SkillBadge = ({ name }) => {
  return (
    <div className="flex items-center font-medium bg-gray-500 text-white py-2 px-4 rounded-full">
      <span className="text-black">
        <FaCheckCircle className="mr-2" />
      </span>
      {name}
    </div>
  );
};

export default Skills;
