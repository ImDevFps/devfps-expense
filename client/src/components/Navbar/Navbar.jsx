import React, { useState } from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className='fixed z-10 right-0 bottom-0 h-14 flex w-full text-white justify-between bg-secondaryColor items-center'>
      <Link to='/'>
        <div
          className='flex gap-2 py-2 px-4 items-center cursor-pointer flex-auto'
          onClick={() => setActive(1)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
          </svg>
          {active === 1 && <span className='text-xs font-medium'>خانه</span>}
        </div>
      </Link>
      <Link to='/transactions'>
        <div
          className='flex gap-2 py-2 px-4 items-center cursor-pointer flex-auto'
          onClick={() => setActive(2)}>
          <FaFileInvoiceDollar className='w-7 h-7' />
          {active === 2 && <span className='text-xs font-medium'>تراکنش ها</span>}
        </div>
      </Link>
      <Link to='/add-transaction'>
        <div
          className='flex py-2 px-4 gap-2 items-center cursor-pointer flex-auto'
          onClick={() => setActive(3)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7 bg-orange-400 rounded-full'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
              clipRule='evenodd'
            />
          </svg>
          {active === 3 && <span className='text-xs font-medium'>اضافه کردن</span>}
        </div>
      </Link>
      <Link to='/archive'>
        <div
          className='flex py-2 px-4 gap-2 items-center cursor-pointer flex-auto'
          onClick={() => setActive(5)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path d='M4 3a2 2 0 100 4h12a2 2 0 100-4H4z' />
            <path
              fillRule='evenodd'
              d='M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
          {active === 5 && <span className='text-xs font-medium'>همه تراکنش ها</span>}
        </div>
      </Link>
      <Link to='/about-us'>
        <div
          className='flex py-2 px-4 gap-2 items-center cursor-pointer flex-auto'
          onClick={() => setActive(4)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            />
          </svg>
          {active === 4 && <span className='text-xs font-medium'>درباره ما</span>}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
