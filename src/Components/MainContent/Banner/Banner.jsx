import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
// import TypeAnimation from "react-type-animation";
import profile from "../../../assets/saif-removebg-preview.png";
import JS from "../../../assets/js.png";
import react from "../../../assets/atom.png";
import nodeJS from "../../../assets/nodejs.png";
import expressJs from "../../../assets/icons8-express-js-50.png";
import mongoDb from "../../../assets/icons8-mongo-db-64.png";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const filePath = "/public/resume1.pdf";

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
                  "MERN",
                  1000,
                  "MERN stack developer", //  Continuing previous Text
                ]}
                style={{ fontSize: "2em" }}
                // repeat={Infinity}
              />
            </h2>
          </div>

          <div className="my-3 flex items-center gap-2">
            <a href={filePath} download="resume1.pdf">
              <button className="pr-3 border-r-[1px] border-black font-medium my-2 flex items-center gap-2">
                Download resume{" "}
                <span className="font-medium text-lg">
                  <MdOutlineFileDownload />
                </span>
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
            <div className="flex gap-5 justify-center my-3">
              <img src={JS} alt="" className="w-[30px] h-[30px] rounded-md " />
              <img
                src={react}
                alt=""
                className="w-[30px] h-[30px] rounded-md "
              />
              <img
                src={nodeJS}
                alt=""
                className="w-[30px] h-[30px] rounded-md "
              />
              <img
                src={expressJs}
                alt=""
                className="w-[30px] h-[30px] rounded-md "
              />
              <img
                src={mongoDb}
                alt=""
                className="w-[30px] h-[30px] rounded-md "
              />
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
            className="w-auto h-[500px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
