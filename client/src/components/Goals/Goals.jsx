import React, { useState } from "react";
import { category } from "../../reusableFunc";
import { connect } from "react-redux";
import GoalsWrapper from "../../hoc/GoalsWrapper";
import OnlinePayments from "./../TransactionIcons/OnlinePayments";
import SuperMarket from "../TransactionIcons/SuperMarket";
import OnlineShopping from "../TransactionIcons/OnlineShopping";
import Food from "../TransactionIcons/Food";
import Baby from "../TransactionIcons/Baby";
import { createStructuredSelector } from "reselect";
import { selectGoals } from "./../../redux/goals/goals.selector";
import Others from "./../TransactionIcons/Others";

const Goals = ({ transactions, goals }) => {
  const paymentsT = category(transactions, "online-payment");
  const onlinePayments =
    goals[0].amount !== 0 ? ((paymentsT * 100) / goals[0].amount).toFixed(1) : 0;

  const marketT = category(transactions, "super-market");
  const superMarket =
    goals[1].amount !== 0 ? ((marketT * 100) / goals[1].amount).toFixed(1) : 0;

  const shoppingT = category(transactions, "online-shopping");
  const onlineShopping =
    goals[2].amount !== 0 ? ((shoppingT * 100) / goals[2].amount).toFixed(1) : 0;

  const foodT = category(transactions, "food");
  const food = goals[3].amount !== 0 ? ((foodT * 100) / goals[3].amount).toFixed(1) : 0;
  const babyT = category(transactions, "baby");
  const baby = goals[4].amount !== 0 ? (babyT * 100) / goals[4].amount.toFixed(1) : 0;

  const othersT = category(transactions, "others");
  const others = goals[5].amount !== 0 ? (othersT * 100) / goals[5].amount.toFixed(1) : 0;

  const [goalsIcons, setGoalsIcons] = useState([
    {
      id: 1,
      title: "پرداخت های آنلاین",
      icon: () => <OnlinePayments />,
      percent: onlinePayments,
      color: "-fuchsia-400",
      amount: goals[0].amount,
      total: paymentsT,
    },
    {
      id: 2,
      title: "سوپر مارکت",
      icon: () => <SuperMarket />,
      percent: superMarket,
      color: "-amber-200",
      amount: goals[1].amount,
      total: marketT,
    },
    {
      id: 3,
      title: "خرید آنلاین",
      icon: () => <OnlineShopping />,
      percent: onlineShopping,
      color: "-blue-400",
      amount: goals[2].amount,
      total: shoppingT,
    },
    {
      id: 4,
      title: "خرید غذا",
      icon: () => <Food />,
      percent: food,
      color: "-orange-400",
      amount: goals[3].amount,
      total: foodT,
    },
    {
      id: 5,
      title: "وسایل کودک",
      icon: () => <Baby />,
      percent: baby,
      color: "-thirdColor",
      amount: goals[4].amount,
      total: babyT,
    },
    {
      id: 6,
      title: "متفرقه",
      icon: () => <Others />,
      percent: others,
      color: "-teal-500",
      amount: goals[5].amount,
      total: othersT,
    },
  ]);

  const [edit, setEdit] = useState();

  const goalsEditHandler = (item) => {
    setEdit(item.id);
  };

  return (
    <div className='flex w-full flex-col p-4 gap-6 mb-20'>
      <div className='flex w-full justify-between'>
        <div className='font-semibold text-xl text-white'>اهداف</div>
        <div className='font-normal text-base text-gray-300'>همه</div>
      </div>
      {edit && (
        <div
          onClick={() => setEdit()}
          className='w-full h-full fixed bottom-0 right-0 bg-slate-900 opacity-20'>
          hi
        </div>
      )}

      {goalsIcons.map((item, idx) => {
        return (
          <GoalsWrapper
            key={item.id}
            WrappedComponent={item.icon}
            {...item}
            idx={idx}
            onEdit={() => goalsEditHandler(item)}
            edit={edit}
            setEdit={setEdit}
            setGoalsIcons={setGoalsIcons}
            goalsIcons={goalsIcons}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  goals: selectGoals,
});

export default connect(mapStateToProps)(Goals);
