import { TimeFilterLoadingSkeleton } from "../../(dashboard-components)/loading-skeleton";
import DashboardNavbar from "../../(dashboard-components)/navbar";

export default function TransactionsLoadingSkeleton() {
  return (
    <>
      <DashboardNavbar />
      <div className="bg-[#E2E2E4] bg-opacity-30 py-10 lg:max-w-[1280px] mx-auto">
        <div className="flex flex-col w-full mx-auto bg-white lg:max-w-full rounded-xl p-10">
          <div className="items-center justify-center mx-auto  my-10 w-full lg:w-1/2 lg:flex">
            <h1 className="font-bold text-xl bg-gray-300 animate-pulse rounded-xl mb-2 h-7  lg:w-[50%]"></h1>
            <div className="lg:w-[50%] ">
              <div className="bg-gray-300 animate-pulse rounded-xl h-7"></div>
            </div>
          </div>

          <TimeFilterLoadingSkeleton></TimeFilterLoadingSkeleton>
          <div className="space-y-1 p-2 mb-11 lg:w-1/2 w-full mx-auto rounded-xl">
            {Array.from({ length: 7 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-300 animate-pulse w-full h-14 rounded-xl"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
