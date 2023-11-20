import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { IoLogoPinterest } from "react-icons/io";

const Footer = () => {
  return (
    <div className="p-3 mb-[8rem] md:mb-0 bg-gradient-to-r from-cyan-500 to-cyan-200 w-full rounded-t-lg md:bottom-0">
      <div className="grid md:grid-cols-2 gap-5 p-5">
        <div>
          <h2 className="text-white text-xl font-bold">Latin RegiApp</h2>
          <div className="grid grid-cols-2 gap-2 p-2">
            <div className="grid grid-rows-2 gap-1/2 text-white text-md">
              <a href={"/"}>Careers</a>
              <a href={"/"}>Our Team</a>
              <a href={"/"}>LR News</a>
              <a href={"/"}>Departments</a>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-white text-lg font-bold">
              Get the freshest Latin RegiApp news!!!
            </p>
            <div className="flex flex-col text-white mb-2 w-[15rem] p-3">
              <input type="text" placeholder="Your email here!" />
              <div>
                <input type="checkbox" className="text-md"/>
                <span className="text-sm">accept terms and conditions</span>
              </div>
            </div>
            <button className="text-white text-md rounded-full bg-cyan-400 hover:bg-cyan-600 w-[10rem] mb-2">Subscribe</button>
          </div>
          <hr />
          <div>
            <h2 className="text-white text-xl font-bold mb-2">Follow us</h2>
            <div className="grid grid-cols-5 gap-1">
              <AiOutlineFacebook size={30} color="white" />
              <AiOutlineInstagram size={30} color="white" />
              <RxTwitterLogo size={30} color="white" />
              <IoLogoPinterest size={30} color="white" />
              <AiOutlineYoutube size={30} color="white" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center text-white text-md mt-2">
        policy and terms
      </div>
    </div>
  );
};

export default Footer;
