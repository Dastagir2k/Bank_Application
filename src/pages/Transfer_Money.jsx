import React, { useState } from "react";

const TransferMoney = () => {
  const [formData, setFormData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const accounts = [
    { id: "1", type: "Checking", number: "1234" },
    { id: "2", type: "Savings", number: "5678" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fromAccount, toAccount, amount } = formData;

    if (!fromAccount || !toAccount || !amount) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setMessage(`$${amount} transferred successfully to account ${toAccount}.`);
    setFormData({
      fromAccount: "",
      toAccount: "",
      amount: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Transfer Money</h2>
        <p className="text-center text-gray-600 mb-6">Securely send money to another account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-1">
              From Account
            </label>
            <select
              name="fromAccount"
              className="block w-full border border-gray-300 rounded-md p-2"
              value={formData.fromAccount}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select source account
              </option>
              {accounts.map((account) => (
                <option key={account.id} value={account.number}>
                  {account.type} - **** {account.number}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xl font-medium text-gray-700 mb-1">
              To Account
            </label>
            <input
              type="text"
              name="toAccount"
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter recipient's account number"
              value={formData.toAccount}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xl font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter amount to transfer"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xl font-medium text-gray-700 mb-1">
              Description (Optional)
            </label>
            <input
              type="text"
              name="description"
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter a description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 cursor-pointer px-4 rounded-md hover:bg-gray-600"
            disabled={loading}
          >
            {loading ? "Processing..." : "Transfer Money"}
          </button>
        </form>

        {message && (
          <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-md">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransferMoney;
