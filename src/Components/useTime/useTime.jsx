import { useEffect, useState } from "react";

const useTime = () => {
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch(
      "https://timezone.abstractapi.com/v1/current_time/?api_key=3d594e9f5bcd4f789bfc5b3507d21e6c&location=barisal"
    )
      .then((res) => res.json())
      .then((data) => {
        setTime(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return [time];
};

export default useTime;
