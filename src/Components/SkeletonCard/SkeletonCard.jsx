/* eslint-disable react/prop-types */
//for skeleton style
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({ number }) => {
  const skeletonElements = [];
  for (let i = 0; i < number; i++) {
    skeletonElements.push(
      <div key={i}>
        <div className="">
          <Skeleton
            count={1}
            style={{ marginBottom: "50px", background: "#94a3b8" }}
          ></Skeleton>
        </div>
      </div>
    );
  }

  return <>{skeletonElements}</>;
};

export default SkeletonCard;
