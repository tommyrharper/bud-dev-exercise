const get10SmallestTransactions = (data) => data.transactions
  .filter((tx) => tx.amount.value < 0)
  .sort((txa, txb) => txb.amount.value - txa.amount.value)
  .slice(0, 10);

export default get10SmallestTransactions;