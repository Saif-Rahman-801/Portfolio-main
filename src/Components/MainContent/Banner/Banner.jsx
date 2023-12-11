import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import profile from "../../../assets/saif-removebg-preview.png";
import JS from "../../../assets/js.png";
import react from "../../../assets/atom.png";
import nodeJS from "../../../assets/nodejs.png";
import expressJs from "../../../assets/icons8-express-js-50.png";
import mongoDb from "../../../assets/icons8-mongo-db-64.png";
const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      {/* Info div */}
      <div>
        <div>
          <div>
            <p className="text-grey-200 text-[20px] font-medium my-2">
              {" "}
              Hello, I am{" "}
            </p>{" "}
            <h3 className="font-semibold text-[30px] my-2">Saif Rahman</h3>
            <p className="text-gray-600 text-3xl font-medium my-2">
              MERN stack developer
            </p>
          </div>
          
          <div className="my-3">
            <button className="pr-3 border-r-[1px] border-black font-medium my-2">
              <a href="" className="flex items-center gap-2">
                Download resume{" "}
                <span className="font-medium text-lg">
                  <MdOutlineFileDownload />
                </span>
              </a>
            </button>
            <button className="pl-3 rounded-md border-1 border-black font-medium my-2">
              <a href="" className="flex items-center gap-2">
                Contact me
                <span className="font-medium text-lg">
                  <IoMdContact />
                </span>
              </a>
            </button>
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
