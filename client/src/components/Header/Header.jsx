import React from "react";

const Header = ({ user }) => {
  return (
    <div className='w-full flex justify-between items-center p-4 my-5 font-medium'>
      <div className='text-2xl'>سلام ، {user.name}</div>
      <div className='w-10 h-10'>
        {user.gender === "male" ? (
          <img src='./imgs/male.svg' alt='' />
        ) : (
          <img src='./imgs/female.svg' alt='' />
        )}
      </div>
    </div>
  );
};

export default Header;
