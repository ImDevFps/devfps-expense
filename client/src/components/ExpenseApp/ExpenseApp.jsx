import React, { useState, useEffect } from "react";
import Balance from "../Balance/Balance";
import Category from "../Category/Category";
import FilteredTransactions from "../FilteredTransactions/FilteredTransactions";
import Goals from "../Goals/Goals";
import Header from "../Header/Header";

const ExpenseApp = ({ user, transactions, allTrans }) => {
  const [filterd, setFilterd] = useState([]);
  const [category, setCategory] = useState(null);
  const [info, setInfo] = useState("");

  useEffect(() => {
    const filteredTransactions = (category) => {
      switch (category) {
        case "payment":
          setFilterd(
            transactions.filter(
              (transaction) => transaction.category === "online-payment"
            )
          );
          setInfo({
            name: "پرداخت های آنلاین",
            color: "text-fuchsia-400",
          });
          break;
        case "market":
          setFilterd(
            transactions.filter((transaction) => transaction.category === "super-market")
          );
          setInfo({
            name: "سوپر مارکت",
            color: "text-amber-200",
          });
          break;
        case "shop":
          setFilterd(
            transactions.filter(
              (transaction) => transaction.category === "online-shopping"
            )
          );
          setInfo({
            name: "خرید آنلاین",
            color: "text-blue-400",
          });
          break;
        case "food":
          setFilterd(
            transactions.filter((transaction) => transaction.category === "food")
          );
          setInfo({
            name: "خرید غذا",
            color: "text-orange-400",
          });
          break;
        case "baby":
          setFilterd(
            transactions.filter((transaction) => transaction.category === "baby")
          );
          setInfo({
            name: "وسایل کودک",
            color: "text-thirdColor",
          });
          break;
        case "others":
          setFilterd(
            transactions.filter((transaction) => transaction.category === "others")
          );
          setInfo({
            name: "متفرقه",
            color: "text-teal-500",
          });
          break;
        default:
          break;
      }
    };

    filteredTransactions(category);
  }, [category, transactions]);

  return (
    <section className='w-full text-white'>
      <Header user={user} />
      <Category setCategory={setCategory} category={category} />
      <Balance transactions={transactions} allTrans={allTrans} />
      {filterd.length > 0 ? (
        <FilteredTransactions filterd={filterd} info={info} />
      ) : (
        <div className='p-4 flex w-full justify-center items-center font-normal text-orange-600'>
          تراکنشی وجود ندارد
        </div>
      )}
      <Goals transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
