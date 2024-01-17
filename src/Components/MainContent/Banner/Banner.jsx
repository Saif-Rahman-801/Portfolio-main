import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import profile from "../../../assets/saif-removebg-preview.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../../assets/Saif'sResume_3.pdf";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
      {/* Info div */}
      <div>
        <div>
          <div>
            <p className="text-grey-200 text-[20px] font-medium my-2">
              {" "}
              Hello, I am{" "}
            </p>{" "}
            <h2>
              <TypeAnimation
                sequence={[
                  "",
                  500,
                  "Saif",
                  500,
                  "Saif Rahman", //  Continuing previous Text
                ]}
                style={{ fontSize: "2em" }}
                cursor={false}
                // repeat={Infinity}
              />
            </h2>
            <h2>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Frontend developer",  //  Continuing previous Text
                  1000,
                  "MERN stack developer", //  Continuing previous Text
                  //  Continuing previous Text
                ]}
                // style={{ fontSize: "2em" }}
                className="text-[20px] md:text-[32px] "
                // repeat={Infinity}
              />
            </h2>
          </div>

          <div className="my-3 flex items-center gap-2">
            <a download="Saif'sResume_3.pdf" href={resume}>
              <button className="pr-3 border-r-[1px] border-black font-medium my-2 flex items-center gap-2">
                Download resume{" "} 
                <span className="font-medium text-lg">
                  <MdOutlineFileDownload />
                </span>
                or <Link to={`https://drive.google.com/file/d/12h_Vm0oVcMgOpZZQKWNvUXueEOZ59Ft-/view?usp=sharing`}>Click here</Link>
              </button>
            </a>

            <a href="" className="">
              <button className="pr-3 font-medium my-2 flex items-center gap-2">
                Contact me
                <span className="font-medium text-lg">
                  <IoMdContact />
                </span>
              </button>
            </a>
          </div>
          <div>
            <div className="mt-6 flex items-center">
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
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <FaLinkedin className="text-2xl ml-4" />
              </a>
              <p className="mx-3">
                Email: saifurs102@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Image div */}
      <div>
        <div className="">
          <img
            src={profile}
            alt="profile"
            className=" w-auto h-auto md:h-[500px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
