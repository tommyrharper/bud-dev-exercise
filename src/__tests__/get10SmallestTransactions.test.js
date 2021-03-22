import get10SmallestExpenses from "../Helpers/get10SmallestExpenses";

describe("get10SmallestExpenses executes correctly", () => {
  const mockTransactionData = {
    transactions: [
      {
        amount: {
          value: 100,
        },
      },
    ],
  };

  // Generate 100 fake transactions
  for (let i = 0; i < 100; i++) {
    const num = parseFloat((Math.random() * 20000 - 10000).toFixed(2));
    mockTransactionData.transactions.push({
      amount: { value: num },
    });
  }

  // Ensure there at least 10 expenses
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
    // Find the largest expense
    let largest = -Infinity;
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

  it("It should throw a TypeError if it is passed in a string, number or boolean", () => {
    // Doesn't accept a string
    const string = () => {
      get10SmallestExpenses("test");
    };
    expect(string).toThrow(TypeError);
    expect(string).toThrow("Data must be an object");

    // Doesn't accept a number
    const number = () => {
      get10SmallestExpenses(50);
    };
    expect(number).toThrow(TypeError);
    expect(number).toThrow("Data must be an object");

    // Doesn't accept a boolean
    const bool = () => {
      get10SmallestExpenses(50);
    };
    expect(bool).toThrow(TypeError);
    expect(bool).toThrow("Data must be an object");
  });

  it("It should a TypeError if it doesn't contain a transactions array", () => {
    // Data have a transactions property
    const noArray = () => {
      get10SmallestExpenses({});
    };
    expect(noArray).toThrow(TypeError);
    expect(noArray).toThrow("Data must contain a transactions array.");

    // Transactions property must be an array
    const number = () => {
      get10SmallestExpenses({ transactions: true });
    };
    expect(number).toThrow(TypeError);
    expect(number).toThrow("Data must contain a transactions array.");
  });
});
