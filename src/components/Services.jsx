import React from "react";
import img from "./bank.jpg";
import { Landmark, Briefcase, PiggyBank, GraduationCap, Home, CreditCard } from "lucide-react"


const Services = () => {
    const servicess = [
        { title: "Personal Banking", description: "Tailored solutions for your personal finances", icon: Landmark },
        { title: "Business Banking", description: "Supporting your business growth", icon: Briefcase },
        { title: "Savings & Investments", description: "Grow your wealth securely", icon: PiggyBank },
        { title: "Education Loans", description: "Invest in your future", icon: GraduationCap },
        { title: "Mortgages", description: "Make your dream home a reality", icon: Home },
        { title: "Credit Cards", description: "Flexible spending and rewards", icon: CreditCard },
      ]
  return (
    <section id="services" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 ">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {servicess.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center p-10 bg-white shadow-xl  ">
            <service.icon className="h-20 w-20 text-blue-600 mb-4" />
            <div>
              <h1 className="text-3xl mb-2">{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Services;
