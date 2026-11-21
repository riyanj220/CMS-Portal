import { Link } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const courses = [
  {
    name: "Operating Systems Lab",
    code: "SE204L",
    attendance: 100,
    teacher: "Engr. Samrah Shafique",
    room: "BF-02",
  },
  {
    name: "Probability & Statistics",
    code: "MS301T",
    attendance: 96,
    teacher: "Muhammad Mobin Anwer Siddiqui",
    room: "CF-4, CG-3",
  },
  {
    name: "Software Design & Architecture Lab",
    code: "SE211L",
    attendance: 100,
    teacher: "Engr. Dur-E-Shawar Agha",
    room: "BF-03",
  },
  {
    name: "Software Design & Architecture",
    code: "SE211T",
    attendance: 92,
    teacher: "Engr. Dur-E-Shawar Agha",
    room: "CF-3, CG-2",
  },
  {
    name: "Technical Report Writing",
    code: "HS211",
    attendance: 94,
    teacher: "Syeda Beena Bukhari",
    room: "CF-3, CF-4",
  },
];

export const OverviewCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">Academic Overview</h2>
          <p className="text-xs text-slate-500 mt-0.5">Spring 2025 Enrolled Courses & Attendance</p>
        </div>
        <Link
          to="/dashboard/course"
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
        >
          <span>All Courses</span>
          <ArrowForwardIcon className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto mt-3 -mx-5 px-5">
        <table className="w-full text-left text-xs whitespace-nowrap">
          <thead>
            <tr className="border-b border-slate-100 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-3">Course</th>
              <th className="py-3 px-3">Room</th>
              <th className="py-3 px-3">Instructor</th>
              <th className="py-3 px-3 text-right">Attendance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {courses.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-3 font-medium text-slate-900">
                  <div className="font-semibold">{row.name}</div>
                  <div className="text-[11px] text-slate-400 font-normal">{row.code}</div>
                </td>
                <td className="py-3 px-3">
                  <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">
                    {row.room}
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-600">{row.teacher}</td>
                <td className="py-3 px-3 text-right">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      row.attendance >= 90
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {row.attendance}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
