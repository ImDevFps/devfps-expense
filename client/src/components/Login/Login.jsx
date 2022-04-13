import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "./../../redux/start/start.actions";

const Login = ({ setUser }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    gender: "male",
  });

  const changeHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUser(userInput);
  };

  return (
    <div className='w-4/5 flex flex-col justify-start gap-5 h-screen text-white text-xl pb-14'>
      <img src='./imgs/login.svg' alt='' className='my-20' />
      <div className='flex flex-col '>
        <span className='text-2xl'>سلام!</span>
        <span>برای شروع لطفا نام خود را وارد نمایید</span>
      </div>
      <form
        className='flex flex-col flex-1 gap-3 justify-between'
        onSubmit={submitHandler}
        autoComplete='off'>
        <input
          className='bg-gray-800 border border-gray-600 p-2 rounded-xl'
          type='text'
          name='name'
          onChange={changeHandler}
          value={userInput.name}
          placeholder='نام به فارسی'
          required
        />
        <select
          className='form-select bg-white form-select-sm text-sm font-normal text-gray-700 bg-transparent bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:outline-none'
          name='gender'
          onChange={changeHandler}
          value={userInput.gender}>
          <option value='male'>پسر</option>
          <option value='female'>دختر</option>
        </select>
        <button className='bg-secondaryColor p-3 rounded-xl mb-10'>ورود</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (userInput) => dispatch(setUser(userInput)),
});

export default connect(null, mapDispatchToProps)(Login);
