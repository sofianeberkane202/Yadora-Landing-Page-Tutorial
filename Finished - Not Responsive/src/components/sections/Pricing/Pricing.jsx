import { useState } from "react";

import Toggle from "../../UI/Toggle";
import PricingCard from "../../sections/Pricing/PricingCard";
import { pricingCards } from "../../../utils/constants";

function Pricing() {
  const [paymentPlan, setPaymentPlan] = useState("monthly");

  function handlePaymentPlanChange() {
    setPaymentPlan((plan) => (plan === "monthly" ? "annual" : "monthly"));
  }

  return (
    <section className="m-auto px-24 py-8 max-w-[90rem]">
      <div className="flex flex-col items-center">
        <h2 className="mb-6 font-bold text-[3.5rem]/[4rem] text-primary-500 tracking-tight">
          Start creating today<span className="text-accent-500">.</span>
        </h2>
        <div className="flex items-center gap-x-4">
          <p className="text-lg text-primary-500 tracking-tight">Monthly</p>
          <Toggle
            handleToggle={handlePaymentPlanChange}
            toggleLabel="Toggle between monthly and annual plans"
          />
          <p className="text-lg text-primary-500 tracking-tight">Annual</p>
        </div>
        <div className="gap-x-4 gap-y-4 grid grid-cols-[32fr_34fr_32fr] my-10 w-full">
          {pricingCards.map((card) => (
            <PricingCard
              card={card}
              key={card.program}
              paymentPlan={paymentPlan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
