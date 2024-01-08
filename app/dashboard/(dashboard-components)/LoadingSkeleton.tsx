import { timefilters } from "@/app/constants";
import DashboardNavbar from "./Navbar";
import styles from "@/app/styles";

const DashboardLoadingSkeleton = () => {
  return (
    <>
      <div
        className={`bg-primary1  lg:max-w-[1280px] mt-[100px] mx-auto ${styles.paddingX}`}
      >
        <TimeFilterLoadingSkeleton />

        <div className="space-y-10">
          <UserInfoLoadingSkeleton />
        </div>
        <div className="text-white mt-60">
          <div className={`flex justify-between`}>
            <p className={`${styles.loadingSkeleton} rounded-xl`}>
              Ultimas transações
            </p>
            <p className={`${styles.loadingSkeleton} rounded-xl`}> Ver todas</p>
          </div>
          <div
            className={`h-[300px] mt-10 ${styles.loadingSkeleton} rounded-xl`}
          ></div>
        </div>
      </div>
    </>
  );
};

export function TimeFilterLoadingSkeleton() {
  return (
    <div
      className={`flex max-w-full justify-between space-x-5 font-bold py-10 text-sm md:text-base overflow-hidden`}
    >
      {timefilters.map((filter, idx) => (
        <button
          className={`
          rounded-lg p-1 w-15
          ${styles.loadingSkeleton} 
          min-w-[60px]
            `}
        >
          {filter.innerText}
        </button>
      ))}
    </div>
  );
}

const UserInfoLoadingSkeleton = () => {
  return (
    <>
      <div className="flex font-bold text-sm md:text-base">
        <div className="flex w-full md:space-x-16 space-x-6 ">
          <div className={`${styles.loadingSkeleton}  rounded-xl`}>
            <p>Saldo:</p>
            <p>R$ </p>
          </div>

          <div className={`${styles.loadingSkeleton}  rounded-xl`}>
            <p>Entradas:</p>
            <p className="text-transparent"> R$ </p>
          </div>

          <div className={`${styles.loadingSkeleton}  rounded-xl`}>
            <p>Saída:</p>
            <p>R$ </p>
          </div>
        </div>
        <p className={`${styles.loadingSkeleton}  rounded-xl`}>Ver Extrato</p>
      </div>
      <button className={`${styles.loadingSkeleton}  rounded-xl`}>
        Adicionar Transação
      </button>
    </>
  );
};

export default DashboardLoadingSkeleton;
