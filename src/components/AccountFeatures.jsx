import React from "react";
import { Wallet, ArrowRightLeft, PiggyBank } from "lucide-react";
import { useNavigate } from "react-router-dom";

const accountFeatures = [
  {
    title: "Check Balance",
    description: "View your current account balance",
    icon: Wallet,
    action: "/balance", // Added navigation path
  },
  {
    title: "Transfer Money",
    description: "Send money securely",
    icon: ArrowRightLeft,
    action: "/transfer", // Added navigation path
  },
  {
    title: "Savings",
    description: "Manage your savings accounts",
    icon: PiggyBank,
    action: "/savings", // Added navigation path
  },
];

const AccountFeatures = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section id="account-access" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Quick Account Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accountFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl py-8">
              <div className="flex flex-col items-center">
                <feature.icon className="h-20 w-20 text-blue-600 mb-4" />
                <h1 className="text-4xl font-bold">{feature.title}</h1>
                <p className="py-2 text-2xl">{feature.description}</p>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  className="bg-blue-500 px-8 py-2 text-xl text-white rounded-lg cursor-pointer"
                  onClick={() => handleNavigation(feature.action)}
                >
                  Access Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountFeatures;
