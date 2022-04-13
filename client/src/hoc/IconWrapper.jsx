import React from "react";
import { milionForamt, moneyFormat } from "../reusableFunc";

const IconWrapper = ({ WrappedComponent, ...props }) => {
  const { title, transCount, amount, sign } = props;
  return (
    <div className='flex justify-between w-full'>
      <div className='flex items-center gap-3'>
        <WrappedComponent />
        <div className='flex flex-col gap-1'>
          <span>{title}</span>
          <span className='text-xs text-gray-400'>{transCount} تراکنش</span>
        </div>
      </div>
      <div className='font-normal text-gray-200'>
        T{" "}
        {milionForamt(parseInt(amount))
          ? parseInt(amount) / 1000000 + "M"
          : moneyFormat(parseInt(amount))}
        {sign}
      </div>
    </div>
  );
};

export default IconWrapper;
