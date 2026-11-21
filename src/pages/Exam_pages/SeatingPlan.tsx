import EventSeatIcon from "@mui/icons-material/EventSeat";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const seatingData = [
  {
    examDate: "05-May-2025",
    startTime: "15:30",
    endTime: "17:00",
    course: "Operating Systems",
    code: "SE204T",
    room: "CG-6",
    seat: "Row 3, Seat 12",
    block: "Block C",
  },
  {
    examDate: "06-May-2025",
    startTime: "15:30",
    endTime: "17:00",
    course: "Technical Report Writing",
    code: "HS211",
    room: "CF-2",
    seat: "Row 1, Seat 08",
    block: "Block C",
  },
  {
    examDate: "07-May-2025",
    startTime: "15:30",
    endTime: "17:00",
    course: "Introduction to Database Systems",
    code: "SE209T",
    room: "CF-2",
    seat: "Row 4, Seat 02",
    block: "Block C",
  },
  {
    examDate: "08-May-2025",
    startTime: "15:30",
    endTime: "17:00",
    course: "Probability & Statistics",
    code: "MS301T",
    room: "CF-2",
    seat: "Row 2, Seat 15",
    block: "Block C",
  },
  {
    examDate: "09-May-2025",
    startTime: "15:30",
    endTime: "17:00",
    course: "Software Design & Architecture",
    code: "SE211T",
    room: "CG-6",
    seat: "Row 5, Seat 04",
    block: "Block C",
  },
];

export const SeatingPlan = () => {
  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Examination Hall Seating
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Midterm Seating Plan
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Official Room & Desk Allocations • Spring 2025 Examinations
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 font-semibold text-indigo-700">
              Candidate: 2023F-BSE-075
            </span>
          </div>
        </div>
      </div>

      {/* Seating Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">Assigned Exam Venues & Desks</h2>
          <span className="text-xs text-slate-500">{seatingData.length} Scheduled Papers</span>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Exam Date</th>
                <th className="py-3.5 px-4">Course Details</th>
                <th className="py-3.5 px-4">Time Slot</th>
                <th className="py-3.5 px-4">Room & Block</th>
                <th className="py-3.5 px-4">Desk / Seat</th>
                <th className="py-3.5 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {seatingData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900 font-mono">
                    {row.examDate}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-900">{row.course}</div>
                    <span className="text-[11px] text-slate-400 font-mono">{row.code}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    <div className="flex items-center gap-1.5 font-mono">
                      <AccessTimeIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{row.startTime} - {row.endTime}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5 font-medium text-slate-800">
                      <RoomIcon className="w-3.5 h-3.5 text-indigo-500" />
                      <span className="font-bold">{row.room}</span>
                      <span className="text-slate-400 text-[11px]">({row.block})</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5">
                      <EventSeatIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-mono">
                        {row.seat}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                      Confirmed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SeatingPlan;
