import { features } from "../../utils/constants";

function Features() {
  return (
    <section className="m-auto px-24 pt-32 pb-24 max-w-[90rem]">
      <div className="gap-y-24 grid grid-cols-2">
        <div className="max-w-[65%]">
          <h3 className="mb-4 font-bold text-[3.5rem]/[4rem] text-primary-500 tracking-tight">
            Why become a creator?
          </h3>
          <p className="mb-10 text-lg tracking-tight">
            Engage with your supporters and subscribers to sell your skills,
            knowledge and passions.
          </p>
          <button className="bg-primary-500 hover:bg-accent-500 px-8 hover:px-9 py-4 rounded-2xl text-lg text-white tracking-tight transition-all duration-200">
            Become a creator
          </button>
        </div>
        <ul className="justify-items-start gap-x-8 gap-y-20 grid grid-cols-2 grid-rows-2">
          {features.map((feature) => (
            <li key={feature.id} className="w-5/6 text-start tracking-tight">
              <img
                src={feature.icon}
                alt={feature.name}
                className="mb-6 w-auto h-auto place-self-start"
              />
              <h4 className="mb-2 font-bold text-2xl/8 text-primary-500">
                {feature.name}
              </h4>
              <p className="text-lg text-primary-500 tracking-tight">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
