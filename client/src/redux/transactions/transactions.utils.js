export const addTransactions = (transactions, newTransaction) => {
  return [...transactions, { ...newTransaction }];
};

export const deleteTransaction = (transactions, transactionToDelete) => {
  const existingTransactions = transactions.find(
    (item) => item.id === transactionToDelete.id
  );

  if (existingTransactions) {
    return transactions.filter((item) => item.id !== transactionToDelete.id);
  }

  return transactions.map((item) =>
    item.id === transactionToDelete.id ? { ...item } : item
  );
};
