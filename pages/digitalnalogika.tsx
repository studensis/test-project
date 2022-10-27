import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "../components/Icon";
import Table from "../components/Table";

const DigitalnaLogika = () => {
  return (
    <div>
      <header className="w-screen h-[60px] dark:bg-dark-neutral-weak bg-gradient-to-l to-light-accent-medium from-light-accent-strong flex justify-between shadow-xl">
        <Link href="/">
          <div className="h-full w-max flex justify-start items-center p-3 cursor-pointer">
            <Image
              className=""
              src="/./assets/ferLogo.png"
              width={80}
              height={50}
            />
          </div>
        </Link>
        <div className="flex items-center p-5 ">
          <p className="flex text-lg text-black dark:text-dark-accent p-3">
            Ivan Brcic
          </p>
          <div className="cursor-pointer">
            <Icon className="pt-2" icon={"wallet"} size={30} />
          </div>
        </div>
      </header>
      <div className="h-screen w-screen bg-gradient-to-tl from-light-neutral-medium to-light-accent-weak">
        <h1 className="text-6xl text-center p-4">Rang lista na predmetu</h1>
        <Table className="flex justify-center p-5" />
      </div>
    </div>
  );
};

export default DigitalnaLogika;
