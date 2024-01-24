import dayjs from "dayjs";

/* eslint-disable react/prop-types */
const DailyCard = ({ day }) => {
  const { conditions, datetime, tempmax, tempmin } = day;

  const date = dayjs(datetime).format("ddd");

  return (
    <div className="border-b-[.4px] border-b-gray-400 dark:border-b-slate-500 flex justify-between items-center py-6">
      <p className="text-gray-600 dark:text-gray-300 text-xs">{date}</p>
      <p className="text-gray-800 dark:text-white font-semibold text-sm">
        {conditions}
      </p>
      <p
        className="text-gray-700 dark:text-gray-300 text-xs font-semibold"
        title="maximum and minimum temp in C"
      >
        {tempmax} / {tempmin}
      </p>
    </div>
  );
};

export default DailyCard;
