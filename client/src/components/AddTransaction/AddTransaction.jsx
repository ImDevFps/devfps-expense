import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { selectTransactions } from "../../redux/transactions/transactions.selector";
import { createStructuredSelector } from "reselect";
import { addTransaction } from "../../redux/transactions/transactions.actions";
import { calendar, wallet } from "../../reusableFunc";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "IranSans",
    },
  },
});

const AddTransaction = ({ transactions, addTransaction }) => {
  //1.Desc , 2.Amount, 3.Type, 4.Category
  const [formValues, setFormValues] = React.useState({
    type: 1,
    amount: "",
    desc: "",
    category: "",
    date: calendar(),
    id: new Date().getTime(),
  });
  const changeHandler = (event) => {
    setFormValues({
      ...formValues,
      id: new Date().getTime(),
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);

    setFormValues({
      type: 1,
      amount: "",
      desc: "",
      category: "",
      date: calendar(),
      id: new Date().getTime(),
    });
  };

  const balance = wallet(transactions);

  return (
    <div className='w-full p-4 flex flex-col h-screen items-center justify-center text-white gap-4'>
      <div className='absolute top-8 left-8'>
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
      <div>اضافه کردن دریافتی ها/هزینه ها</div>
      <div className='bg-secondaryColor w-4/5 p-3 flex justify-center items-center rounded-3xl mb-4'>
        T {balance}
      </div>
      <form
        autoComplete='off'
        className=' flex flex-col gap-5 w-4/5'
        onSubmit={submitHandler}>
        <ThemeProvider theme={theme}>
          <FormControl>
            <InputLabel sx={{ color: "white !important" }} id='select'>
              نوع
            </InputLabel>
            <Select
              className='select-icon'
              name='type'
              sx={{ color: "white !important", borderRadius: "0.75rem !important" }}
              labelId='select'
              id='select'
              value={formValues.type}
              onChange={changeHandler}
              autoWidth
              label='type'>
              <MenuItem className='w-72' value={1}>
                هزینه
              </MenuItem>
              <MenuItem value={2}>دریافتی</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
        <input
          className='rounded-xl p-2 focus:outline-none border-2 border-thirdColor bg-transparent'
          type='text'
          name='desc'
          onChange={changeHandler}
          value={formValues.desc}
          placeholder='توضیحات'
        />
        <input
          className='rounded-xl p-2 focus:outline-none border-2 border-thirdColor bg-transparent'
          type='number'
          name='amount'
          placeholder='مقدار'
          onChange={changeHandler}
          value={formValues.amount}
        />

        {formValues.type === 1 && (
          <ThemeProvider theme={theme}>
            <FormControl>
              <InputLabel sx={{ color: "white !important" }} id='select1'>
                دسته بندی
              </InputLabel>
              <Select
                className='select-icon'
                name='category'
                sx={{ color: "white !important", borderRadius: "0.75rem !important" }}
                labelId='select1'
                id='select1'
                value={formValues.category}
                onChange={changeHandler}
                autoWidth
                label='category'
                required>
                <MenuItem className='w-72' value='online-payment'>
                  پرداخت آنلاین
                </MenuItem>
                <MenuItem value='super-market'>سوپر مارکت</MenuItem>
                <MenuItem className='w-72' value='online-shopping'>
                  خرید آنلاین
                </MenuItem>
                <MenuItem className='w-72' value='food'>
                  خرید غذا
                </MenuItem>
                <MenuItem className='w-72' value='baby'>
                  وسایل کودک
                </MenuItem>
                <MenuItem className='w-72' value='others'>
                  متفرقه
                </MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>
        )}
        <button className='bg-orange-400 p-2 rounded-xl'>اضافه کردن</button>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  transactions: selectTransactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (formValues) => dispatch(addTransaction(formValues)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
