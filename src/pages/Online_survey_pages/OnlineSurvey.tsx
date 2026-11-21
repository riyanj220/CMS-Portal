import { useNavigate } from "react-router";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const surveyRows = [
  {
    type: "course",
    id: "1",
    feedback: "Course Evaluation by Students",
    session: "Spring 2025",
    course: "Introduction to Database Systems",
    code: "SE209T",
    faculty: "Engr. Kiran Hidayat",
    fromDate: "18-Jun-2025",
    toDate: "20-Jul-2025",
    status: "Submitted",
  },
  {
    type: "course",
    id: "2",
    feedback: "Course Evaluation by Students",
    session: "Spring 2025",
    course: "Probability & Statistics",
    code: "MS301T",
    faculty: "Muhammad Mobin Anwer Siddiqui",
    fromDate: "18-Jun-2025",
    toDate: "20-Jul-2025",
    status: "Pending",
  },
  {
    type: "teacher",
    id: "3",
    feedback: "Teacher Evaluation by Students",
    session: "Spring 2025",
    course: "Software Design & Architecture",
    code: "SE211T",
    faculty: "Engr. Dur-E-Shawar Agha",
    fromDate: "18-Jun-2025",
    toDate: "20-Jul-2025",
    status: "Pending",
  },
  {
    type: "teacher",
    id: "4",
    feedback: "Teacher Evaluation by Students",
    session: "Spring 2025",
    course: "Operating Systems",
    code: "SE204T",
    faculty: "Engr. Farheen Qazi",
    fromDate: "18-Jun-2025",
    toDate: "20-Jul-2025",
    status: "Submitted",
  },
];

export const OnlineSurvey = () => {
  const navigate = useNavigate();

  const handleFormClick = (type: string, id: string) => {
    navigate(`/dashboard/general/online-survey/${type}/${id}`);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Quality Enhancement Cell (QEC)
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Online Feedback & Evaluation Surveys
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Teacher and course assessment forms for Spring 2025 semester quality assurance
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 font-bold text-xs text-indigo-700">
              Mandatory For Admit Card Clearance
            </span>
          </div>
        </div>
      </div>

      {/* Surveys Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AssignmentTurnedInIcon className="w-4 h-4 text-indigo-600" />
            <h2 className="text-sm font-bold text-slate-800">Assigned Evaluations</h2>
          </div>
          <span className="text-xs text-slate-500">{surveyRows.length} Surveys Total</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Survey Type</th>
                <th className="py-3.5 px-4">Target Course</th>
                <th className="py-3.5 px-4">Faculty Member</th>
                <th className="py-3.5 px-4">Active Window</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {surveyRows.map((row) => {
                const isSubmitted = row.status === "Submitted";

                return (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-slate-900 block">{row.feedback}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{row.session}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-800">{row.course}</div>
                      <span className="text-[11px] font-mono text-slate-400">{row.code}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">{row.faculty}</td>
                    <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">
                      {row.fromDate} - {row.toDate}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          isSubmitted
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {isSubmitted && <CheckCircleIcon className="w-3 h-3" />}
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleFormClick(row.type, row.id)}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-semibold text-xs transition-colors ${
                          isSubmitted
                            ? "bg-slate-100 hover:bg-slate-200 text-slate-700"
                            : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                        }`}
                      >
                        <span>{isSubmitted ? "Review" : "Fill Form"}</span>
                        <ArrowForwardIcon className="w-3.5 h-3.5" />
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

export default OnlineSurvey;
