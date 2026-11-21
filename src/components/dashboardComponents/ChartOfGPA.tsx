import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const gpaData = [
  { semester: "Fall 2023", gpa: 3.20, sgpa: 3.20 },
  { semester: "Spring 2024", gpa: 3.65, sgpa: 3.95 },
  { semester: "Fall 2024", gpa: 3.82, sgpa: 3.98 },
  { semester: "Spring 2025 (Cur)", gpa: 3.97, sgpa: 3.95 },
];

export const ChartOfGPA = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-800">GPA Progression</h2>
            <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              <TrendingUpIcon className="w-3.5 h-3.5" />
              +0.77 Upward
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">Cumulative Grade Point Average (CGPA) Trajectory</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-slate-900">3.97</span>
          <span className="text-xs text-slate-400 block font-medium">Current CGPA</span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-64 sm:h-72 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={gpaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="gpaColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis
              dataKey="semester"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
            />
            <YAxis
              domain={[2.0, 4.0]}
              ticks={[2.0, 2.5, 3.0, 3.5, 4.0]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-slate-900 text-white p-2.5 rounded-xl shadow-lg text-xs space-y-1">
                      <p className="font-semibold text-slate-200">{data.semester}</p>
                      <p className="text-indigo-300 font-bold">CGPA: {data.gpa.toFixed(2)}</p>
                      <p className="text-slate-400">Semester GPA: {data.sgpa.toFixed(2)}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="gpa"
              stroke="#4f46e5"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#gpaColor)"
              dot={{ stroke: "#4f46e5", strokeWidth: 2, fill: "#ffffff", r: 4 }}
              activeDot={{ stroke: "#4f46e5", strokeWidth: 3, fill: "#ffffff", r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
