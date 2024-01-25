/* eslint-disable react/prop-types */
import DailyCard from "../Card/DailyCard/DailyCard";

import SkeletonCard from "../SkeletonCard/SkeletonCard";

const LeftSide = ({ allData, isLoading }) => {
  return (
    <div className="bg-stone-300 dark:bg-slate-700 rounded-2xl px-[8%] py-5">
      <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold text-center mb-[1%]">
        10 Day Forecast
      </p>
      {isLoading && (
        <div className="mt-5">
          <SkeletonCard number={7}></SkeletonCard>
        </div>
      )}
      {allData?.days?.slice(0, 10).map((day, idx) => (
        <DailyCard key={idx} day={day} id={idx}></DailyCard>
      ))}
    </div>
  );
};

export default LeftSide;
