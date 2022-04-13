import React from "react";

const Category = ({ setCategory, category }) => {
  const filterHandler = (e) => {
    setCategory(e.target.name);
  };
  return (
    <div className='flex flex-nowrap items-center gap-4 mr-3 overflow-auto py-2 pr-2 pl-4 no-scroll'>
      <img
        className={`rounded-2xl w-24 h-24 bg-fuchsia-300 p-1 ${
          category === "payment" ? "ring ring-offset-2" : "ring-0"
        } ring-offset-mainColor ring-sky-400`}
        src='./imgs/online-payments.svg'
        alt='category-item'
        onClick={filterHandler}
        name='payment'
      />
      <img
        className={`rounded-2xl w-24 h-24 bg-amber-100 p-1 ${
          category === "market" ? "ring ring-offset-2" : "ring-0"
        } ring-offset-mainColor ring-sky-400`}
        src='./imgs/market.svg'
        alt='category-item'
        onClick={filterHandler}
        name='market'
      />
      <img
        className={`rounded-2xl w-24 h-24 bg-blue-400 p-1 ${
          category === "shop" ? "ring ring-offset-2" : "ring-0"
        } ring-offset-mainColor ring-sky-400`}
        src='./imgs/online-shop.svg'
        alt='category-item'
        onClick={filterHandler}
        name='shop'
      />
      <img
        className={`rounded-2xl w-24 h-24 bg-orange-300 p-1 ${
          category === "food" ? "ring ring-offset-2" : "ring-0"
        } ring-offset-mainColor ring-sky-400`}
        src='./imgs/food.svg'
        alt='category-item'
        onClick={filterHandler}
        name='food'
      />
      <img
        className={`rounded-2xl w-24 h-24 bg-thirdColor p-1 ${
          category === "baby" ? "ring ring-offset-2" : "ring-0"
        } ring-offset-mainColor ring-sky-400`}
        src='./imgs/baby.svg'
        alt='category-item'
        onClick={filterHandler}
        name='baby'
      />
      <img
        className={`rounded-2xl w-24 h-24 bg-teal-500 p-1 ${
          category === "others" ? "ring ring-offset-2" : "ring-0"
        } ring-offset-mainColor ring-sky-400`}
        src='./imgs/others.png'
        alt='category-item'
        onClick={filterHandler}
        name='others'
      />
    </div>
  );
};

export default Category;
