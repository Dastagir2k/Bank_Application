import React, { useState } from 'react';

const CheckBalance = () => {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(null);
  const [customerID, setCustomerID] = useState('');
  const [pin, setPin] = useState('');

  const accounts = [
    { id: '1', type: 'Savings', number: '1234567890', balance: 2500 },
    { id: '2', type: 'Checking', number: '0987654321', balance: 1500 },
  ];

  const handleCheckBalance = () => {
    setLoading(true);
    setTimeout(() => {
      const foundAccount = accounts.find((acc) => acc.id === selectedAccount);
      setAccount(foundAccount);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6 text-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Check Your Balance</h2>
          <p className="text-center text-gray-600 mb-6">Fill in the details below to view your account balance</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="customer-id" className="block text-md font-medium text-gray-700">
                Customer ID
              </label>
              <input
                id="customer-id"
                type="text"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                value={customerID}
                onChange={(e) => setCustomerID(e.target.value)}
                placeholder="Enter your Customer ID"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="pin" className="block text-md font-medium text-gray-700">
                PIN
              </label>
              <input
                id="pin"
                type="password"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter your PIN"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="account-select" className="block text-md font-medium text-gray-700">
                Select Account
              </label>
              <select
                id="account-select"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
              >
                <option value="" disabled>
                  Select an account
                </option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.type} - {account.number}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleCheckBalance}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 disabled:bg-gray-300 cursor-pointer"
              disabled={loading || !selectedAccount || !customerID || !pin}
            >
              {loading ? 'Checking Balance...' : 'Check Balance'}
            </button>

            {account && !loading && (
              <div className="mt-4 p-4 bg-blue-50 rounded-md">
                <h3 className="text-lg font-semibold text-blue-800">{account.type} Account Balance</h3>
                <p className="text-2xl font-bold text-blue-900">${account.balance.toLocaleString()}</p>
                <p className="text-sm text-blue-700">Account Number: {account.number}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBalance;
