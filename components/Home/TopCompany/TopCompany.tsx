"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import TopCompanyCard from "./TopCompanyCard";
import SectionHeading from "../../Helper/SectionHeading";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CompanyData = [
  {
    id: 1,
    image: "/images/c1.png",
    name: "Udemy",
    location: "Dhaka, Bangladesh",
    position: "20",
  },
  {
    id: 2,
    image: "/images/c2.png",
    name: "Google",
    location: "Chattogram, Bangladesh",
    position: "15",
  },
  {
    id: 3,
    image: "/images/c3.png",
    name: "Microsoft",
    location: "Sylhet, Bangladesh",
    position: "12",
  },
  {
    id: 4,
    image: "/images/c4.png",
    name: "Amazon",
    location: "Khulna, Bangladesh",
    position: "18",
  },
];

const TopCompany = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Top Company Registered"
        subHeading="Some of the companies we've helped recruit excellent applicants over the years."
      ></SectionHeading>
      <div className="w-[80%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {CompanyData.map((data) => {
            return <TopCompanyCard key={data.id} data={data} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default TopCompany;
