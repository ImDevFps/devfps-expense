import { transactionsActionTypes } from "./transaction.types";

export const addTransaction = (transaction) => ({
  type: transactionsActionTypes.ADD_TRANSACTIONS,
  payload: transaction,
});

export const deleteTransaction = (transaction) => ({
  type: transactionsActionTypes.DELETE_TRANSACTION,
  payload: transaction,
});

