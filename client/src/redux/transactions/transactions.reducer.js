import { transactionsActionTypes } from "./transaction.types";
import { addTransactions, deleteTransaction } from "./transactions.utils";

const INITIAL_STATE = {
  transactions: [],
};

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case transactionsActionTypes.ADD_TRANSACTIONS:
      return {
        ...state,
        transactions: addTransactions(state.transactions, action.payload),
      };
    case transactionsActionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: deleteTransaction(state.transactions, action.payload),
      };

    default:
      return state;
  }
};

export default transactionsReducer;
