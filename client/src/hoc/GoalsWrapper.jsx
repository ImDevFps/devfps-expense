import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { milionForamt, moneyFormat } from "../reusableFunc";
import { createStructuredSelector } from "reselect";
import { selectGoals } from "../redux/goals/goals.selector";
import { connect, useDispatch } from "react-redux";
import { updateGoals } from "./../redux/goals/goals.actions";

const GoalsWrapper = ({ WrappedComponent, idx, goals, ...props }) => {
  const {
    id,
    title,
    percent,
    color,
    amount,
    total,
    onEdit,
    edit,
    setEdit,
    goalsIcons,
    setGoalsIcons,
  } = props;

  const [value, setValue] = useState(amount);

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (value !== 0) {
      const newGoal = goalsIcons.map((item) =>
        item.id === edit
          ? {
              ...item,
              percent: ((total / value) * 100).toFixed(1),
              amount: value,
            }
          : item
      );
      setGoalsIcons(newGoal);
    }

    dispatch(updateGoals({ id, amount: parseInt(value) }));
    setEdit(undefined);
  };

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='font-normal text-base text-gray-200 flex gap-2 w-4/5'>
        <div className='flex justify-center items-center'>
          <CircularProgress
            className='text-gray-600'
            variant='determinate'
            size={55}
            color='inherit'
            value={100}
            thickness={2}
          />
          <CircularProgress
            className={`absolute text${color}`}
            variant='determinate'
            size={55}
            color='inherit'
            value={percent === "0.00" || percent === 0 ? 100 : Math.floor(percent)}
            thickness={2}
          />
          <span className='absolute'>
            <WrappedComponent />
          </span>
        </div>
        <div className='flex flex-col gap-2 flex-1' onClick={onEdit}>
          <span className='text-lg'>{title}</span>
          {id !== edit && (
            <span className='text-sm'>
              هدف : T{" "}
              {milionForamt(amount) ? amount / 1000000 + "M" : moneyFormat(amount)}
            </span>
          )}

          {id === edit && (
            <form className='h-5 relative' onSubmit={submitHandler}>
              <input
                className={`text-slate-800 bg-gray-200 rounded-xl border-0 focus:border-0 focus:ring-offset-2 focus:ring-offset-mainColor focus:ring${color} focus:ring-2 w-full`}
                type='number'
                value={value}
                onChange={handleChange}
                placeholder='مقدار'
              />
              <button
                className={`absolute overflow-hidden text-slate-800 left-1 top-0.5 rounded-lg  bg${color} p-1.5`}>
                ارسال
              </button>
            </form>
          )}
        </div>
      </div>
      <div
        className={`font-normal text-base ${
          percent <= 100 ? "text-gray-200" : "text-red-400"
        }`}>
        {percent}%
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  goals: selectGoals,
});

export default connect(mapStateToProps)(GoalsWrapper);
