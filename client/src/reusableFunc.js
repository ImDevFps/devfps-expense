// money format function for convert number to 3digits
export function moneyFormat(num) {
  return parseInt(num)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// converting to milion format
export const milionForamt = (num) => {
  if (num === 0) {
    return false;
  }
  if (num % 1000000 === 0) {
    return true;
  }
  if ((num / 1000000).toString().split(".")[1].length <= 2) {
    return true;
  }

  return false;
};

// filtering based on expense or income type
export const typeSelector = (transactions, type) => {
  return transactions
    .filter((item) => item.type === type)
    .map((item) => parseInt(item.amount))
    .reduce((acc, item) => (acc += item), 0);
};

// filtering based on category of transactions
const categorySelector = (transactions, category) => {
  return transactions
    .filter((item) => item.category === category)
    .map((item) => parseInt(item.amount))
    .reduce((acc, item) => (acc += item), 0);
};

export const wallet = (transactions) => {
  const income = typeSelector(transactions, 2);
  const expense = typeSelector(transactions, 1);

  const balance = income - expense;

  return milionForamt(balance) ? balance / 1000000 + "M" : moneyFormat(balance);
};

export const expenseCompute = (transactions) => {
  const expense = typeSelector(transactions, 1);

  return milionForamt(expense) ? expense / 1000000 + "M" : moneyFormat(expense);
};

export const incomeCompute = (transactions) => {
  const income = typeSelector(transactions, 2);

  return milionForamt(income) ? income / 1000000 + "M" : moneyFormat(income);
};

// each category paid amount
export const category = (transactions, category) => {
  return categorySelector(transactions, category);
};

export const transactionCount = (transactions, category) => {
  const selectedCat = transactions.filter((item) => item.category === category).length;

  return selectedCat;
};

//calendar

export const calendar = () => {
  const date = new Date().toLocaleDateString("en-CA");
  var sundte = new Date(date);
  var monthdte = sundte.getMonth();
  var dtedte = sundte.getDate();

  let sunMonth;

  switch (monthdte) {
    case 0:
      if (dtedte <= 20) {
        sunMonth = { id: 10, name: "دي" };
      } else {
        sunMonth = { id: 11, name: "بهمن" };
      }
      break;
    case 1:
      if (dtedte <= 19) {
        sunMonth = { id: 11, name: "بهمن" };
      } else {
        sunMonth = { id: 12, name: "اسفند" };
      }
      break;
    case 2:
      if (dtedte <= 20) {
        sunMonth = { id: 12, name: "اسفند" };
      } else {
        sunMonth = { id: 1, name: "فروردين" };
      }

      break;
    case 3:
      if (dtedte <= 20) {
        sunMonth = { id: 1, name: "فروردين" };
      } else {
        sunMonth = { id: 2, name: "ارديبهشت" };
      }
      break;
    case 4:
      if (dtedte <= 21) {
        sunMonth = { id: 2, name: "ارديبهشت" };
      } else {
        sunMonth = { id: 3, name: "خرداد" };
      }

      break;
    case 5:
      if (dtedte <= 21) {
        sunMonth = { id: 3, name: "خرداد" };
      } else {
        sunMonth = { id: 4, name: "تير" };
      }
      break;
    case 6:
      if (dtedte <= 22) {
        sunMonth = { id: 4, name: "تير" };
      } else {
        sunMonth = { id: 5, name: "مرداد" };
      }
      break;
    case 7:
      if (dtedte <= 22) {
        sunMonth = { id: 5, name: "مرداد" };
      } else {
        sunMonth = { id: 6, name: "شهريور" };
      }
      break;
    case 8:
      if (dtedte <= 22) {
        sunMonth = { id: 6, name: "شهريور" };
      } else {
        sunMonth = { id: 7, name: "مهر" };
      }
      break;
    case 9:
      if (dtedte <= 22) {
        sunMonth = { id: 7, name: "مهر" };
      } else {
        sunMonth = { id: 8, name: "آبان" };
      }
      break;
    case 10:
      if (dtedte <= 21) {
        sunMonth = { id: 8, name: "آبان" };
      } else {
        sunMonth = { id: 9, name: "آذر" };
      }

      break;
    case 11:
      if (dtedte <= 19) {
        sunMonth = { id: 9, name: "آذر" };
      } else {
        sunMonth = { id: 10, name: "دي" };
      }
      break;
    default:
      break;
  }

  return sunMonth;
};
