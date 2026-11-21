import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

interface CourseRecord {
  course: string;
  courseCode: string;
  semester: string;
  session: string;
  sectionCode: string;
  faculty: string;
  timings: string;
  crHours: number;
  status: string;
}

const coursesData: CourseRecord[] = [
  {
    course: "Probability & Statistics",
    courseCode: "MS301T",
    semester: "4th",
    session: "Spring 2025",
    sectionCode: "Spring 2025-2023F-BS-SE-MS301T-B",
    faculty: "Muhammad Mobin Anwer Siddiqui",
    timings: "CF-4 Wed (13:30 - 15:30), CG-3 Fri (08:30 - 09:30)",
    crHours: 3,
    status: "In Progress",
  },
  {
    course: "Technical Report Writing",
    courseCode: "HS211",
    semester: "4th",
    session: "Spring 2025",
    sectionCode: "Spring 2025-2023F-BS-SE-HS211-B",
    faculty: "Syeda Beena Bukhari",
    timings: "CF-3 Mon (15:30 - 16:30), CF-4 Thu (10:30 - 11:30)",
    crHours: 3,
    status: "In Progress",
  },
  {
    course: "Software Design & Architecture",
    courseCode: "SE211T",
    semester: "4th",
    session: "Spring 2025",
    sectionCode: "Spring 2025-2023F-BS-SE-SE211T-B",
    faculty: "Engr. Dur-E-Shawar Agha",
    timings: "CF-3 Fri (15:30 - 16:30), CF-4 Wed (15:30 - 16:30), CG-2 Thu (14:30 - 15:30)",
    crHours: 3,
    status: "In Progress",
  },
  {
    course: "Software Design & Architecture Lab",
    courseCode: "SE211L",
    semester: "4th",
    session: "Spring 2025",
    sectionCode: "Spring 2025-2023F-BS-SE-SE211L-B",
    faculty: "Engr. Muhammad Huzaifa",
    timings: "BF-03 Mon (11:30 - 14:30)",
    crHours: 1,
    status: "In Progress",
  },
  {
    course: "Operating Systems Lab",
    courseCode: "SE204L",
    semester: "4th",
    session: "Spring 2025",
    sectionCode: "Spring 2025-2023F-BS-SE-SE204L-B",
    faculty: "Engr. Samrah Shafique",
    timings: "BF-02 Thu (11:30 - 14:30)",
    crHours: 1,
    status: "In Progress",
  },
  {
    course: "Operating Systems",
    courseCode: "SE204T",
    semester: "4th",
    session: "Spring 2025",
    sectionCode: "Spring 2025-2023F-BS-SE-SE204T-B",
    faculty: "Engr. Farheen Qazi",
    timings: "CF-3 Fri (14:30 - 15:30), CF-3 Mon (16:30 - 17:30)",
    crHours: 3,
    status: "In Progress",
  },
  {
    course: "Introduction to Database Systems Lab",
    courseCode: "SE209L",
    semester: "4th",
    session: "Spring 2025",
    sectionCode: "Spring 2025-2023F-BS-SE-SE209L-B",
    faculty: "Engr. Sumreena Bano",
    timings: "CS-4 Fri (09:30 - 12:30)",
    crHours: 1,
    status: "In Progress",
  },
  {
    course: "Introduction to Database Systems",
    courseCode: "SE209T",
    semester: "4th",
    session: "Spring 2025",
    sectionCode: "Spring 2025-2023F-BS-SE-SE209T-B",
    faculty: "Engr. Kiran Hidayat",
    timings: "CF-3 Mon (14:30 - 15:30), CF-4 Thu (08:30 - 10:30)",
    crHours: 3,
    status: "In Progress",
  },
];

const Course = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = coursesData.filter((c) =>
    c.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.faculty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCredits = coursesData.reduce((acc, curr) => acc + curr.crHours, 0);

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Academic Curriculum
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Registered Courses
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Spring 2025 Semester • 4th Semester BS Software Engineering (Morning)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 font-medium text-xs text-slate-700">
              Total Courses: <strong>{coursesData.length}</strong>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-indigo-50 font-bold text-xs text-indigo-700">
              Credits: {totalCredits} Cr. Hrs
            </span>
          </div>
        </div>
      </div>

      {/* Search & Actions Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4">
        <div className="relative max-w-md">
          <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by course title, code or instructor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Courses Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SchoolIcon className="w-4 h-4 text-indigo-600" />
            <h2 className="text-sm font-bold text-slate-800">Enrolled Course Portfolio</h2>
          </div>
          <span className="text-xs text-slate-500">{filteredCourses.length} Courses Listed</span>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Course Name & Code</th>
                <th className="py-3.5 px-4">Session</th>
                <th className="py-3.5 px-4 text-center">Cr. Hrs</th>
                <th className="py-3.5 px-4">Faculty Member</th>
                <th className="py-3.5 px-4">Class Schedule & Room</th>
                <th className="py-3.5 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCourses.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-900">{row.course}</div>
                    <span className="text-[11px] font-mono text-slate-400">{row.courseCode}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-slate-600 font-medium">{row.session}</span>
                    <div className="text-[10px] text-slate-400">Semester {row.semester}</div>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-block px-2.5 py-0.5 rounded font-mono font-bold text-[11px] bg-slate-100 text-slate-700">
                      {row.crHours}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <PersonOutlineIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{row.faculty}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate">
                    <div className="flex items-center gap-1.5">
                      <AccessTimeIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{row.timings}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700">
                      {row.status}
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

export default Course;
