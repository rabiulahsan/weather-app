import LeftSide from "./Components/LeftSide/LeftSide";
import Navbar from "./Components/Navbar/Navbar";
import RightSide from "./Components/RightSide/RightSide";

const App = () => {
  return (
    <div className="bg-sky-50 dark:bg-slate-900  px-[8%]">
      <Navbar></Navbar>
      <div className=" flex gap-x-[2%] mt-[1%] pb-[4%]">
        <div className="w-[35%] ">
          <LeftSide></LeftSide>
        </div>
        <div className="w-[65%]">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default App;
