import DailyCard from "../Card/DailyCard/DailyCard";
import useAllData from "../useAllData/useAllData";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

const LeftSide = () => {
  const [allData, isLoading] = useAllData();

  return (
    <div className="bg-stone-200 dark:bg-slate-700 rounded-2xl px-[8%] py-5">
      <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold text-center mb-[1%]">
        7 Day Forecast
      </p>
      {isLoading && <SkeletonCard number={7}></SkeletonCard>}
      {allData?.days?.slice(0, 7).map((day, idx) => (
        <DailyCard key={idx} day={day} id={idx}></DailyCard>
      ))}
    </div>
  );
};

export default LeftSide;
