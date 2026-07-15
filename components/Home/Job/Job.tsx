import React from "react";
import JobCard from "./JobCard";
import SectionHeading from "../../Helper/SectionHeading";
const jobs = [
  {
    id: 1,
    image: "/images/j1.png",
    title: "Software Engineer",
    location: "Dhaka, Bangladesh",
    jobType: "Full Time",
    urgency: "Urgent",
  },
  {
    id: 2,
    image: "/images/j2.png",
    title: "Frontend Developer",
    location: "Chattogram, Bangladesh",
    jobType: "Full Time",
    urgency: "New",
  },
  {
    id: 3,
    image: "/images/j3.png",
    title: "Backend Developer",
    location: "Sylhet, Bangladesh",
    jobType: "Remote",
    urgency: "Urgent",
  },
  {
    id: 4,
    image: "/images/j4.png",
    title: "UI/UX Designer",
    location: "Khulna, Bangladesh",
    jobType: "Part Time",
    urgency: "Hiring",
  },
  {
    id: 5,
    image: "/images/j5.png",
    title: "Project Manager",
    location: "Rajshahi, Bangladesh",
    jobType: "Full Time",
    urgency: "Featured",
  },
  {
    id: 6,
    image: "/images/j6.png",
    title: "Digital Marketing Specialist",
    location: "Dhaka, Bangladesh",
    jobType: "Remote",
    urgency: "New",
  },
  {
    id: 7,
    image: "/images/j7.png",
    title: "Data Analyst",
    location: "Cumilla, Bangladesh",
    jobType: "Full Time",
    urgency: "Urgent",
  },
  {
    id: 8,
    image: "/images/j8.png",
    title: "Mobile App Developer",
    location: "Barishal, Bangladesh",
    jobType: "Contract",
    urgency: "Hiring",
  },
  {
    id: 9,
    image: "/images/j9.png",
    title: "DevOps Engineer",
    location: "Mymensingh, Bangladesh",
    jobType: "Full Time",
    urgency: "Featured",
  },
];

const Job = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Featured Jobs"
        subHeading="Know your worth and find the job that qualify your life"
      />
      <div className="w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
        {jobs.map((job) => {
          return (
            <div key={job.id}>
              <JobCard job={job}></JobCard>
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <button className="px-10 py-4 bg-blue-700 text-white cursor-pointer rounded-lg hover:bg-blue-800 transition-all duration-200">
          Load More Listing
        </button>
      </div>
    </div>
  );
};

export default Job;
