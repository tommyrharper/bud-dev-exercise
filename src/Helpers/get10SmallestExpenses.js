const get10SmallestExpenses = (data) => {
  if (typeof data !== 'object') throw new TypeError('Data must be an object');
  if (!Array.isArray(data.transactions)) throw new TypeError('Data must contain a transactions array.');
  return data.transactions
    .filter((tx) => tx.amount.value < 0)
    .sort((txa, txb) => txb.amount.value - txa.amount.value)
    .slice(0, 10);
};

export default get10SmallestExpenses;
