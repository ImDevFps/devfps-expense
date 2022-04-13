import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ExpenseApp from "./components/ExpenseApp/ExpenseApp";
import Starter from "./components/Starter/Starter";
import Login from "./components/Login/Login";
import Transactions from "./components/Transactions/Transactions";
import { createStructuredSelector } from "reselect";
import { isFirstTimeRun, selectUser } from "./redux/start/start.selector";
import { connect } from "react-redux";
import { selectTransactions } from "./redux/transactions/transactions.selector";
import Navbar from "./components/Navbar/Navbar";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import AboutUs from "./components/AboutUs/AboutUs";
import Archive from "./components/Archive/Archive";
import { calendar } from "./reusableFunc";

function App({ user, started, transactions }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  if (isMobile) {
    return (
      <div className='w-full flex flex-col justify-center items-center'>
        <Routes>
          <Route
            path='/'
            element={
              started ? (
                user !== null ? (
                  <ExpenseApp
                    user={user}
                    transactions={transactions.filter(
                      (item) => item.date.id === calendar().id
                    )}
                    allTrans={transactions}
                  />
                ) : (
                  <Login />
                )
              ) : (
                <Starter />
              )
            }
          />

          <Route
            path='/login'
            element={user === null ? <Login /> : <Navigate to='/' />}
          />
          <Route
            path='/transactions'
            element={
              user !== null ? (
                <Transactions
                  transactions={transactions.filter(
                    (item) => item.date.id === calendar().id
                  )}
                />
              ) : (
                <Navigate to='/' />
              )
            }
          />
          <Route
            path='/add-transaction'
            element={user !== null ? <AddTransaction /> : <Navigate to='/' />}
          />
          <Route path='/about-us' element={<AboutUs />} />
          <Route
            path='/archive'
            element={
              user !== null ? (
                <Archive transactions={transactions} />
              ) : (
                <Navigate to='/' />
              )
            }
          />
        </Routes>

        <Navbar />
      </div>
    );
  }
  return (
    <div className='w-full flex justify-center items-center'>
      <span className='text-white text-2xl font-medium mt-32'>
        برای استفاده از این اپلیکیشن لطفا از موبایل استفاده کنید
      </span>
      <div className='hidden text-red-300'>
        <span className='text-fuchsia-400'></span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  started: isFirstTimeRun,
  transactions: selectTransactions,
});

export default connect(mapStateToProps)(App);
