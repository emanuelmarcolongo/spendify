"use client";

import { transactionData } from "../../../lib/types";
import { useState } from "react";
import { BalanceInformation } from "./BalanceInformation";
import { TimeFilter } from "./TimeFilter";
import styles from "@/app/styles";
import { ExpensesGraphic } from "./ExpensesGraphic";
import { useTimeFilter } from "@/app/utils/filters";
import { AddTransactionModal } from "../transactions/(transaction-components)/AddTransaction";
import DashboardNavbar from "./Navbar";

const DashboardComponent = ({ transactions }: transactionData) => {
  const [time, setTime] = useState<string>("month");
  const [showModal, setShowModal] = useState<boolean>(false);

  const timeFilterTransactions = Array.isArray(transactions)
    ? useTimeFilter({ transactions, time })
    : [];

  return (
    <>
      <DashboardNavbar setShowModal={setShowModal} />
      <section
        className={`${styles.paddingX} bg-primary1  lg:max-w-[1280px] mt-[100px] mx-auto`}
      >
        <div className="mx-auto">
          <TimeFilter time={time} setTime={setTime} />
        </div>
        {showModal && <AddTransactionModal setShowModal={setShowModal} />}

        <BalanceInformation
          setShowModal={setShowModal}
          transactions={timeFilterTransactions}
        />
        <ExpensesGraphic transactions={timeFilterTransactions} />
      </section>
    </>
  );
};

export { DashboardComponent };
