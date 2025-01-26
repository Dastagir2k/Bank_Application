import React from "react";

const Savings = () => {
  const savingsAccounts = [
    { id: "1", type: "Savings", number: "**** 5678", balance: 15000 },
    { id: "2", type: "Savings Plus", number: "**** 7890", balance: 25000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-4">Savings Overview</h1>
          <p className="text-center text-gray-600 mb-8">
            Monitor and manage your savings accounts at a glance.
          </p>

          <div className="space-y-4">
            {savingsAccounts.map((account) => (
              <div
                key={account.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
              >
                <div>
                  <h2 className="text-xl font-semibold">{account.type}</h2>
                  <p className="text-gray-600">{account.number}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-500">
                    ${account.balance.toLocaleString()}
                  </p>
                  <p className="text-gray-500">Available Balance</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gray-600 cursor-pointer text-white px-6 py-3 rounded-md ">
              Add Savings Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
