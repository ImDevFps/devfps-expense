import React from "react";
import { milionForamt, moneyFormat } from "../../reusableFunc";
import { expenseCompute } from "./../../reusableFunc";

const FilteredTransactions = ({ filterd, info }) => {
  return (
    <div className='flex w-full p-4 flex-col gap-5 justify-center mb-6'>
      <div className='flex w-full mb-2 justify-between'>
        <span className={`${info.color} font-semibold`}>{info.name}</span>
        <span className={`${info.color} font-semibold`}>{filterd.length}</span>
      </div>
      {filterd.map((transaction) => {
        const { id, desc, amount } = transaction;
        return (
          <div
            key={id}
            className='flex w-full justify-between text-slate-200 font-normal text-base'>
            <span>{desc}</span>
            <span>
              T{" "}
              {milionForamt(parseInt(amount))
                ? parseInt(amount) / 1000000 + "M"
                : moneyFormat(parseInt(amount))}
              -
            </span>
          </div>
        );
      })}
      <div className='flex w-full justify-between mt-2 text-amber-600'>
        <span>جمع</span>
        <span>T {expenseCompute(filterd)}-</span>
      </div>
    </div>
  );
};

export default FilteredTransactions;
