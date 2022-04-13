import React from "react";
import { Link } from "react-router-dom";
import { wallet, expenseCompute, incomeCompute } from "./../../reusableFunc";

const Balance = ({ transactions, allTrans }) => {
  const balance = wallet(transactions);
  const expense = expenseCompute(transactions);
  const income = incomeCompute(transactions);

  return (
    <div>
      <Link to='/transactions'>
        <div className='w-full p-4 relative mt-32 mb-24'>
          <div className='absolute top-1/2 left-[58%] transform -translate-x-1/2 -translate-y-1/2 w-9/12 h-40 bg-gradient-to-r from-thirdColor to-secondaryColor origin-top-right rotate-7 rounded-2xl'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 h-40 backdrop-blur bg-white/20 rounded-2xl'></div>
          <div className='absolute z-10 top-1/2 right-8 transform -translate-y-1/2 w-[87%]'>
            <div className='flex justify-between items-center mb-4 w-full'>
              <div className='flex flex-col gap-2 w-5/12'>
                <span className='font-light'>موجودی ماه</span>
                <span className='font-semibold text-xl'>T {balance}+</span>
              </div>
              <div className='flex flex-col gap-2 w-7/12'>
                <span className='font-light'>کیف پول</span>
                <span className='font-medium text-xl'>T {wallet(allTrans)}+</span>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-2 w-5/12'>
                <span className='font-light'>مخارج</span>
                <span className='font-medium text-lg'>T {expense}-</span>
              </div>
              <div className='flex flex-col gap-2 w-7/12'>
                <span className='font-light'>واریزی</span>
                <span className='font-medium text-lg'>T {income}+</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Balance;
