// import React from "react";
// import { Card } from "@heroui/react";
// interface StatCardProps {
//   title: string;
//   value: string | number;
//   icon?: LucideIcon;
//   className?: string;
// }
// export const StatCard: React.FC<StatCardProps> = ({
//   title,
//   value,
//   icon: Icon,
//   className = "",
// }) => {
//   return (
//     <Card
//       className={`bg-[#18181b] border border-neutral-800 rounded-2xl p-2 ${className}`}
//     >
//       <Card.Content className="flex flex-col gap-6 justify-between p-4">
//         {/* Icon Wrapper */}
//         {Icon && (
//           <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-800 text-neutral-300">
//             <Icon width={20} height={20} />
//           </div>
//         )}

//         {/* Content */}
//         <div className="flex flex-col gap-2">
//           <span className="text-sm font-medium text-neutral-400">{title}</span>
//           <span className="text-3xl font-semibold text-white tracking-tight">
//             {value}
//           </span>
//         </div>
//       </Card.Content>
//     </Card>
//   );
// };

import React from "react";
import { Card } from "@heroui/react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  className = "",
}) => {
  return (
    <Card
      className={`bg-[#18181b] border border-neutral-800 rounded-2xl ${className}`}
    >
      <Card.Content className="flex flex-col justify-between gap-6 p-6">
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800 text-neutral-300">
            <Icon size={20} />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-neutral-400">{title}</span>

          <span className="text-3xl font-semibold tracking-tight text-white">
            {value}
          </span>
        </div>
      </Card.Content>
    </Card>
  );
};

export default StatCard;
