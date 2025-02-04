import { useState } from "react";

import { UseModalContext } from "../../contexts/ModalContext";
import Dots from "../../assets/tweleve-dots.svg";

function MoreInformation() {
  const { setCurrentModal } = UseModalContext();

  const [inputs, setInputs] = useState({
    email: "",
  });

  function updateInputs(e) {
    setInputs((inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = () => setCurrentModal("");

  return (
    <>
      <div className="relative bg-primary-500 p-20 rounded-t-xl text-white">
        <img
          src={Dots}
          alt="12 dot graphic"
          className="left-0 absolute h-auto"
        />
        <img
          src={Dots}
          alt="12 dot graphic"
          className="right-0 absolute h-auto"
        />

        <h2 className="mb-6 font-bold text-7xl/[5.6rem] tracking-tight">
          <span className="block bg-clip-text bg-gradient-to-t from-accent-500 to-accent-200 text-transparent">
            Supercharge
          </span>
          your business
        </h2>
        <p className="font-light text-2xl tracking-tight">
          Interested in learning more about how Yadora can grow your small
          business?
        </p>
      </div>
      <div className="relative flex flex-col gap-y-4 mx-20 my-12">
        <input
          type="email"
          name="email"
          placeholder="janedoe@gmail.com"
          className="bg-white-shade px-8 rounded-2xl w-full h-[4.5rem] text-lg placeholder:text-lg placeholder-primary-50"
          value={inputs.email}
          onChange={updateInputs}
        />
        <button
          onClick={handleSubmit}
          className="top-2 right-2 absolute bg-primary-500 hover:bg-accent-500 px-6 hover:px-8 rounded-2xl h-14 text-lg text-white tracking-tight transition-all duration-200 basis-16"
        >
          Learn More
        </button>
      </div>
    </>
  );
}

export default MoreInformation;
