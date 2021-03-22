import get10SmallestExpenses from "../Helpers/Helpers";

const mockTransactionData = {
  transactions: [
    {
      amount: {
        value: 100,
      },
    },
  ],
};

for (let i = 0; i < 100; i++) {
  const num = parseFloat((Math.random() * 20000 - 10000).toFixed(2));
  mockTransactionData.transactions.push({
    amount: { value: num },
  });
}

for (let i = 0; i < 10; i++) {
  const num = parseFloat((Math.random() * -10000).toFixed(2));
  mockTransactionData.transactions.push({
    amount: { value: num },
  });
}
const result = get10SmallestExpenses(mockTransactionData);

it("Should return an array of 10 transactions", () => {
  expect(result.length).toEqual(10);
});

it("All transactions should have a negative value", () => {
  for (const tx of result) {
    expect(tx.amount.value < 0).toEqual(true);
  }
});

it("It should return the 10 smallest expense", () => {
  let largest = -Infinity;
  // Find the largest expense
  for (const tx of result) {
    if (Math.abs(tx.amount.value) > largest) largest = tx.amount.value;
  }
  // Count the number of expenses that are smaller than it
  let count = 0;
  for (const tx of mockTransactionData.transactions) {
    if (tx.amount.value > largest && tx.amount.value < 0) count++;
  }
  // There should be 9 smaller expenses in all the transactions
  expect(count === 9).toEqual(true);
});
