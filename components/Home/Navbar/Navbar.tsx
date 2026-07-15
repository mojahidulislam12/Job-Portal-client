// "use client";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { HiBars3BottomRight } from "react-icons/hi2";
// import { LuNetwork } from "react-icons/lu";
// import ThemeToggler from "../../Helper/ThemeToggler";
// import { authClient, useSession } from "@/lib/auth-client";

// type Props = {
//   openNav: () => void;
// };

// const Navbar = ({ openNav }: Props) => {
//   const { data: session } = useSession();
//   const user = session?.user;
//   console.log(user);
//   const [navBg, setNavBg] = useState(false);
//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };
//   useEffect(() => {
//     const handler = () => {
//       if (window.scrollY >= 90) setNavBg(true);
//       if (window.scrollY < 90) setNavBg(false);
//     };
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);
//   const navLinks = [
//     {
//       label: "Browse Jobs",
//       href: "/jobs",
//     },
//     {
//       label: "Company",
//       href: "/company",
//     },
//     {
//       label: "Pricing",
//       href: "/pricing",
//     },
//   ];

//   const dashboardLinks = {
//     seeker: "/dashboard/seeker",
//     recruiter: "/dashboard/recruiter",
//     admin: "/dashboard/admin",
//   };

//   if (user?.email) {
//     navLinks.push({
//       label: "Dashboard",
//       href: dashboardLinks[user?.role || "seeker"],
//     });
//   }

//   return (
//     <div
//       className={`transition-all ${navBg ? "bg-white dark:bg-gray-900 shadow-md" : "fixed"} duration-200 h-[12vh] z-[10000] fixed w-full`}
//     >
//       <div className="flex items-center h-full justify-between w-[92%] mx-auto">
//         <div className="flex items-center sm:space-x-20">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col ">
//               <LuNetwork className="w-5 h-5 text-white dark:text-black"></LuNetwork>
//             </div>
//             <h1 className="text-xl hidden sm:block md:text-2xl text-cyan-800 dark:text-white font-bold">
//               Developer Hire
//             </h1>
//           </div>
//           {/* NavLinks */}
//           <div className="hidden lg:flex items-center">
//             <ul className="flex items-center space-x-10">
//               {navLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-base hover:text-cyan-700 dark:hover:text-cyan-200 font-medium transition-all duration-200"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {/* Button  */}
//         <div className="flex items-center space-x-4 ">
//           {/* Login Button */}
//           {user ? (
//             <>
//               <p>{user.name}</p>
//               <button
//                 onClick={handleSignOut}
//                 color="danger"
//                 //variant="flat"
//                 className="px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-red-600 text-white dark:bg-red-600 dark:hover:bg-white dark:hover:text-black hover:bg-gray-300 transition-all duration-300"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link href="/signin">
//               <button className="px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-900 hover:bg-gray-300 transition-all duration-300">
//                 Login
//               </button>
//             </Link>
//           )}

//           {/* Job post button */}
//           {/* <button className="px-8 py-2.5 text-sm hidden sm:block cursor-pointer rounded-lg bg-cyan-700 hover:bg-cyan-900 transition-all duration-200 text-white">
//             Job Post
//           </button> */}
//           {/* Theme Toggler */}
//           <ThemeToggler></ThemeToggler>
//           {/* Burger menu */}
//           <HiBars3BottomRight
//             onClick={openNav}
//             className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LuNetwork } from "react-icons/lu";
import { useRouter } from "next/navigation";
import ThemeToggler from "../../Helper/ThemeToggler";
import { authClient, useSession } from "@/lib/auth-client";

type Props = {
  openNav: () => void;
};

type UserRole = "seeker" | "recruiter" | "admin";

type SessionUser = {
  id: string;
  name: string;
  email: string;
  role?: UserRole;
};

const Navbar = ({ openNav }: Props) => {
  const router = useRouter();

  const { data: session } = useSession();

  const user = session?.user as SessionUser | undefined;

  const [navBg, setNavBg] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const navLinks: { label: string; href: string }[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Browse Jobs",
      href: "/jobs",
    },
    {
      label: "Company",
      href: "/company",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ];

  const dashboardLinks: Record<UserRole, string> = {
    seeker: "/dashboard/seeker",
    recruiter: "/dashboard/recruiter",
    admin: "/dashboard/admin",
  };

  const role: UserRole =
    user?.role === "admin" ||
    user?.role === "recruiter" ||
    user?.role === "seeker"
      ? user.role
      : "seeker";

  if (user?.email) {
    navLinks.push({
      label: "Dashboard",
      href: dashboardLinks[role],
    });
  }

  return (
    <div
      className={`${
        navBg ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      } transition-all duration-200 fixed top-0 left-0 w-full h-[12vh] z-[10000]`}
    >
      <div className="flex items-center justify-between h-full w-[92%] mx-auto">
        {/* Left Side */}
        <div className="flex items-center sm:space-x-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-cyan-800 dark:bg-white flex items-center justify-center">
              <LuNetwork className="w-5 h-5 text-white dark:text-black" />
            </div>

            <h1 className="hidden sm:block text-xl md:text-2xl font-bold text-cyan-800 dark:text-white">
              Developer Hire
            </h1>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base font-medium hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="hidden sm:block font-medium">{user.name}</span>

              <button
                onClick={handleSignOut}
                className="px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/signin">
              <button className="px-6 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                Login
              </button>
            </Link>
          )}

          <ThemeToggler />

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
