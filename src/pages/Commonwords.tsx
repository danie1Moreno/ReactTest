import { Outlet, useNavigate, Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { handleInput } from "../Redux/Features/commonwords/searchSlice";
import { inputText } from "../helpers/inputs";

const Commonwords = () => {
  const navigate = useNavigate();
  const { inputSearch } = useAppSelector((state) => state.searchSlice);
  const dispatch = useAppDispatch();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const val = inputText(e.target.value);
      if (val) {
        dispatch(handleInput(e.target.value));
      }
    } catch (error) {
      //cachar error
    }
  };
  return (
    <div className="h-full ">
      <div>
        <div className="grid justify-center h-full ">
          <p className="font-bold text-blue-500 text-xl">
            5000 Common English Words{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 m-5">
          <div className="flex justify-center items-center">
            <Link
              to={"/5000CommonWords/newword"}
              className="p-3 w-[50%] bg-blue-400 text-center rounded-lg "
            >
              add New word
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <label className="grid justify-center">
              <p className="flex justify-center mb-2">Search Storage Word</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Write a word..."
                  onChange={handleSearch}
                  value={inputSearch}
                />
                <button
                  className="flex ml-[1rem] bg-slate-400 p-1 rounded-md"
                  onClick={() => {
                    console.log("first");
                    navigate("/5000CommonWords/search");
                  }}
                >
                  <i>
                    <FcSearch size={25} />
                  </i>{"search"}   
                </button>
              </div>
            </label>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to={"/5000CommonWords/list"}
              className="p-3 w-[50%] bg-green-400 text-center rounded-lg "
            >
              word list
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Commonwords;
