import Yadora from "../../assets/logo.svg";
import { footerSocials, footerCols } from "../../utils/constants";

function Footer() {
  return (
    <footer className="m-auto max-w-[90rem] px-24 pb-28 pt-16">
      <div className="grid grid-cols-[2fr_repeat(4,1fr)] grid-rows-1 gap-y-12">
        <div className="row-start-1 flex flex-col content-between justify-start">
          <img src={Yadora} alt="Yadora logo" className="mb-auto w-min" />
          <ul className="flex gap-x-2">
            {footerSocials.map((logo) => (
              <li key={logo.id}>
                <a href="#">
                  <img src={logo.logo} alt={logo.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {footerCols.map((column) => (
          <div key={column.id}>
            <p className="mb-4 text-xl font-bold text-primary-500">
              {column.heading}
            </p>
            <ul className="flex flex-col gap-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-lg text-primary-500 transition-all duration-100 hover:text-accent-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
