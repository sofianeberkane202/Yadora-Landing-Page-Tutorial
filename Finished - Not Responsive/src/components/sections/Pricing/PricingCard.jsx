import { CiCircleCheck } from "react-icons/ci";

function PricingCard({ card, paymentPlan }) {
  const pclass = {
    container: card.primary ? "pb-14" : "pb-10 my-2",
    bulletColor: card.primary ? "stroke-accent-500" : "stroke-white",
    cta: card.primary
      ? "bg-gradient-to-t bg-accent-500 from-accent-500 to-accent-200"
      : "bg-white",
    ctaWrapper: card.primary
      ? "bg-gradient-to-b from-accent-500 to-accent-200 p-[.125rem] rounded-2xl \
      drop-shadow-[0_0px_35px_rgba(255,184,76,0.20)] hover:drop-shadow-[0_0px_35px_rgba(255,184,76,0.35)]"
      : "",
  };

  const price =
    card.price[paymentPlan] === "Free"
      ? card.price[paymentPlan]
      : "$" + card.price[paymentPlan];

  const paymentPlanText =
    card.price[paymentPlan] === "Free"
      ? ""
      : paymentPlan === "monthly"
        ? "per month"
        : "per year";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-primary-500 px-8 pt-8 ${pclass.container}`}
    >
      {/* absolutely positioned elements */}
      {card.primary && (
        <>
          <div className="top-0 right-0 z-10 absolute bg-gradient-to-b from-accent-500 to-accent-200 py-[.125rem] rounded-tr-2xl rounded-bl-2xl">
            <p className="bg-accent-500 bg-gradient-to-t from-accent-500 to-accent-200 px-4 py-2 rounded-tr-xl rounded-bl-2xl text-xs">
              most popular
            </p>
          </div>
          <div className="left-[-20%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[30rem] h-28 -rotate-45" />
          <div className="top-[30%] left-[30%] absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] w-[30rem] h-28 -rotate-45" />
        </>
      )}

      <p className="opacity-80 mb-12 px-6 py-2 border rounded-2xl max-w-min text-sm text-white">
        {card.program}
      </p>
      <div className="flex items-end gap-x-2 mb-2">
        <p className="font-bold text-[3.5rem]/[4rem] text-white tracking-tight">
          {price}
        </p>
        <span className="opacity-50 mb-2 text-white">{paymentPlanText}</span>
      </div>
      <p className="text-white"></p>
      <ul className="flex flex-col gap-y-4 my-10">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-x-2">
            <CiCircleCheck
              className={`h-6 w-6 stroke-1 text-white ${pclass.bulletColor}`}
            />
            <p className="text-white">{bullet}</p>
          </li>
        ))}
      </ul>
      <div className={pclass.ctaWrapper}>
        <button
          className={`w-full rounded-2xl py-4 text-primary-500 transition-all duration-200 hover:bg-accent-500 hover:text-white ${pclass.cta}`}
        >
          {card.cta}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
