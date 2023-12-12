/* eslint-disable react/prop-types */
import Aos from "aos";
import { useEffect } from "react";

const projects = [
  {
    title: "Employee Management",
    description:
      "A web application designed to manage employee information, including details such as name, position, and contact information.",
    liveDemo: "https://employee-management-de63c.web.app",
    githubRepo: "https://github.com/Saif-Rahman-801/Employee-Management-Client",
  },
  {
    title: "Brand Shop",
    description:
      "An e-commerce platform where users can explore and purchase products from various brands. The application includes features such as product categories, user accounts, and a shopping cart.",
    liveDemo: "https://foodism-ce81e.web.app",
    githubRepo: "https://github.com/Saif-Rahman-801/Brand-Shop-Client",
  },
  {
    title: "Hotel Room Booking",
    description:
      "A hotel reservation system allowing users to browse available rooms, select dates, and book accommodations. The application provides information about room amenities, pricing, and availability.",
    liveDemo: "https://the-grand-bonjour.web.app",
    githubRepo: "https://github.com/Saif-Rahman-801/Hotel-Room-Booking-Client",
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init();
    // AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" className="container mx-auto my-10">
      <h2 className="text-4xl font-semibold mb-10 text-center">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="mb-8 md:w-[auto] border-2 rounded-md p-4 border-gray-400">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="mb-4 md:mr-4">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex gap-4">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded-full"
            >
              Live Demo
            </a>
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-4 rounded-full"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
