/* eslint-disable no-unsafe-optional-chaining */
import dayjs from "dayjs";
import useAllData from "../useAllData/useAllData";
import useTime from "../useTime/useTime";
import { useEffect, useState } from "react";

const RightSide = () => {
  const [allData, isLoading] = useAllData();
  const [rain, setRain] = useState();
  const [time] = useTime();

  console.log(allData);

  //formatting the getting data
  const formattedDate = dayjs(time?.datetime).format(
    " h:mma dddd, MMMM D, YYYY "
  );

  //getting all kind of information which is needed
  const conditions = allData?.currentConditions?.conditions;
  const feelsLike = allData?.currentConditions?.feelslike;
  const icon = allData?.currentConditions?.icon;
  const humidity = allData?.currentConditions?.humidity;
  const temp = allData?.currentConditions?.temp;
  const sunrise = allData?.currentConditions?.sunset;
  const sunset = allData?.currentConditions?.sunset;
  const uvindex = allData?.currentConditions?.uvindex;
  const visibility = allData?.currentConditions?.visibility;
  const windspeed = allData?.currentConditions?.windspeed;
  const precip = allData?.currentConditions?.precip;
  const precipprob = allData?.currentConditions?.precipprob;

  // console.log(
  //   conditions,
  //   feelsLike,
  //   icon,
  //   humidity,
  //   temp,
  //   sunrise,
  //   sunset,
  //   uvindex,
  //   visibility,
  //   windspeed,
  //   precip,
  //   precipprob
  // );

  //getting chance of raining

  useEffect(() => {
    function getRainChancePercentage(precip, precipprob) {
      // Ensure that the values are numbers
      precip = parseFloat(precip);
      precipprob = parseFloat(precipprob);

      if (!isNaN(precip) && precip > 0) {
        // If there is actual precipitation, return 100%
        return "100%";
      } else if (!isNaN(precipprob)) {
        // If there's a probability, return the probability as a percentage
        return `${Math.round(precipprob)}%`;
      } else {
        // If there's no precipitation and no probability, return 0%
        return "0%";
      }
    }

    const rainChancePercentage = getRainChancePercentage(precip, precipprob);
    setRain(rainChancePercentage);
  }, [precip, precipprob]);
  console.log(rain);

  // getting address
  const address = allData?.address;
  const newAddress = address?.charAt(0)?.toUpperCase() + address?.slice(1);
  const country = allData?.resolvedAddress?.split(" ")[1];
  const currentAddress = newAddress + ", " + country;

  return (
    <div className="">
      <div className="px-[5%]">{currentAddress}</div>
      <div className="bg-stone-200 dark:bg-slate-700 rounded-md">2nd</div>
      <div className="bg-stone-200 dark:bg-slate-700 rounded-md">hourly</div>
    </div>
  );
};

export default RightSide;
