import { RocketIcon, FileTextIcon, PackageIcon } from "lucide-react";

const orderStats = [
  {
    icon: RocketIcon,
    count: 26,
    label: "Total Orders",
    color: "blue",
  },
  {
    icon: FileTextIcon,
    count: 5,
    label: "Pending Orders",
    color: "yellow",
  },
  {
    icon: PackageIcon,
    count: 21,
    label: "Completed Orders",
    color: "green",
  },
];

export default function OrderStatusCards() {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-5">
        {orderStats.map(({ icon: Icon, count, label, color }, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-md bg-${color}-50`}
          >
            <div className={`text-${color}-500 bg-white p-3`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-semibold text-black">{String(count).padStart(2, "0")}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
