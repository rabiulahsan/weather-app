import Navbar from "./Components/Navbar/Navbar";
import useAllData from "./Components/useAllData/useAllData";

const App = () => {
  const [allData, isLoading] = useAllData();

  console.log(isLoading);
  console.log(allData);

  return (
    <div className="bg-sky-50 dark:bg-slate-900 h-screen px-[8%]">
      <Navbar></Navbar>
    </div>
  );
};

export default App;
