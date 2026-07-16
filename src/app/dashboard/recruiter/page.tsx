// "use client";
// import React from "react";
// import { useSession } from "@/lib/auth-client";
// import {
//   Briefcase,
//   Persons,
//   Thunderbolt,
//   CircleCheck,
// } from "@gravity-ui/icons";
// import { DashboardStats } from "../../../../components/dashboard/DashboardStats";

// const RecruiterDashboardHomePage = () => {
//   const { data: session, isPending } = useSession();

//   if (isPending) {
//     return <div>Loading...</div>;
//   }

//   const recruiterStats = [
//     { title: "Total Job Posts", value: "48", icon: Briefcase },
//     { title: "Total Applicants", value: "1,284", icon: Persons },
//     { title: "Active Jobs", value: "18", icon: Thunderbolt },
//     { title: "Jobs Closed", value: "32", icon: CircleCheck },
//   ];

//   const user = session?.user;
//   console.log("Session data in RecruiterDashboardHomePage:", session);

//   return (
//     <div>
//       <h2 className="text-4xl">Welcome back, {user?.name}</h2>
//       <DashboardStats statsData={recruiterStats} />
//     </div>
//   );
// };

// export default RecruiterDashboardHomePage;

// "use client";

// import React from "react";
// import { useSession } from "@/lib/auth-client";
// import {
//   Briefcase,
//   Persons,
//   Thunderbolt,
//   CircleCheck,
// } from "@gravity-ui/icons";
// import DashboardStats from "../../../../components/dashboard/DashboardStats";

// type UserRole = "seeker" | "recruiter" | "admin";

// type SessionUser = {
//   id: string;
//   name: string;
//   email: string;
//   role?: UserRole;
// };

// type StatItem = {
//   title: string;
//   value: string;
//   icon: React.ElementType;
// };

// const RecruiterDashboardHomePage: React.FC = () => {
//   const { data: session, isPending } = useSession();

//   if (isPending) {
//     return <div>Loading...</div>;
//   }

//   const recruiterStats: StatItem[] = [
//     {
//       title: "Total Job Posts",
//       value: "48",
//       icon: Briefcase,
//     },
//     {
//       title: "Total Applicants",
//       value: "1,284",
//       icon: Persons,
//     },
//     {
//       title: "Active Jobs",
//       value: "18",
//       icon: Thunderbolt,
//     },
//     {
//       title: "Jobs Closed",
//       value: "32",
//       icon: CircleCheck,
//     },
//   ];

//   const user = session?.user as SessionUser | undefined;

//   console.log("Session data:", session);

//   return (
//     <div className="space-y-6 p-8">
//       <h2 className="text-4xl font-bold">
//         Welcome back, {user?.name ?? "Recruiter"}
//       </h2>

//       <DashboardStats statsData={recruiterStats} />
//     </div>
//   );
// };

// export default RecruiterDashboardHomePage;

"use client";

import React from "react";
import { useSession } from "@/lib/auth-client";
import {
  Briefcase,
  Persons,
  Thunderbolt,
  CircleCheck,
} from "@gravity-ui/icons";
import DashboardStats from "../../../../components/dashboard/DashboardStats";

type UserRole = "seeker" | "recruiter" | "admin";

type SessionUser = {
  id: string;
  name: string;
  email: string;
  role?: UserRole;
};

type StatItem = {
  id: number;
  title: string;
  value: string | number;
  icon: typeof Briefcase;
};

const RecruiterDashboardHomePage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  const recruiterStats: StatItem[] = [
    {
      id: 1,
      title: "Total Job Posts",
      value: 48,
      icon: Briefcase,
    },
    {
      id: 2,
      title: "Total Applicants",
      value: 1284,
      icon: Persons,
    },
    {
      id: 3,
      title: "Active Jobs",
      value: 18,
      icon: Thunderbolt,
    },
    {
      id: 4,
      title: "Jobs Closed",
      value: 32,
      icon: CircleCheck,
    },
  ];

  const user = session?.user as SessionUser | undefined;

  return (
    <div className="space-y-6 p-8">
      <h2 className="text-4xl font-bold">
        Welcome back, {user?.name ?? "Recruiter"}
      </h2>

      <DashboardStats statsData={recruiterStats} />
    </div>
  );
};

export default RecruiterDashboardHomePage;
