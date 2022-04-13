import React, { useState, useEffect } from "react";
import { calendar, milionForamt, wallet } from "../../reusableFunc";
import { moneyFormat } from "./../../reusableFunc";

const Archive = ({ transactions }) => {
  const [select, setSelect] = useState(calendar().id);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filteredTransaction = (select) => {
      setFiltered(transactions.filter((item) => item.date.id === select));
    };
    filteredTransaction(select);
  }, [select, transactions]);

  const handleChange = (e) => {
    setSelect(parseInt(e.target.value));
  };

  const months = transactions.map((item) => item.date.name);
  const options = [...new Set(months)];

  return (
    <div className='flex flex-col w-full h-screen pb-14 justify-evenly items-center gap-3 p-4'>
      <div className='w-3/5 flex flex-col gap-5'>
        <span className='text-white'>ماه مورد نظر انتخاب نمایید</span>
        <select className='form-select rounded-lg' value={select} onChange={handleChange}>
          {options.map((item, idx) => {
            return (
              <option key={idx} value={idx + 1}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className='flex flex-col justify-between w-full gap-2'>
        {filtered.map((item) => {
          const { desc, amount } = item;
          return (
            <div key={item.id} className='flex justify-between w-full text-white'>
              <div className=''>{desc}</div>
              <div>
                T{" "}
                {milionForamt(parseInt(amount))
                  ? parseInt(amount) / 1000000 + "M"
                  : moneyFormat(parseInt(amount))}
                {item.type === 1 ? "-" : "+"}
              </div>
            </div>
          );
        })}
        <div className='flex w-full justify-between mt-5 text-amber-600'>
          <span>جمع</span>
          <span>T {wallet(filtered)}+</span>
        </div>
      </div>
    </div>
  );
};

export default Archive;
