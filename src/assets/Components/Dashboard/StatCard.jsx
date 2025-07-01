import { FaArrowUp, FaArrowDown, FaEllipsisV } from "react-icons/fa";

export default function StatCard({ title, value, change, isUp, icon, color }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg p-4 text-white shadow-md transition-transform duration-300 hover:scale-[1.02] ${color}`}
    >
      <div className="absolute top-3 right-3 text-white/70">
        <FaEllipsisV />
      </div>

      <div className="flex items-center justify-between text-xl font-bold">
        <div className="flex items-center gap-2">
          {icon && <div className="text-2xl">{icon}</div>}
          <span>{value}</span>
        </div>
      </div>

      <div className="text-sm mt-1 flex items-center gap-1">
        <span className={isUp ? "text-green-200" : "text-red-200"}>
          ({change}{" "}
          {isUp ? (
            <FaArrowUp className="inline text-green-300" />
          ) : (
            <FaArrowDown className="inline text-red-300" />
          )}
          )
        </span>
      </div>

      <div className="mt-1 text-base">{title}</div>
    </div>
  );
}
