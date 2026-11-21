import { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TimelineIcon from "@mui/icons-material/Timeline";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface AttendanceRecord {
  courseTitle: string;
  courseCode: string;
  scheduled: number;
  conducted: number;
  attended: number;
  percentage: number;
  finalAttendance: number;
}

const attendanceRows: AttendanceRecord[] = [
  { courseTitle: "Probability & Statistics", courseCode: "MS301T", scheduled: 32, conducted: 30, attended: 29, percentage: 96.6, finalAttendance: 96.6 },
  { courseTitle: "Technical Report Writing", courseCode: "HS211", scheduled: 32, conducted: 28, attended: 26, percentage: 92.8, finalAttendance: 92.8 },
  { courseTitle: "Software Design & Architecture", courseCode: "SE211T", scheduled: 32, conducted: 30, attended: 28, percentage: 93.3, finalAttendance: 93.3 },
  { courseTitle: "Software Design & Architecture Lab", courseCode: "SE211L", scheduled: 16, conducted: 14, attended: 14, percentage: 100.0, finalAttendance: 100.0 },
  { courseTitle: "Operating Systems Lab", courseCode: "SE204L", scheduled: 16, conducted: 15, attended: 15, percentage: 100.0, finalAttendance: 100.0 },
  { courseTitle: "Operating Systems", courseCode: "SE204T", scheduled: 32, conducted: 29, attended: 27, percentage: 93.1, finalAttendance: 93.1 },
  { courseTitle: "Introduction to Database Systems Lab", courseCode: "SE209L", scheduled: 16, conducted: 14, attended: 14, percentage: 100.0, finalAttendance: 100.0 },
  { courseTitle: "Introduction to Database Systems", courseCode: "SE209T", scheduled: 32, conducted: 30, attended: 28, percentage: 93.3, finalAttendance: 93.3 },
];

const modalAttendanceEntries = [
  { dayTime: "Monday [14:30 - 15:30]", date: "21-Apr-2025", status: "Present" },
  { dayTime: "Thursday [08:30 - 10:30]", date: "17-Apr-2025", status: "Present" },
  { dayTime: "Monday [14:30 - 15:30]", date: "14-Apr-2025", status: "Present" },
  { dayTime: "Thursday [08:30 - 10:30]", date: "10-Apr-2025", status: "Present" },
  { dayTime: "Monday [14:30 - 15:30]", date: "07-Apr-2025", status: "Present" },
  { dayTime: "Thursday [08:30 - 10:30]", date: "03-Apr-2025", status: "Present" },
  { dayTime: "Monday [14:30 - 15:30]", date: "31-Mar-2025", status: "Present" },
  { dayTime: "Thursday [08:30 - 10:30]", date: "27-Mar-2025", status: "Present" },
  { dayTime: "Monday [14:30 - 15:30]", date: "24-Mar-2025", status: "Present" },
  { dayTime: "Thursday [08:30 - 10:30]", date: "20-Mar-2025", status: "Leave" },
  { dayTime: "Monday [14:30 - 15:30]", date: "17-Mar-2025", status: "Present" },
];

const Attendance = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<AttendanceRecord | null>(null);

  const handleOpenModal = (course: AttendanceRecord) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const avgAttendance = (
    attendanceRows.reduce((sum, r) => sum + r.finalAttendance, 0) / attendanceRows.length
  ).toFixed(1);

  return (
    <div className="space-y-6 pb-12">
      {/* Attendance Detail Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "92%", sm: 540 },
            maxHeight: "85vh",
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 24,
            p: { xs: 3, sm: 4 },
            overflowY: "auto",
          }}
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Attendance Register Log</h3>
              <p className="text-xs text-indigo-600 font-semibold">{selectedCourse?.courseTitle}</p>
            </div>
            <IconButton size="small" onClick={() => setModalOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="space-y-2 mt-2">
            {modalAttendanceEntries.map((log, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs"
              >
                <div>
                  <p className="font-semibold text-slate-800">{log.dayTime}</p>
                  <p className="text-[11px] text-slate-400 font-mono">{log.date}</p>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                    log.status === "Present"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {log.status}
                </span>
              </div>
            ))}
          </div>
        </Box>
      </Modal>

      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Academic Standing
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Course Attendance Record
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Spring 2025 Semester • Minimum 75% attendance required for exam eligibility
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 font-bold text-xs text-emerald-800">
              Semester Average: {avgAttendance}% (Clear)
            </span>
          </div>
        </div>
      </div>

      {/* Attendance Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TimelineIcon className="w-4 h-4 text-indigo-600" />
            <h2 className="text-sm font-bold text-slate-800">Course Attendance Breakdown</h2>
          </div>
          <span className="text-xs text-slate-500">{attendanceRows.length} Courses Tracked</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Course Name & Code</th>
                <th className="py-3.5 px-4 text-center">Scheduled</th>
                <th className="py-3.5 px-4 text-center">Conducted</th>
                <th className="py-3.5 px-4 text-center">Attended</th>
                <th className="py-3.5 px-4 text-center">Percentage</th>
                <th className="py-3.5 px-4 text-center">Exam Status</th>
                <th className="py-3.5 px-4 text-center">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {attendanceRows.map((row) => {
                const isSafe = row.finalAttendance >= 75;

                return (
                  <tr key={row.courseCode} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900">{row.courseTitle}</div>
                      <span className="text-[11px] font-mono text-slate-400">{row.courseCode}</span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono text-slate-600">{row.scheduled}</td>
                    <td className="py-3.5 px-4 text-center font-mono text-slate-600">{row.conducted}</td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-800">{row.attended}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="font-bold text-slate-900 font-mono">{row.finalAttendance}%</span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                          isSafe
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {isSafe ? "Eligible" : "Short of Attendance (SOA)"}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => handleOpenModal(row)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-indigo-600 hover:bg-indigo-50 font-semibold transition-colors"
                      >
                        <VisibilityIcon className="w-3.5 h-3.5" />
                        <span>Log</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
