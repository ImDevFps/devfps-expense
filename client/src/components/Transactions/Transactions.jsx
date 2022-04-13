import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";
import {
  category,
  incomeCompute,
  typeSelector,
  calendar,
  milionForamt,
  moneyFormat,
} from "../../reusableFunc";
import { transactionCount } from "./../../reusableFunc";
import SuperMarket from "../TransactionIcons/SuperMarket";
import OnlinePayments from "./../TransactionIcons/OnlinePayments";
import OnlineShopping from "../TransactionIcons/OnlineShopping";
import Food from "./../TransactionIcons/Food";
import Baby from "./../TransactionIcons/Baby";
import Incomes from "../TransactionIcons/Incomes";
import IconWrapper from "../../hoc/IconWrapper";
import Others from "./../TransactionIcons/Others";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "IranSans",
    },
  },
});

const Transactions = ({ transactions }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelector(newValue);
  };
  const [selector, setSelector] = useState("1");

  const categories = [
    { id: 1, cat: "online-payment" },
    { id: 2, cat: "super-market" },
    { id: 3, cat: "online-shopping" },
    { id: 4, cat: "food" },
    { id: 5, cat: "baby" },
    { id: 6, cat: "others" },
    { id: 7, cat: "" },
  ];

  // finding total expenses amount

  //finding each category transaction quantity
  const transactionCounts = categories.map((item) =>
    transactionCount(transactions, item.cat)
  );
  //finding each category transaction amount
  const moneyPaidEach = categories.map((item) =>
    parseInt(category(transactions, item.cat))
  );

  const totalEx = parseInt(typeSelector(transactions, 1));
  const totalExpense = milionForamt(totalEx)
    ? totalEx / 1000000 + "M"
    : moneyFormat(totalEx);
  const totalIncome = incomeCompute(transactions);

  const expenseIcons = [
    {
      id: 1,
      title: "پرداخت های آنلاین",
      icon: () => OnlinePayments(),
      transCount: transactionCounts[0],
      amount: moneyPaidEach[0],
    },
    {
      id: 2,
      title: "سوپر مارکت",
      icon: SuperMarket,
      transCount: transactionCounts[1],
      amount: moneyPaidEach[1],
    },
    {
      id: 3,
      title: "خرید آنلاین",
      icon: OnlineShopping,
      transCount: transactionCounts[2],
      amount: moneyPaidEach[2],
    },
    {
      id: 4,
      title: "خرید غذا",
      icon: Food,
      transCount: transactionCounts[3],
      amount: moneyPaidEach[3],
    },
    {
      id: 5,
      title: "وسایل کودک",
      icon: Baby,
      transCount: transactionCounts[4],
      amount: moneyPaidEach[4],
    },
    {
      id: 6,
      title: "متفرقه",
      icon: Others,
      transCount: transactionCounts[5],
      amount: moneyPaidEach[5],
    },
  ];

  const incomeIcons = [
    {
      id: 1,
      title: "دریافتی ها",
      transCount: transactionCounts[6],
      amount: moneyPaidEach[6],
    },
  ];

  //each category transaction amount in chart in %
  const moneyPaidEachPercent = moneyPaidEach.map((item) =>
    parseFloat((item * 100) / totalEx).toFixed(2)
  );

  // max amount of totalExpense transactions
  const biggestExpense = Math.max(...moneyPaidEachPercent.slice(0, 5));
  const biggestExpenseIndex = moneyPaidEachPercent.findIndex(
    (item) => parseFloat(item) === biggestExpense
  );

  //max amount of incomes transactions
  const biggestIncomes = Math.max(...moneyPaidEachPercent.slice(6, 6));
  const biggestIncomesIndex = moneyPaidEachPercent.findIndex(
    (item) => parseFloat(item) === biggestIncomes
  );

  const dataExpense = [
    {
      value: moneyPaidEachPercent[0] === true ? moneyPaidEachPercent[0] : "0.00",
      color: "#E879F9",
    },
    {
      value: moneyPaidEachPercent[1] === true ? moneyPaidEachPercent[1] : "0.00",
      color: "#FDE68A",
    },
    {
      value: moneyPaidEachPercent[2] === true ? moneyPaidEachPercent[2] : "0.00",
      color: "#60A5FA",
    },
    {
      value: moneyPaidEachPercent[3] === true ? moneyPaidEachPercent[3] : "0.00",
      color: "#FB923C",
    },
    {
      value: moneyPaidEachPercent[4] === true ? moneyPaidEachPercent[4] : "0.00",
      color: "#CD4FF7",
    },
    {
      value: moneyPaidEachPercent[5] === true ? moneyPaidEachPercent[5] : "0.00",
      color: "#14B8A6",
    },
  ];

  const dataIncome = [{ value: 100, color: "#e879f9" }];
  const emptyData = [{ value: 100, color: "#FB923C" }];

  const month = calendar().name;

  const isNoExp = dataExpense.map((item) => item.value > "0.00");

  return (
    <div className=' w-full px-6 py-4 text-white flex flex-col gap-5 mb-12'>
      <div className='flex w-full justify-end sticky top-4'>
        <Link to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
        </Link>
      </div>
      <div className='w-full flex justify-between'>
        <span className='font-semibold text-xl'>{month}</span>

        <span>
          {selector === "1" ? "T " + totalExpense + "-" : "T " + totalIncome + "+"}
        </span>
      </div>

      <div className='w-full flex justify-center'>
        {selector === "1" && (
          <PieChart
            data={isNoExp.length < 6 ? dataExpense : emptyData}
            lineWidth={60}
            radius={40}
            segmentsShift={(index) => (index === biggestExpenseIndex ? 4 : 0)}
            totalValue={100}
            label={({ dataEntry }) =>
              `${dataEntry.value !== "0.00" ? dataEntry.value + "%" : ""}`
            }
            labelStyle={{ fontSize: "4px" }}
            labelPosition={70}
          />
        )}
        {selector === "2" && (
          <PieChart
            data={moneyPaidEach[6] > 0 ? dataIncome : emptyData}
            lineWidth={60}
            radius={40}
            segmentsShift={(index) => (index === biggestIncomesIndex ? 4 : 0)}
            totalValue={100}
            label={({ dataEntry }) => `${dataEntry.value}%`}
            labelStyle={{ fontSize: "4px" }}
            labelPosition={70}
          />
        )}
      </div>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} id='test'>
                <Tab className='flex-1 text-lg' label='مخارج' value='1' />
                <Tab className='flex-1 text-lg' label='دریافتی ها' value='2' />
              </TabList>
            </Box>
            <TabPanel value='1' className='tansactions-tab'>
              <div className='flex flex-col w-full items-center gap-4 px-0 text-sm'>
                {expenseIcons.map((item) => {
                  return (
                    item.transCount !== 0 && (
                      <IconWrapper
                        key={item.id}
                        WrappedComponent={item.icon}
                        {...item}
                        sign='-'
                      />
                    )
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value='2' className='tansactions-tab'>
              <div className='flex flex-col w-full items-center gap-2 px-0 text-sm'>
                {incomeIcons.map((item) => {
                  return (
                    item.transCount !== 0 && (
                      <IconWrapper
                        key={item.id}
                        WrappedComponent={Incomes}
                        {...item}
                        sign='+'
                      />
                    )
                  );
                })}
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Transactions;
