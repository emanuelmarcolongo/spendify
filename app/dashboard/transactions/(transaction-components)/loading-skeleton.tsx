import styles from "@/app/styles";
import { TimeFilterLoadingSkeleton } from "../../(dashboard-components)/LoadingSkeleton";
import DashboardNavbar from "../../(dashboard-components)/Navbar";

export default function TransactionsLoadingSkeleton() {
  return (
    <>
      <DashboardNavbar />
      <div className="bg-primary1 bg-opacity-30 py-20 lg:max-w-[1280px] mx-auto">
        <div className="flex flex-col w-full  rounded-xl p-10">
          <div className="justify-between  w-full flex">
            <h1 className="font-bold text-xl bg-gray-300 animate-pulse rounded-xl mb-2 h-7 w-[200px] "></h1>
            <h1 className="font-bold text-xl bg-gray-300 animate-pulse rounded-xl mb-2 h-7 w-[200px] "></h1>
          </div>

          <TimeFilterLoadingSkeleton></TimeFilterLoadingSkeleton>
          <div
            className={`${styles.loadingSkeleton} w-full mx-auto rounded-xl h-[800px]`}
          ></div>
        </div>
      </div>
    </>
  );
}
