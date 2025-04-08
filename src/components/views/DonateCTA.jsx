import React from "react";
import Image from "next/image";

const DonateCTA = () => {
  return (
    <section
      className="lg:h-[478px] text-white-10 flex items-center justify-center lg:px-40 px-4 py-24 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/images/donateCTA.png')" }}
    >
      <div className="flex flex-col items-center gap-6 justify-center max-w-4xl">
        <Image src="/assets/icons/hand.svg" alt="hand" quality={100} width={94} height={94} />
        <h2 className="text-white text-[30px] lg:text-[40px] font-poppins font-bold leading-[43px] uppercase text-center">
          Empowering Communities, Changing Lives
        </h2>
        <p className="text-white text-sm lg:text-base font-poppins font-normal leading-normal text-center">
          Your generosity makes a difference! Every contribution helps us bring positive change and support those in need. Join us in making
          an impact today.
        </p>
        <button
          type="button"
          className="w-fit lg:inline-block py-2.5 px-6 rounded-2xl bg-green border border-transparent text-white font-poppins text-base font-semibold uppercase transition-all hover:bg-green/50 hover:text-white"
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default DonateCTA;
