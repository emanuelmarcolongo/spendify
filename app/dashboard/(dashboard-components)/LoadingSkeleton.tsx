import DashboardNavbar from "./Navbar";

const DashboardLoadingSkeleton = () => {
  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      <div className="bg-[#E2E2E4] bg-opacity-30 lg:max-w-[1280px] mx-auto">
        <div className="space-y-10 p-10 bg-white my-10 rounded-xl">
          <TimeFilterLoadingSkeleton />

          <div className="space-y-10">
            <UserInfoLoadingSkeleton />
          </div>
        </div>
      </div>
    </>
  );
};

export function TimeFilterLoadingSkeleton() {
  return (
    <div className="lg:w-[50%] mx-auto">
      <div className="flex max-w-full justify-between space-x-5 font-bold py-10">
        <button className="rounded-lg p-1 w-15 bg-gray-300 animate-pulse text-transparent">
          Todas
        </button>

        <button className="rounded-lg p-1 w-15 bg-gray-300 animate-pulse text-transparent">
          Esse ano
        </button>

        <button className="rounded-lg p-1 w-15 bg-gray-300 animate-pulse text-transparent">
          Ultimos 3 meses
        </button>

        <button className="rounded-lg p-1 w-15 bg-gray-300 animate-pulse text-transparent">
          Esse mês
        </button>

        <button className="rounded-lg p-1 w-15 bg-gray-300 animate-pulse text-transparent">
          Essa semana
        </button>
      </div>
    </div>
  );
}

const UserInfoLoadingSkeleton = () => {
  return (
    <div className="flex mx-auto space-y-2 gap-10 flex-col justify-center items-center lg:w-[50%]">
      <div className="rounded-xl w-full h-[150px] flex flex-col items-center justify-center p-10 space-y-2 bg-gray-300 animate-pulse text-transparent  font-extrabold text-lg"></div>

      <div className="flex items-center w-full justify-around h-[150px] gap-10 ">
        <div className="rounded-xl w-full flex flex-col h-[150px] p-10 space-y-2 bg-gray-300 animate-pulse text-transparent   font-extrabold text-lg"></div>

        <div className="rounded-xl w-full h-[150px] flex flex-col p-10 space-y-2  bg-gray-300 animate-pulse text-transparent   font-extrabold text-lg"></div>
      </div>

      <div className="flex justify-between w-full">
        <p className="text-xl font-bold bg-gray-300 w-1/4 h-7 animate-pulse text-transparent "></p>

        <p className="bg-gray-300 animate-pulse w-1/4 h-7 text-transparent text-xl font-bold hover:underline"></p>
      </div>
      <div className="max-h-[350px] w-full space-y-1.5 rounded-xl">
        <div className="max-h-[300px] rounded-xl overflow-hidden space-y-1">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-300 animate-pulse w-full h-14"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLoadingSkeleton;
