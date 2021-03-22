import get10SmallestTransactions from "../components/Helpers/Helpers";

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
  const num = parseFloat((Math.random() * 200 - 100).toFixed(2));
  mockTransactionData.transactions.push({
    amount: { value: num },
  });
}

for (let i = 0; i < 10; i++) {
  const num = parseFloat((Math.random() * -100).toFixed(2));
  mockTransactionData.transactions.push({
    amount: { value: num },
  });
}

it("Should return an array of 10 transactions", () => {
  const result = get10SmallestTransactions(mockTransactionData);
  expect(result.length).toEqual(10);
});

it("All transactions should have a negative value", () => {
  for (let i = 0; i < 100; i++) {
    const num = parseFloat((Math.random() * 200 - 100).toFixed(2));
    mockTransactionData.transactions.push({
      amount: { value: num },
    });
  }
  const result = get10SmallestTransactions(mockTransactionData);
  for (const tx of result) {
    expect(tx.amount.value < 0).toEqual(true);
  }
});
