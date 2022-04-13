import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { initiateApp } from "./../../redux/start/start.actions";

const Starter = ({ initiateApp }) => {
  return (
    <div className='w-4/5 h-screen flex flex-col items-center justify-evenly gap-3 pb-28'>
      <img
        src='./imgs/starter.svg'
        className='mt-40 bg-orange-400 p-2 rounded-lg'
        alt=''
      />
      <div className='flex flex-col text-white font-medium text-lg space-y-2'>
        <span>این نرم افزار به منظور یادداشت دریافتی ها و مخارج ساخته شده است.</span>
        <span>
          شما میتوانید با استفاده از مرورگر chrome این اپلیکیشن را نصب کرده و از قابلیت
          های آن استفاده کنید
        </span>
      </div>
      <Link
        onClick={initiateApp}
        to='/login'
        className='bg-secondaryColor text-white w-full p-3 rounded-xl text-center'>
        شروع کنید
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  initiateApp: () => dispatch(initiateApp()),
});

export default connect(null, mapDispatchToProps)(Starter);
