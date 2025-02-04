import { reviewImgs } from "../../utils/constants";

function Hero() {
  return (
    <section className="pb-16 pt-28">
      <div className="flex flex-nowrap justify-between gap-x-14">
        <div className="max-w-[50rem]">
          <h1 className="mb-4 text-7xl/[5rem] font-bold tracking-tight text-primary-500">
            Learn from your favorite creators about{" "}
            <span className="bg-gradient-to-t from-accent-500 to-accent-200 bg-clip-text text-transparent">
              fantasy reports
            </span>
          </h1>
          <div className="flex items-center gap-4">
            <ul className="flex">
              {reviewImgs.map((headshot) => (
                <li className="-mr-4 last:-mr-0" key={headshot.id}>
                  <img
                    src={headshot.image}
                    alt={headshot.name}
                    className="h-12 rounded-full border-4 border-white"
                  />
                </li>
              ))}
            </ul>
            <p className="text-lg font-medium text-primary-500">
              <span className="font-bold text-accent-500">5000+</span> satisfied
              clients in 2024
            </p>
          </div>
        </div>
        <figure>
          <div className="mr-8 flex h-52 w-52 items-center justify-center rounded-full outline outline-1 outline-primary-500">
            <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full bg-primary-500">
              <p className="text-5xl font-bold text-white">1:1</p>
              <p className="text-xl font-bold text-white">Video calls</p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
