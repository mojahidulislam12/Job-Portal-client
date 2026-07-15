import React from "react";
import {
  FaBullhorn,
  FaCar,
  FaCode,
  FaHeadset,
  FaProjectDiagram,
} from "react-icons/fa";
import { GiHealthNormal, GiPencilBrush, GiTakeMyMoney } from "react-icons/gi";
import CategoryCard from "./CategoryCard";
import SectionHeading from "../../Helper/SectionHeading";
const categoryData = [
  {
    id: 1,
    categoryName: "Accounting / Finance",
    openPositions: 2,
    icon: <GiTakeMyMoney className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 2,
    categoryName: "Marketing",
    openPositions: 8,
    icon: <FaBullhorn className="w-10 h-10 text-pink-600 dark:text-white" />,
  },
  {
    id: 3,
    categoryName: "Design",
    openPositions: 5,
    icon: (
      <GiPencilBrush className="w-10 h-10 text-purple-600 dark:text-white" />
    ),
  },
  {
    id: 4,
    categoryName: "Developer",
    openPositions: 15,
    icon: <FaCode className="w-10 h-10 text-green-600 dark:text-white" />,
  },
  {
    id: 5,
    categoryName: "Project Manager",
    openPositions: 4,
    icon: (
      <FaProjectDiagram className="w-10 h-10 text-orange-500 dark:text-white" />
    ),
  },
  {
    id: 6,
    categoryName: "Customer Service",
    openPositions: 9,
    icon: <FaHeadset className="w-10 h-10 text-cyan-600 dark:text-white" />,
  },
  {
    id: 7,
    categoryName: "Health & Care",
    openPositions: 6,
    icon: <GiHealthNormal className="w-10 h-10 text-red-600 dark:text-white" />,
  },
  {
    id: 8,
    categoryName: "Automotive Jobs",
    openPositions: 3,
    icon: <FaCar className="w-10 h-10 text-yellow-600 dark:text-white" />,
  },
];
const Category = () => {
  return (
    <div>
      <SectionHeading
        heading="Popular Job Categories"
        subHeading="2020 jobs live - 293 added today."
      ></SectionHeading>
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryData.map((category) => {
          return (
            <div key={category.id}>
              <CategoryCard category={category}></CategoryCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
