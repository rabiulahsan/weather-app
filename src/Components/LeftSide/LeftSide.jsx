import DailyCard from "../Card/DailyCard/DailyCard";
import useAllData from "../useAllData/useAllData";

const LeftSide = () => {
  const [allData, isLoading] = useAllData();

  return (
    <div className="bg-stone-200 dark:bg-slate-600 rounded-md px-[8%] py-5">
      <p className="text-gray-300 font-semibold text-center">7 Day Forecast</p>
      {allData?.days?.slice(0, 7).map((day, idx) => (
        <DailyCard key={idx} day={day}></DailyCard>
      ))}
    </div>
  );
};

export default LeftSide;
