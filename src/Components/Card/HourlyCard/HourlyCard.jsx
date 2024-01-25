import dayjs from "dayjs";

/* eslint-disable react/prop-types */
const HourlyCard = ({ hour, id }) => {
  const { datetime, icon, temp } = hour;

  // for formatting sunset and sunrises time
  const fixedDate = "2023-01-01";
  const formattedHourTime = dayjs(`${fixedDate} ${datetime}`).format("h:mm A");

  return (
    <div
      className={`flex flex-col gap-y-4  items-center px-[4%]${
        id === 5 ? "" : " border-r border-r-gray-400 dark:border-r-slate-500"
      }`}
    >
      <p className="text-slate-600 dark:text-gray-400 font-semibold text-sm">
        {formattedHourTime}
      </p>
      <img src={`${icon}.png`} alt="" className="w-[40px]" />
      <p className="text-2xl font-bold text-slate-600 dark:text-gray-300">
        {temp}&deg;
      </p>
    </div>
  );
};

export default HourlyCard;
