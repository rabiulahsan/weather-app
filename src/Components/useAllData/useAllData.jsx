import { useEffect, useState } from "react";

const useAllData = ({ searchValue }) => {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?unitGroup=metric&key=M2X9M4E6C9M46XCT7B36GSQPJ&contentType=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchValue]);

  return [allData, isLoading];
};

export default useAllData;
