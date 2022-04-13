import React from "react";

const OnlinePayments = () => {
  return (
    <div className='w-10 h-10 bg-fuchsia-400 rounded-full flex items-center justify-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z' />
        <path
          fillRule='evenodd'
          d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
};

export default OnlinePayments;
