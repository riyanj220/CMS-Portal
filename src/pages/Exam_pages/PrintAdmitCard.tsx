import { useRef } from "react";
import { Link } from "react-router";
import { PrintButton } from "./PrintButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface CourseRow {
  courseCode: string;
  courseTitle: string;
  attendanceStatus: string;
  survey: string;
  examDate: string;
  startTime: string;
  endTime: string;
  room: string;
  seatNo: string;
}

const examCourses: CourseRow[] = [
  {
    courseCode: "MS-301T",
    courseTitle: "Probability & Statistics",
    attendanceStatus: "Allowed",
    survey: "Submitted",
    examDate: "16-July-2025",
    startTime: "14:00",
    endTime: "17:00",
    room: "GT-03",
    seatNo: "R4 C5",
  },
  {
    courseCode: "HS-211",
    courseTitle: "Technical Report Writing",
    attendanceStatus: "Allowed",
    survey: "Submitted",
    examDate: "18-July-2025",
    startTime: "14:00",
    endTime: "17:00",
    room: "GT-03",
    seatNo: "R4 C5",
  },
  {
    courseCode: "SE-211T",
    courseTitle: "Software Design & Architecture",
    attendanceStatus: "Allowed",
    survey: "Submitted",
    examDate: "21-July-2025",
    startTime: "14:00",
    endTime: "17:00",
    room: "GT-03",
    seatNo: "R4 C5",
  },
  {
    courseCode: "SE-204T",
    courseTitle: "Operating Systems",
    attendanceStatus: "Allowed",
    survey: "Submitted",
    examDate: "23-July-2025",
    startTime: "14:00",
    endTime: "17:00",
    room: "GT-03",
    seatNo: "R4 C5",
  },
  {
    courseCode: "SE-209T",
    courseTitle: "Database Systems",
    attendanceStatus: "Allowed",
    survey: "Submitted",
    examDate: "25-July-2025",
    startTime: "14:00",
    endTime: "17:00",
    room: "GT-03",
    seatNo: "R4 C5",
  },
];

export const PrintAdmitCard = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="w-full flex flex-col items-center space-y-4 pb-12">
      {/* Control Action Bar */}
      <div className="w-full max-w-[820px] bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="Back to Dashboard"
          >
            <ArrowBackIcon className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900">Official Admit Card</h1>
            <p className="text-xs text-slate-500">Spring 2025 Semester Examination Clearance</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <PrintButton printRef={printRef} />
        </div>
      </div>

      {/* Screen container: horizontal scroll on small devices, exact A4 layout for print */}
      <div className="w-full overflow-x-auto py-2 flex justify-start lg:justify-center">
        <div
          ref={printRef}
          className="admit-card-print-container shrink-0 w-[800px] bg-white p-6 border border-slate-300 shadow-md text-slate-900 rounded-lg font-sans text-xs select-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
            <div className="w-20 h-20 shrink-0">
              <img
                src={`${baseUrl}images/login-logo.png`}
                alt="SSUET Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `${baseUrl}images/login-logo.jpg`;
                }}
              />
            </div>

            <div className="text-center flex-1 px-4">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-slate-900">
                Sir Syed University of Engineering & Technology
              </h2>
              <p className="text-xs font-semibold text-slate-700 mt-0.5">
                Controller of Examinations • Spring 2025 Semester
              </p>
              <span className="inline-block mt-1 px-3 py-0.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded">
                Final Examination Admit Card
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <img
                src={`${baseUrl}images/qr.png`}
                alt="Verification QR"
                className="w-16 h-16 object-contain border border-slate-200 p-0.5"
              />
              <img
                src={`${baseUrl}images/avatar.png`}
                alt="Candidate"
                className="w-16 h-20 object-cover border border-slate-300 rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `${baseUrl}images/dp.png`;
                }}
              />
            </div>
          </div>

          {/* Student Profile Info Grid */}
          <div className="grid grid-cols-4 border border-slate-900 mt-4 text-[11px]">
            <div className="p-1.5 bg-slate-100 font-bold border-r border-b border-slate-900">Registration No:</div>
            <div className="p-1.5 border-r border-b border-slate-900 font-semibold font-mono">2023F-BSE-075</div>
            <div className="p-1.5 bg-slate-100 font-bold border-r border-b border-slate-900">Student Name:</div>
            <div className="p-1.5 border-b border-slate-900 font-semibold">Riyan Jamil</div>

            <div className="p-1.5 bg-slate-100 font-bold border-r border-b border-slate-900">Enrollment No:</div>
            <div className="p-1.5 border-r border-b border-slate-900 font-mono">2959/SE/2023F</div>
            <div className="p-1.5 bg-slate-100 font-bold border-r border-b border-slate-900">Father's Name:</div>
            <div className="p-1.5 border-b border-slate-900">Muhammad Jamil</div>

            <div className="p-1.5 bg-slate-100 font-bold border-r border-slate-900">Department / Program:</div>
            <div className="p-1.5 border-r border-slate-900">BS Software Engineering (Morning)</div>
            <div className="p-1.5 bg-slate-100 font-bold border-r border-slate-900">Semester & Section:</div>
            <div className="p-1.5">4th Semester • Section B</div>
          </div>

          {/* Instructions Box */}
          <div className="mt-3 p-2.5 bg-amber-50/60 border-l-4 border-amber-500 rounded text-[11px] text-amber-900">
            <div className="flex items-center gap-1 font-bold mb-1">
              <InfoOutlinedIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>Mandatory Candidate Instructions:</span>
            </div>
            <ul className="list-disc pl-4 space-y-0.5 text-[10.5px]">
              <li>Candidate must produce this original Admit Card along with the official University Student ID Card in every examination.</li>
              <li>Attendance below 75% (SOA) or pending course feedback automatically renders the admit card invalid for that course.</li>
              <li>Mobile phones, smartwatches, and programmable calculators are strictly prohibited in examination centers.</li>
            </ul>
          </div>

          {/* Exam Schedule Table */}
          <div className="mt-4">
            <h3 className="font-bold text-[11px] uppercase tracking-wider text-slate-800 mb-1">
              Authorized Examination Schedule
            </h3>
            <table className="w-full border-collapse border border-slate-900 text-[11px]">
              <thead>
                <tr className="bg-slate-200 text-slate-900 font-bold">
                  <th className="border border-slate-900 p-1 text-center w-8">#</th>
                  <th className="border border-slate-900 p-1 text-left">Course Code & Title</th>
                  <th className="border border-slate-900 p-1 text-center">Date</th>
                  <th className="border border-slate-900 p-1 text-center">Timings</th>
                  <th className="border border-slate-900 p-1 text-center">Room</th>
                  <th className="border border-slate-900 p-1 text-center">Seat</th>
                  <th className="border border-slate-900 p-1 text-center">Status</th>
                  <th className="border border-slate-900 p-1 text-center">Invigilator Sign</th>
                </tr>
              </thead>
              <tbody>
                {examCourses.map((c, i) => (
                  <tr key={i} className="border-b border-slate-300">
                    <td className="border border-slate-900 p-1 text-center font-mono">{i + 1}</td>
                    <td className="border border-slate-900 p-1 font-medium">
                      <span className="font-bold font-mono text-slate-800 mr-1">{c.courseCode}</span>
                      <span>{c.courseTitle}</span>
                    </td>
                    <td className="border border-slate-900 p-1 text-center font-mono">{c.examDate}</td>
                    <td className="border border-slate-900 p-1 text-center font-mono">{c.startTime} - {c.endTime}</td>
                    <td className="border border-slate-900 p-1 text-center font-semibold">{c.room}</td>
                    <td className="border border-slate-900 p-1 text-center font-mono">{c.seatNo}</td>
                    <td className="border border-slate-900 p-1 text-center text-emerald-700 font-bold">Cleared</td>
                    <td className="border border-slate-900 p-1 text-center"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Clearance & Declaration */}
          <div className="mt-4 flex items-center justify-between p-2 border border-slate-300 rounded bg-slate-50 text-[11px]">
            <div>
              <span className="font-bold text-slate-700">Financial Dues Status: </span>
              <span className="font-semibold text-emerald-700 font-mono">PKR 0.00 Overdue (Exam Clear)</span>
            </div>
            <div>
              <span className="font-bold text-slate-700">Issue Timestamp: </span>
              <span className="font-mono text-slate-600">15-May-2025 09:30 AM</span>
            </div>
          </div>

          {/* Signatures */}
          <div className="mt-8 pt-4 flex justify-between items-end border-t border-slate-300 text-[11px]">
            <div className="text-center">
              <div className="w-40 border-b border-slate-900 pb-1 mb-1"></div>
              <p className="font-bold text-slate-800">Candidate's Signature</p>
            </div>
            <div className="text-center">
              <div className="w-48 border-b border-slate-900 pb-1 mb-1 text-xs font-serif italic text-slate-600">
                Dr. M. A. Qureshi
              </div>
              <p className="font-bold text-slate-800">Controller of Examinations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintAdmitCard;
