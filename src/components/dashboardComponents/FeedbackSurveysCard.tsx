import { Link } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const surveys = [
  {
    title: "Course Evaluation: Intro to Database Systems",
    faculty: "Engr. Kiran Hidayat",
    deadline: "20-Jul-2025",
    status: "Completed",
  },
  {
    title: "Teacher Evaluation: Probability & Statistics",
    faculty: "M. Mobin Anwer Siddiqui",
    deadline: "20-Jul-2025",
    status: "Pending",
  },
  {
    title: "Faculty Feedback: Software Architecture",
    faculty: "Engr. Dur-E-Shawar Agha",
    deadline: "20-Jul-2025",
    status: "Pending",
  },
];

export const FeedbackSurveysCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">QEC Surveys & Feedback</h2>
          <p className="text-xs text-slate-500 mt-0.5">Quality Enhancement Cell Online Evaluations</p>
        </div>
        <Link
          to="/dashboard/general/online-survey"
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
        >
          <span>Surveys</span>
          <ArrowForwardIcon className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Survey List */}
      <div className="mt-3 space-y-2.5">
        {surveys.map((survey, index) => {
          const isPending = survey.status === "Pending";

          return (
            <div
              key={index}
              className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
                <AssignmentTurnedInIcon className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isPending ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {survey.status}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Closes: {survey.deadline}</span>
                </div>
                <p className="font-semibold text-slate-800 text-xs mt-1 leading-snug line-clamp-1">
                  {survey.title}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">{survey.faculty}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackSurveysCard;
