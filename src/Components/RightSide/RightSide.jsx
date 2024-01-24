/* eslint-disable no-unsafe-optional-chaining */
import dayjs from "dayjs";
import useAllData from "../useAllData/useAllData";
import useTime from "../useTime/useTime";
import { useEffect, useState } from "react";

const RightSide = () => {
  const [allData, isLoading] = useAllData();
  const [rain, setRain] = useState();
  const [time] = useTime();

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

  console.log(
    conditions,
    feelsLike,
    icon,
    humidity,
    temp,
    sunrise,
    sunset,
    uvindex,
    visibility,
    windspeed,
    precip,
    precipprob,
    rain
  );

  // getting address
  const address = allData?.address;
  const newAddress = address?.charAt(0)?.toUpperCase() + address?.slice(1);
  const country = allData?.resolvedAddress?.split(" ")[1];
  const currentAddress = newAddress + ", " + country;

  return (
    <div className="">
      <div className="pl-[5%] pb-[5%] pt-[2%] pr-[8%] flex justify-between items-center">
        <div className="flex flex-col gap-y-10">
          <div className="">
            <p className="text-slate-700 dark:text-gray-200 font-bold text-3xl">
              {currentAddress}
            </p>
            <p className="text-gray-600">{formattedDate}</p>
          </div>
          <div className="">
            <div className="">
              <p className="text-slate-700 dark:text-gray-200 text-7xl font-bold">
                {isLoading ? "..." : Math.round(temp)}&deg;c
              </p>
              <p className="text-slate-600 dark:text-gray-300 ml-3">
                Chance of rain: {rain}
              </p>
            </div>
            <div className=""></div>
          </div>
        </div>

        {/* for image  */}
        <div className="">
          <img src={`${icon}.png`} alt="" className="h-[150px]" />
        </div>
      </div>
      <div className="bg-stone-200 dark:bg-slate-700 rounded-md">2nd</div>
      <div className="bg-stone-200 dark:bg-slate-700 rounded-md">hourly</div>
    </div>
  );
};

export default RightSide;
