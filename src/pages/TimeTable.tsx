import { useState } from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";
import RoomIcon from "@mui/icons-material/Room";

interface ScheduleItem {
  course: string;
  code: string;
  section: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

const timetableData: ScheduleItem[] = [
  {
    course: "Probability & Statistics",
    code: "MS301T",
    section: "SE-B",
    monday: "-",
    tuesday: "-",
    wednesday: "CF-4 (13:30 - 15:30)",
    thursday: "-",
    friday: "CG-3 (08:30 - 09:30)",
  },
  {
    course: "Technical Report Writing",
    code: "HS211",
    section: "SE-B",
    monday: "CF-3 (15:30 - 16:30)",
    tuesday: "-",
    wednesday: "-",
    thursday: "CF-4 (10:30 - 11:30)",
    friday: "-",
  },
  {
    course: "Software Design & Architecture",
    code: "SE211T",
    section: "SE-B",
    monday: "-",
    tuesday: "-",
    wednesday: "CF-4 (15:30 - 16:30)",
    thursday: "CG-2 (14:30 - 15:30)",
    friday: "CF-3 (15:30 - 16:30)",
  },
  {
    course: "Software Design Lab",
    code: "SE211L",
    section: "SE-B",
    monday: "BF-03 (11:30 - 14:30)",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    course: "Operating Systems Lab",
    code: "SE204L",
    section: "SE-B",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "BF-02 (11:30 - 14:30)",
    friday: "-",
  },
  {
    course: "Operating Systems",
    code: "SE204T",
    section: "SE-B",
    monday: "CF-3 (16:30 - 17:30)",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "CF-3 (14:30 - 15:30)",
  },
  {
    course: "Database Systems Lab",
    code: "SE209L",
    section: "SE-B",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "CS-4 (09:30 - 12:30)",
  },
  {
    course: "Database Systems",
    code: "SE209T",
    section: "SE-B",
    monday: "CF-3 (14:30 - 15:30)",
    tuesday: "-",
    wednesday: "-",
    thursday: "CF-4 (08:30 - 10:30)",
    friday: "-",
  },
];

const TimeTable = () => {
  const [activeDay, setActiveDay] = useState<string>("all");

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Academic Schedule
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Class Time Table
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Spring 2025 • BS Software Engineering (Morning) Section B
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 font-bold text-xs text-indigo-700">
              Classes Active: Mon - Fri
            </span>
          </div>
        </div>
      </div>

      {/* Timetable Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ScheduleIcon className="w-4 h-4 text-indigo-600" />
            <h2 className="text-sm font-bold text-slate-800">Weekly Lecture & Lab Matrix</h2>
          </div>

          {/* Quick Day Filter for Mobile */}
          <div className="flex items-center gap-1 overflow-x-auto text-xs py-1">
            {["all", "monday", "wednesday", "thursday", "friday"].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setActiveDay(d)}
                className={`px-3 py-1 rounded-lg font-semibold uppercase text-[10px] transition-colors ${
                  activeDay === d
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Course Title & Code</th>
                {(activeDay === "all" || activeDay === "monday") && (
                  <th className="py-3.5 px-4">Monday</th>
                )}
                {(activeDay === "all" || activeDay === "tuesday") && (
                  <th className="py-3.5 px-4 text-center">Tuesday</th>
                )}
                {(activeDay === "all" || activeDay === "wednesday") && (
                  <th className="py-3.5 px-4">Wednesday</th>
                )}
                {(activeDay === "all" || activeDay === "thursday") && (
                  <th className="py-3.5 px-4">Thursday</th>
                )}
                {(activeDay === "all" || activeDay === "friday") && (
                  <th className="py-3.5 px-4">Friday</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {timetableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-900">{row.course}</div>
                    <span className="text-[11px] font-mono text-slate-400">{row.code}</span>
                  </td>

                  {(activeDay === "all" || activeDay === "monday") && (
                    <td className="py-3.5 px-4">
                      {row.monday !== "-" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-medium font-mono text-[11px]">
                          <RoomIcon className="w-3 h-3 text-indigo-500" />
                          {row.monday}
                        </span>
                      ) : (
                        <span className="text-slate-300">-</span>
                      )}
                    </td>
                  )}

                  {(activeDay === "all" || activeDay === "tuesday") && (
                    <td className="py-3.5 px-4 text-center">
                      <span className="text-slate-300">-</span>
                    </td>
                  )}

                  {(activeDay === "all" || activeDay === "wednesday") && (
                    <td className="py-3.5 px-4">
                      {row.wednesday !== "-" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-medium font-mono text-[11px]">
                          <RoomIcon className="w-3 h-3 text-indigo-500" />
                          {row.wednesday}
                        </span>
                      ) : (
                        <span className="text-slate-300">-</span>
                      )}
                    </td>
                  )}

                  {(activeDay === "all" || activeDay === "thursday") && (
                    <td className="py-3.5 px-4">
                      {row.thursday !== "-" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-medium font-mono text-[11px]">
                          <RoomIcon className="w-3 h-3 text-indigo-500" />
                          {row.thursday}
                        </span>
                      ) : (
                        <span className="text-slate-300">-</span>
                      )}
                    </td>
                  )}

                  {(activeDay === "all" || activeDay === "friday") && (
                    <td className="py-3.5 px-4">
                      {row.friday !== "-" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-medium font-mono text-[11px]">
                          <RoomIcon className="w-3 h-3 text-indigo-500" />
                          {row.friday}
                        </span>
                      ) : (
                        <span className="text-slate-300">-</span>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
