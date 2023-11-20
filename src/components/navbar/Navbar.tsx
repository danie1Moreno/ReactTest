import map from "../../assets/Latin_America.svg";
import {
  AiOutlineUser,
  AiOutlineSchedule,
  AiOutlineFolderOpen,
  AiOutlineMessage,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import {useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { buttonNavSel } from "../../Redux/Features/navbarSlice";

const Navbar = () => {
  const { homeSel, link1Sel, link2Sel, link3Sel, link4Sel, link5Sel } =
    useAppSelector((state) => state.navbarSlice);
  const dispatch = useAppDispatch();
  const navigate= useNavigate()
  return (
    <nav>
      {/* <button className="bg-cyan-300 rounded-lg" onClick={()=>{}}><AiOutlineArrowUp size={25} color="white" /></button> */}
      <div
        className={`bg-cyan-500 md:py-3 fixed grid grid-cols-4 gap-4 md:block z-50 h-32 hover:h-[260px] md:min-h-screen bottom-0 md:top-0 left-0 right-0 w-full md:w-16 md:hover:w-56 ease-in duration-500 border-t shadow rounded-r-lg`}
      >
        <div
          className={`order-first flex flex-col items-center justify-center mb-5 pb-3 hover:bg-slate-400 group ${
            homeSel.select && "bg-slate-300"
          }`}
        >
          <button
            className="flex flex-col items-center justify-center pt-3 w-full"
            onClick={() => {
              dispatch(buttonNavSel("homeSel"));
              navigate('/home')
              console.log("entra");
            }}
          >
            <img src={map} width={50} height={50} alt="home" />
            <span className="text-sm md:text-xl text-white md:hidden md:group-hover:block">
              Home
            </span>
          </button>
        </div>
        <div
          className={`${
            link1Sel.order
          } flex flex-col items-center justify-center mb-5 pb-3 hover:bg-slate-400 group ${
            link1Sel.select && "bg-slate-300"
          }`}
        >
          <button
            className="flex flex-col items-center justify-center pt-3 w-full"
            onClick={() => {
              dispatch(buttonNavSel("link1Sel"));
              navigate('/5000commonwords')
              console.log("first link");
            }}
          >
            <AiOutlineUser size={40} color="white" />
            <span className="text-sm md:text-xl text-white md:hidden md:group-hover:block">
              5000 Common Words
            </span>
          </button>
        </div>
        <div
          className={`${
            link2Sel.order
          } flex flex-col items-center justify-center mb-5 pb-3 hover:bg-slate-400 group ${
            link2Sel.select && "bg-slate-300"
          }`}
        >
          <button
            className="flex flex-col items-center justify-center pt-3w-full"
            onClick={() => {
              dispatch(buttonNavSel("link2Sel"));
              console.log("second link");
            }}
          >
            <AiOutlineSchedule size={40} color="white" />
            <span className="text-sm md:text-xl text-white md:hidden md:group-hover:block">
              Second link
            </span>
          </button>
        </div>
        <div
          className={`${
            link3Sel.order
          } flex flex-col items-center justify-center mb-5 pb-3 hover:bg-slate-400 group ${
            link3Sel.select && "bg-slate-300"
          }`}
        >
          <button
            className="flex flex-col items-center justify-center pt-3 w-full"
            onClick={() => {
              dispatch(buttonNavSel("link3Sel"));
              console.log("third link");
            }}
          >
            <AiOutlineFolderOpen size={40} color="white" />
            <span className="text-sm md:text-xl text-white md:hidden md:group-hover:block">
              Third link
            </span>
          </button>
        </div>
        <div
          className={`${
            link4Sel.order
          } flex flex-col items-center justify-center mb-5 pb-3 hover:bg-slate-400 group ${
            link4Sel.select && "bg-slate-300"
          }`}
        >
          <button
            className="flex flex-col items-center justify-center pt-3 w-full"
            onClick={() => {
              dispatch(buttonNavSel("link4Sel"));
              console.log("fourth link");
            }}
          >
            <AiOutlineMessage size={40} color="white" />
            <span className="text-sm md:text-xl text-white md:hidden md:group-hover:block">
              Fourth link
            </span>
          </button>
        </div>
        <div
          className={`${
            link5Sel.order
          } flex flex-col items-center justify-center mb-5 pb-3 hover:bg-slate-400 group ${
            link5Sel.select && "bg-slate-300"
          }`}
        >
          <button
            className="flex flex-col items-center justify-center pt-3 w-full"
            onClick={() => {
              dispatch(buttonNavSel("link5Sel"));
              console.log("fifth link");
            }}
          >
            <AiOutlineMail size={40} color="white" />
            <span className="text-sm md:text-xl text-white md:hidden md:group-hover:block">
              Fifth link
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
