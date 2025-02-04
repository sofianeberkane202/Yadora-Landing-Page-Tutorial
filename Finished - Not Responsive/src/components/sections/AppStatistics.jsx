import { RxCaretRight } from "react-icons/rx";
import { appStatsImgs, appStats } from "../../utils/constants";

function AppStatistics() {
  return (
    <section className="bg-primary-500 -mt-[1px]">
      <div className="flex flex-col gap-y-28 m-auto px-24 pt-16 pb-32 max-w-[90rem]">
        <div>
          <h2 className="bg-clip-text bg-gradient-to-t from-accent-500 to-accent-200 font-bold text-7xl/[5.625rem] text-transparent tracking-tight">
            get direct
          </h2>
          <h2 className="font-bold text-7xl/[5rem] text-white tracking-tight">
            knowledge and insights.
          </h2>
        </div>

        <div className="gap-x-9 gap-y-4 grid grid-cols-3">
          {appStatsImgs.map((img) => (
            <div key={img.id} className="group relative">
              <p className="group-hover:visible top-0 right-0 bottom-0 left-0 absolute bg-primary-800 bg-opacity-40 opacity-0 group-hover:opacity-100 px-6 py-8 text-lg text-white tracking-tight transition-all duration-200 invisible">
                {img.description}
              </p>
              <img
                src={img.image}
                alt={img.name}
                key={img.name}
                className="rounded-xl"
              />
              <p className="bottom-8 left-6 absolute bg-white bg-opacity-20 opacity-100 group-hover:opacity-0 backdrop-blur-sm px-2 py-1 rounded-lg text-lg text-white transition-all duration-200 group-hover:invisible">
                {img.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-between items-end">
          <ul className="flex flex-row gap-24">
            {appStats.map((stat) => (
              <li key={stat.id}>
                <p className="font-bold text-7xl/[5rem] text-accent-500 text-left tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 font-normal text-[2rem]/[2.5rem] text-left text-white">
                  {stat.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-end gap-6">
            <p
              className="text-[2rem]/[2.5rem] text-white"
              aria-label="Explore the marketplace"
            >
              Explore <br className="block" /> the marketplace
            </p>
            <button className="group flex justify-center items-center bg-gradient-to-t from-accent-500 to-accent-200 mb-1 rounded-full w-16 h-16 transition-all duration-200">
              <RxCaretRight className="group-hover:text-white w-12 h-12 text-primary-500 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppStatistics;
