import Link from "next/link";

import React from "react";
import { CgClose } from "react-icons/cg";
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Browse Lawyers",
      href: "/browseLawyer",
    },
  ];
  return (
    <div>
      {/* Overlay */}
      <div
        className={`${navOpen} fixed inset-0 transform transition-all right-0 duration-500 z-100002 bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navLinks */}
      <div
        className={`${navOpen} text-white fixed justify-center flex flex-col h-full transform transition-all duration-200 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] border-white sm:text-[30px]">
                {link.name}
              </p>
            </Link>
          );
        })}
        {/* Close Icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
