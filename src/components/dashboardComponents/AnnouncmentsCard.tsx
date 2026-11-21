import { Link } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignIcon from "@mui/icons-material/Campaign";

const announcements = [
  {
    title: "Midterm Examination Schedule Released",
    date: "June 05, 2025",
    tag: "Exams",
    urgent: true,
  },
  {
    title: "FYP Proposal Submission Deadline Extended",
    date: "June 03, 2025",
    tag: "Academic",
    urgent: false,
  },
  {
    title: "Campus Closed on Account of Eid Holidays",
    date: "May 30, 2025",
    tag: "Holiday",
    urgent: false,
  },
];

const AnnouncmentsCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">Campus Notices</h2>
          <p className="text-xs text-slate-500 mt-0.5">Official SSUET Circulars & Announcements</p>
        </div>
        <Link
          to="/dashboard/general/announcements"
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
        >
          <span>All Notices</span>
          <ArrowForwardIcon className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Announcements List */}
      <div className="mt-3 space-y-2.5">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors flex items-start gap-3"
          >
            <div className={`p-2 rounded-lg shrink-0 ${item.urgent ? "bg-red-50 text-red-600" : "bg-indigo-50 text-indigo-600"}`}>
              <CampaignIcon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.urgent ? "bg-red-100 text-red-700" : "bg-slate-200 text-slate-700"}`}>
                  {item.tag}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
              </div>
              <p className="font-semibold text-slate-800 text-xs mt-1 leading-snug line-clamp-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncmentsCard;
