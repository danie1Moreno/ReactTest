import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, NewWord, SearchWord, WordList } from "./components";
import Commonwords from "./pages/Commonwords";
import Home from "./pages/Home";
import Nomatch404 from "./pages/Nomatch404";

function App() {
  return (
    <div className="grid grid-cols-[auto_minmax(0,_1fr)_0] md:grid-cols-[4rem_minmax(0,_1fr)_0]">
      {/* <div className="flex "> */}
      <div className="">
        {/* <div className="w-0 md:w-[4rem] container"> */}
        <header>
          <Navbar />
        </header>
      </div>
      <div className="flex flex-col w-full h-screen justify-between">
        <main className=" text-white w-full">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/5000CommonWords" element={<Commonwords />}>
              <Route index path="list" element={<WordList />} />
              <Route path="newword" element={<NewWord />} />
              <Route path="search" element={<SearchWord />} />
            </Route>

            <Route path="*" element={<Nomatch404 />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
