import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import GradeIcon from "@mui/icons-material/Grade";

const sessions = ["Spring 2025", "Fall 2024", "Spring 2024", "Fall 2023"];

const sessionCourses: Record<string, string[]> = {
  "Spring 2025": [
    "Introduction to Database Systems",
    "Operating Systems",
    "Probability & Statistics",
    "Software Design & Architecture",
    "Technical Report Writing",
  ],
  "Fall 2024": [
    "Object Oriented Programming",
    "Multivariable Calculus",
    "Data Structures",
  ],
  "Spring 2024": [
    "Linear Algebra",
    "Programming Fundamentals",
  ],
  "Fall 2023": [
    "Introduction to Computing",
    "Islamic Studies",
  ],
};

interface AssessmentRecord {
  type: string;
  title: string;
  course: string;
  code: string;
  teacher: string;
  totalMarks: number;
  obtainedMarks: number;
  weightage: string;
}

const allAssessments: AssessmentRecord[] = [
  {
    type: "Mid Term",
    title: "Midterm Examination",
    course: "Introduction to Database Systems",
    code: "SE209T",
    teacher: "Engr. Kiran Hidayat",
    totalMarks: 30,
    obtainedMarks: 28,
    weightage: "25%",
  },
  {
    type: "Assignment",
    title: "Assignment 1 (ERD & Normalization)",
    course: "Introduction to Database Systems",
    code: "SE209T",
    teacher: "Engr. Kiran Hidayat",
    totalMarks: 10,
    obtainedMarks: 10,
    weightage: "5%",
  },
  {
    type: "Quiz",
    title: "Quiz 1 (Relational Algebra)",
    course: "Introduction to Database Systems",
    code: "SE209T",
    teacher: "Engr. Kiran Hidayat",
    totalMarks: 10,
    obtainedMarks: 9,
    weightage: "5%",
  },
  {
    type: "Mid Term",
    title: "Midterm Examination",
    course: "Operating Systems",
    code: "SE204T",
    teacher: "Engr. Farheen Qazi",
    totalMarks: 30,
    obtainedMarks: 27,
    weightage: "25%",
  },
  {
    type: "Mid Term",
    title: "Midterm Examination",
    course: "Probability & Statistics",
    code: "MS301T",
    teacher: "Muhammad Mobin Anwer Siddiqui",
    totalMarks: 30,
    obtainedMarks: 29,
    weightage: "25%",
  },
  {
    type: "Mid Term",
    title: "Midterm Examination",
    course: "Software Design & Architecture",
    code: "SE211T",
    teacher: "Engr. Dur-E-Shawar Agha",
    totalMarks: 30,
    obtainedMarks: 28,
    weightage: "25%",
  },
  {
    type: "Mid Term",
    title: "Midterm Examination",
    course: "Technical Report Writing",
    code: "HS211",
    teacher: "Syeda Beena Bukhari",
    totalMarks: 30,
    obtainedMarks: 29,
    weightage: "25%",
  },
];

export const AssessmentResult = () => {
  const [selectedSession, setSelectedSession] = useState("Spring 2025");
  const [selectedCourse, setSelectedCourse] = useState("Introduction to Database Systems");
  const [filteredRows, setFilteredRows] = useState<AssessmentRecord[]>([]);

  useEffect(() => {
    const list = allAssessments.filter(
      (item) => item.course.toLowerCase() === selectedCourse.toLowerCase()
    );
    setFilteredRows(list);
  }, [selectedCourse, selectedSession]);

  const handleSessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const session = e.target.value;
    setSelectedSession(session);
    const availableCourses = sessionCourses[session] || [];
    setSelectedCourse(availableCourses[0] || "");
  };

  const totalObtained = filteredRows.reduce((acc, curr) => acc + curr.obtainedMarks, 0);
  const totalMax = filteredRows.reduce((acc, curr) => acc + curr.totalMarks, 0);
  const overallPercentage = totalMax > 0 ? ((totalObtained / totalMax) * 100).toFixed(1) : "0";

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Examination & Grading
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Assessment Results
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Midterms, Quizzes, Lab Evaluations & Assignments Breakdown
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 font-semibold text-xs text-indigo-700">
              Student ID: 2023F-BSE-075
            </span>
          </div>
        </div>
      </div>

      {/* Filter Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Academic Session</label>
            <select
              value={selectedSession}
              onChange={handleSessionChange}
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
            >
              {sessions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Enrolled Course</label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
            >
              {(sessionCourses[selectedSession] || []).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <div className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Accumulated Score:</span>
              <span className="font-bold text-slate-900 font-mono">
                {totalObtained} / {totalMax} ({overallPercentage}%)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Result Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GradeIcon className="w-4 h-4 text-indigo-600" />
            <h2 className="text-sm font-bold text-slate-800">{selectedCourse}</h2>
          </div>
          <span className="text-xs text-slate-500">{filteredRows.length} Assessments Recorded</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4">Assessment Title</th>
                <th className="py-3.5 px-4">Course Code</th>
                <th className="py-3.5 px-4">Faculty Instructor</th>
                <th className="py-3.5 px-4 text-center">Weightage</th>
                <th className="py-3.5 px-4 text-center">Max Marks</th>
                <th className="py-3.5 px-4 text-center">Obtained</th>
                <th className="py-3.5 px-4 text-right">Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRows.length > 0 ? (
                filteredRows.map((row, idx) => {
                  const pct = ((row.obtainedMarks / row.totalMarks) * 100).toFixed(0);
                  return (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2.5 py-0.5 rounded-full font-semibold text-[10px] bg-indigo-50 text-indigo-700">
                          {row.type}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{row.title}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-500">{row.code}</td>
                      <td className="py-3.5 px-4 text-slate-600">{row.teacher}</td>
                      <td className="py-3.5 px-4 text-center font-mono text-slate-500">{row.weightage}</td>
                      <td className="py-3.5 px-4 text-center font-mono font-medium">{row.totalMarks}</td>
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-900">
                        {row.obtainedMarks}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="font-bold text-emerald-700 font-mono">{pct}%</span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-400">
                    <SearchIcon className="w-8 h-8 mx-auto text-slate-300 mb-1" />
                    <p className="text-sm font-medium">No assessment records found for this course selection.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResult;
