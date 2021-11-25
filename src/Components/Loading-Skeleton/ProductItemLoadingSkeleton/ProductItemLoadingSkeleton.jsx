import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductItemLoadingSkeleton = ({ similar }) => {
  return (
    <SkeletonTheme highlightColor="#9CA3AF" baseColor="#6B7280" borderRadius="0">
      <div className={`shadow rounded-md ${similar && 'w-48 mx-4 flex-shrink-0'}`}>
        <div className={`w-full ${!similar ? 'h-64' : 'h-44'}`}>
          <Skeleton width={`100%`} height={`100%`} />
        </div>
        <div className={`mt-5 p-2 flex justify-between items-center`}>
          <div>
            <Skeleton width={50} height={20} />
          </div>
          <div>
            <Skeleton width={30} height={20} />
          </div>
        </div>
        <div className={`w-full`}>
          <Skeleton width={`100%`} height={30} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductItemLoadingSkeleton;
