// import React from "react";
// import StatCard from "./StatCard";

// export const DashboardStats = ({ statsData = [] }) => {
//   return (
//     <div className="w-full max-w-7xl mx-auto p-4">
//       {/* Responsive Grid layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {statsData.map((stat, index) => (
//           <StatCard
//             key={stat.id || index}
//             title={stat.title}
//             value={stat.value}
//             icon={stat.icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

import React from "react";
import { IconType } from "react-icons";
import StatCard from "./StatCard";

interface Stat {
  id?: string | number;
  title: string;
  value: string | number;
  icon?: IconType;
}

interface DashboardStatsProps {
  statsData?: Stat[];
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ statsData = [] }) => {
  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <StatCard
            key={stat.id ?? index}
            title={stat.title}
            value={stat.value}
            //icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
