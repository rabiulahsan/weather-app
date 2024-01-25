import { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSide/LeftSide";
import Navbar from "./Components/Navbar/Navbar";
import RightSide from "./Components/RightSide/RightSide";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState([]);

  const handleSearch = (value) => {
    setIsLoading(true);
    setSearchValue(value);
  };

  useEffect(() => {
    //fetchdata
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
        searchValue ? searchValue : "barisal"
      }?unitGroup=metric&key=M2X9M4E6C9M46XCT7B36GSQPJ&contentType=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });

    //fetchtime
    fetch(
      `https://timezone.abstractapi.com/v1/current_time/?api_key=3d594e9f5bcd4f789bfc5b3507d21e6c&location=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTime(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchValue]);

  console.log(allData);
  console.log(time);

  return (
    <div className="bg-sky-50 dark:bg-slate-900  px-[8%]">
      <Navbar handleSearch={handleSearch}></Navbar>
      <div className=" flex gap-x-[2%] mt-[1%] pb-[4%]">
        <div className="w-[35%] ">
          <LeftSide
            isLoading={isLoading}
            allData={allData}
            time={time}
          ></LeftSide>
        </div>
        <div className="w-[65%]">
          <RightSide
            isLoading={isLoading}
            allData={allData}
            time={time}
          ></RightSide>
        </div>
      </div>
    </div>
  );
};

export default App;
