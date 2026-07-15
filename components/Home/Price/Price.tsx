import React from "react";
import PriceCard from "./PriceCard";
import SectionHeading from "../../Helper/SectionHeading";

const Price = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Pricing Packages"
        subHeading="Lorem ipsum dolor sit amet elit, sed do eiusmod tempor."
      ></SectionHeading>
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div>
          <PriceCard type="Basic" price="199" />
        </div>
        <div>
          <PriceCard type="Standard" price="399" />
        </div>
        <div>
          <PriceCard type="Extended" price="799" />
        </div>
      </div>
    </div>
  );
};

export default Price;
