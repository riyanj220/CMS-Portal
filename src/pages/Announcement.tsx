import { useState } from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import SearchIcon from "@mui/icons-material/Search";
import EventNoteIcon from "@mui/icons-material/EventNote";

interface NoticeItem {
  id: number;
  title: string;
  category: "Exams" | "Academic" | "Finance" | "General";
  date: string;
  department: string;
  urgent?: boolean;
  content: string;
}

const notices: NoticeItem[] = [
  {
    id: 1,
    title: "Final Admit Cards Issuance for Spring 2025 Examinations",
    category: "Exams",
    date: "15-May-2025",
    department: "Controller of Examinations",
    urgent: true,
    content: "All registered students of Bachelor programs are instructed to print their official Admit Card through the Student Portal after clearing all semester tuition fee dues.",
  },
  {
    id: 2,
    title: "Midterm Examination Detailed Date Sheet & Seating Arrangements",
    category: "Exams",
    date: "12-May-2025",
    department: "Examination Department",
    urgent: true,
    content: "The complete examination schedule for Spring 2025 has been finalized. Students must verify their assigned room and desk numbers prior to the test date.",
  },
  {
    id: 3,
    title: "Final Year Project (FYP-I) Proposal Submission Extended",
    category: "Academic",
    date: "08-May-2025",
    department: "Department of Software Engineering",
    content: "The deadline for submission of FYP-I preliminary project synopsis and supervisor consent form has been extended till Friday, May 23, 2025.",
  },
  {
    id: 4,
    title: "Semester Fee Payment Deadline & Surcharge Waiver Notice",
    category: "Finance",
    date: "02-May-2025",
    department: "Directorate of Finance",
    content: "Students are advised to pay their Spring 2025 fee balance via KuickPay or Allied Bank branches before May 30, 2025 to avoid late fee penalty surcharge.",
  },
  {
    id: 5,
    title: "Quality Enhancement Cell (QEC) Online Survey Registration Open",
    category: "Academic",
    date: "28-Apr-2025",
    department: "Quality Enhancement Cell",
    content: "Faculty and Course Evaluation forms for Spring 2025 are now active in the Student Portal. Filling out all pending surveys is mandatory to download the Admit Card.",
  },
  {
    id: 6,
    title: "Annual SSUET Inter-Departmental Sports Olympiad 2025",
    category: "General",
    date: "20-Apr-2025",
    department: "Sports & Extracurricular Directorate",
    content: "Registration is open for Cricket, Futsal, Table Tennis, and Badminton tournament. Interested teams may contact the Sports Department.",
  },
];

const Announcement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredNotices = notices.filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || n.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Official Campus Notices
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Announcements & Circulars
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Official university directives, exam notifications, and academic circulars
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 font-bold text-xs text-indigo-700">
              {notices.length} Active Circulars
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search circulars by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-1">
          {["All", "Exams", "Academic", "Finance", "General"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-semibold text-xs transition-colors shrink-0 ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div
                  className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                    notice.urgent ? "bg-red-50 text-red-600" : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  <CampaignIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        notice.urgent
                          ? "bg-red-100 text-red-800"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {notice.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Issued by: <strong>{notice.department}</strong>
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mt-1.5">
                    {notice.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {notice.content}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0 sm:self-start bg-slate-50 px-3 py-1.5 rounded-xl font-mono">
                <EventNoteIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>{notice.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
