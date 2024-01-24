import useAllData from "./Components/useAllData/useAllData";

const App = () => {
  const [allData, isLoading] = useAllData();

  console.log(allData);
  console.log(isLoading);
  return <div></div>;
};

export default App;
