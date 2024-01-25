/* eslint-disable no-unsafe-optional-chaining */
import dayjs from "dayjs";
import useAllData from "../useAllData/useAllData";
import HourlyCard from "../Card/HourlyCard/HourlyCard";
import useTime from "../useTime/useTime";
import { useEffect, useState } from "react";
import { FaTemperatureHigh, FaWind, FaSun } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { GiSunrise, GiSunset } from "react-icons/gi";

const RightSide = () => {
  const [allData, isLoading] = useAllData();
  const [rain, setRain] = useState();
  const [time] = useTime();

  //getting the daily hours information
  // console.log(allData?.days?.[0]?.hours);
  const hours = allData?.days?.[0]?.hours;
  const selectedIndexes = [6, 9, 12, 15, 18, 21];
  const hoursInfo = hours?.filter((value, index) =>
    selectedIndexes?.includes(index)
  );
  // console.log(hoursInfo);

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
  const sunrise = allData?.currentConditions?.sunrise;
  const sunset = allData?.currentConditions?.sunset;
  const uvindex = allData?.currentConditions?.uvindex;
  const windspeed = allData?.currentConditions?.windspeed;
  const precip = allData?.currentConditions?.precip;
  const precipprob = allData?.currentConditions?.precipprob;

  // for formatting sunset and sunrises time
  const fixedDate = "2023-01-01";
  const formattedSunrise = dayjs(`${fixedDate} ${sunrise}`).format("h:mm A");
  const formattedSunset = dayjs(`${fixedDate} ${sunset}`).format("h:mm A");

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

  // getting address
  const address = allData?.address;
  const newAddress = address?.charAt(0)?.toUpperCase() + address?.slice(1);
  const country = allData?.resolvedAddress?.split(" ")[1];

  return (
    <div className="">
      <div className="pl-[5%] pb-[5%] pt-[2%] pr-[8%] flex justify-between items-center">
        {/* displaying the weather details  */}
        <div className="flex flex-col gap-y-12">
          <div className="">
            <p className="text-slate-700 dark:text-gray-200 font-bold text-3xl">
              {isLoading ? (
                "..."
              ) : (
                <span>
                  {newAddress}
                  {country ? ", " + country : ""}
                </span>
              )}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{formattedDate}</p>
          </div>
          <div className="flex gap-x-5 items-center mb-4">
            <div className="">
              <p className="text-slate-700 dark:text-gray-200 text-7xl font-bold">
                {isLoading ? "..." : Math.round(temp)}&deg;c
              </p>
              <p className="text-slate-600 dark:text-gray-400 ml-4 text-sm">
                Chance of rain: {rain}
              </p>
              <p className="text-slate-600 dark:text-gray-200 text-xl font-semibold mt-3 ml-2">
                {conditions}
              </p>
            </div>
            <div className="">
              <p className="text-slate-600 dark:text-gray-200 flex gap-x-1 items-center  font-semibold">
                <span className="text-lg">
                  <FaWind></FaWind>
                </span>
                <span className="text-slate-600 dark:text-gray-400 font-normal">
                  wind speed{" "}
                </span>
                {windspeed} km/h
              </p>
              <p className="text-slate-600 dark:text-gray-200 flex gap-x-1 items-center mt-4 font-semibold">
                <span className="text-lg">
                  <FaTemperatureHigh></FaTemperatureHigh>
                </span>
                <span className="text-slate-600 dark:text-gray-400 font-normal">
                  Feel like
                </span>{" "}
                {isLoading ? "..." : Math.round(feelsLike)}&deg;c
              </p>
            </div>
          </div>
        </div>

        {/* for image  */}
        <div className="">
          <img src={`${icon}.png`} alt="" className="h-[200px]" />
        </div>
      </div>

      {/* air condition box  */}
      <div className="bg-stone-300 dark:bg-slate-700 rounded-2xl p-[3%]">
        <p className="mb-4 text-slate-600 dark:text-gray-300 font-semibold">
          Air Conditions
        </p>
        <div className="flex justify-around items-center mb-[4%] ml-[7%]">
          <div className="">
            <p className="flex items-center  text-slate-600 dark:text-gray-300">
              <span className="mr-2 text-lg">
                <FaSun></FaSun>
              </span>
              UV index
            </p>
            <p className="ml-7 text-2xl text-slate-700 dark:text-gray-300 font-semibold">
              {uvindex}
            </p>
          </div>
          <div className="">
            <p className="flex items-center  text-slate-600 dark:text-gray-300">
              <span className="mr-2 text-lg">
                <FaDroplet></FaDroplet>
              </span>
              Humidity
            </p>
            <p className="ml-7 text-2xl text-slate-700 dark:text-gray-300 font-semibold">
              {humidity}
            </p>
          </div>
          <div className="">
            <p className="flex items-center  text-slate-600 dark:text-gray-300">
              <span className="mr-2 text-lg">
                <GiSunrise></GiSunrise>
              </span>
              Sunrise
            </p>
            <p className="ml-7 text-2xl text-slate-700 dark:text-gray-300 font-semibold">
              {isLoading ? "..." : formattedSunrise}
            </p>
          </div>
          <div className="">
            <p className="flex items-center  text-slate-600 dark:text-gray-300">
              <span className="mr-2 text-lg">
                <GiSunset></GiSunset>
              </span>
              Sunset
            </p>
            <p className="ml-7 text-2xl text-slate-700 dark:text-gray-300 font-semibold">
              {isLoading ? "..." : formattedSunset}
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>

      {/* todays forecast box  */}
      <div className="bg-stone-300 dark:bg-slate-700 rounded-2xl p-[3%] mt-[4%]">
        <p className="mb-4 text-slate-600 dark:text-gray-300 font-semibold">
          Today&apos;s Forecast
        </p>
        <div className="flex justify-between items-center px-[5%] my-[2%]">
          {hoursInfo?.map((hour, idx) => (
            <HourlyCard key={idx} hour={hour} id={idx}></HourlyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
