"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNab, setShowNab] = useState(false);
  const openNavHandler = () => setShowNab(true);
  const closeNavHandler = () => setShowNab(false);
  return (
    <div>
      <Navbar openNav={openNavHandler}></Navbar>
      <MobileNav showNav={showNab} closeNav={closeNavHandler}></MobileNav>
    </div>
  );
};

export default ResponsiveNav;
