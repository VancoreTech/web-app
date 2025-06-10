import { ArrowUp, ArrowDown } from "lucide-react";

export const StatsCard = ({
  icon: Icon,
  title,
  value,
  change,
  period,
  color,
}) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200">
    <div className="flex items-center justify-between mb-4">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
      >
        {Icon && <Icon className="w-6 h-6 text-white" />}
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <div className="flex items-center text-sm">
        {change > 0 ? (
          <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
        ) : (
          <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
        )}
        <span className={change > 0 ? "text-[#027A48]" : "text-[#B42318]"}>
          {Math.abs(change)}%
        </span>
        <span className="text-gray-500 ml-1">{period}</span>
      </div>
    </div>
  </div>
);
