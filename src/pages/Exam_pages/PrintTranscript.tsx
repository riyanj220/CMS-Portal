import { useState, useRef } from "react";
import { Link } from "react-router";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface CourseGrade {
  code: string;
  title: string;
  crHours: number;
  marks: number;
  grade: string;
  gps: number;
}

const sem1Courses: CourseGrade[] = [
  { code: "HS101", title: "Islamic Studies", crHours: 2, marks: 93, grade: "A", gps: 4.0 },
  { code: "HS102T", title: "Functional English", crHours: 3, marks: 95, grade: "A", gps: 4.0 },
  { code: "MS108T", title: "Linear Algebra", crHours: 3, marks: 88, grade: "A", gps: 4.0 },
  { code: "SE102L", title: "Programming Fundamentals Lab", crHours: 1, marks: 46, grade: "A", gps: 4.0 },
  { code: "SE102T", title: "Programming Fundamentals", crHours: 3, marks: 91, grade: "A", gps: 4.0 },
  { code: "SE105L", title: "Introduction to Computing Lab", crHours: 1, marks: 45, grade: "A", gps: 4.0 },
  { code: "SE105T", title: "Introduction to Computing", crHours: 2, marks: 83, grade: "A-", gps: 3.7 },
];

const sem2Courses: CourseGrade[] = [
  { code: "CS201T", title: "Object Oriented Programming", crHours: 3, marks: 92, grade: "A", gps: 4.0 },
  { code: "CS201L", title: "Object Oriented Programming Lab", crHours: 1, marks: 48, grade: "A", gps: 4.0 },
  { code: "MS202T", title: "Multivariable Calculus", crHours: 3, marks: 89, grade: "A", gps: 4.0 },
  { code: "SE201T", title: "Software Requirement Engineering", crHours: 3, marks: 94, grade: "A", gps: 4.0 },
  { code: "HS201T", title: "Pakistan Studies", crHours: 2, marks: 87, grade: "A", gps: 4.0 },
  { code: "EE201T", title: "Basic Electronics", crHours: 3, marks: 85, grade: "A", gps: 4.0 },
  { code: "EE201L", title: "Basic Electronics Lab", crHours: 1, marks: 44, grade: "A-", gps: 3.7 },
];

const semesterWiseSummary = [
  { sr: 1, semester: "1st Semester (Fall 2023)", totalCr: 15, earnedCr: 15, earnedGp: 59.3, gpa: 3.95, cgpa: "3.95", passed: 7 },
  { sr: 2, semester: "2nd Semester (Spring 2024)", totalCr: 16, earnedCr: 16, earnedGp: 63.6, gpa: 3.98, cgpa: "3.96", passed: 7 },
  { sr: 3, semester: "3rd Semester (Fall 2024)", totalCr: 17, earnedCr: 17, earnedGp: 67.5, gpa: 3.97, cgpa: "3.97", passed: 7 },
];

const gradeInterpretations = [
  { grade: "F/R", meaning: "Failed course replaced with another approved course." },
  { grade: "NC", meaning: "Non-credit course; not counted towards CGPA calculation." },
  { grade: "S", meaning: "Satisfactory completion. Counted for credit, neutral in CGPA." },
  { grade: "I", meaning: "Incomplete. To be replaced by grade earned within prescribed period." },
  { grade: "W", meaning: "Officially Withdrawn from course prior to deadline." },
  { grade: "U", meaning: "Unsatisfactory. No credit awarded, does not affect CGPA." },
];

const gradingScale = [
  { marks: "85 - 100", gpa: "4.00", grade: "A", remarks: "Outstanding" },
  { marks: "80 - 84", gpa: "3.70", grade: "A-", remarks: "Excellent" },
  { marks: "75 - 79", gpa: "3.30", grade: "B+", remarks: "Very Good" },
  { marks: "70 - 74", gpa: "3.00", grade: "B", remarks: "Good" },
  { marks: "65 - 69", gpa: "2.70", grade: "B-", remarks: "Average" },
  { marks: "60 - 64", gpa: "2.30", grade: "C+", remarks: "Below Average" },
  { marks: "50 - 59", gpa: "2.00", grade: "C", remarks: "Pass / Minimum" },
  { marks: "Below 50", gpa: "0.00", grade: "F", remarks: "Fail" },
];

export const PrintTranscript = () => {
  const [activeTab, setActiveTab] = useState<"front" | "back">("front");
  const [downloading, setDownloading] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const baseUrl = import.meta.env.BASE_URL;

  const handleDownloadPDF = async () => {
    if (!transcriptRef.current) return;
    setDownloading(true);

    try {
      const element = transcriptRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: 1024,
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`SSUET_Transcript_${activeTab}_2023F-BSE-075.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-4 pb-12">
      {/* Control Action Bar */}
      <div className="w-full max-w-[850px] bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="Back to Dashboard"
          >
            <ArrowBackIcon className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900">Unofficial Academic Transcript</h1>
            <p className="text-xs text-slate-500">Official Student Record • Spring 2025</p>
          </div>
        </div>

        {/* Tab switcher & Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Front / Back Toggle */}
          <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab("front")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === "front" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Front (Grades)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("back")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === "back" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Back (Grading Scheme)
            </button>
          </div>

          {/* Download PDF */}
          <button
            type="button"
            onClick={handleDownloadPDF}
            disabled={downloading}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-colors disabled:opacity-50"
          >
            <DownloadIcon className="w-4 h-4" />
            <span>{downloading ? "Generating..." : "Download PDF"}</span>
          </button>

          {/* Print */}
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs shadow-sm transition-colors"
          >
            <PrintIcon className="w-4 h-4" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Screen container: horizontal scroll for mobile, exact A4 layout for print */}
      <div className="w-full overflow-x-auto py-2 flex justify-start lg:justify-center">
        <div
          ref={transcriptRef}
          className="transcript-print-container shrink-0 w-[840px] bg-white p-8 border border-slate-300 shadow-md text-slate-900 rounded-lg font-sans text-xs select-none"
        >
          {activeTab === "front" ? (
            /* ================= FRONT TRANSCRIPT ================= */
            <div className="space-y-4">
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
                  <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
                    Sir Syed University of Engineering & Technology
                  </h2>
                  <p className="text-xs font-semibold text-slate-700 mt-0.5">
                    Office of the Controller of Examinations • Karachi, Pakistan
                  </p>
                  <span className="inline-block mt-1 px-3 py-0.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded">
                    Unofficial Transcript of Academic Record
                  </span>
                </div>

                <div className="w-20 h-24 shrink-0 border border-slate-300 rounded overflow-hidden">
                  <img
                    src={`${baseUrl}images/avatar.png`}
                    alt="Candidate"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `${baseUrl}images/dp.png`;
                    }}
                  />
                </div>
              </div>

              {/* Student Demographics Grid */}
              <div className="grid grid-cols-4 border border-slate-900 text-[11px]">
                <div className="p-1.5 bg-slate-100 font-bold border-r border-b border-slate-900">Student Name:</div>
                <div className="p-1.5 border-r border-b border-slate-900 font-semibold">Riyan Jamil</div>
                <div className="p-1.5 bg-slate-100 font-bold border-r border-b border-slate-900">Roll No / ID:</div>
                <div className="p-1.5 border-b border-slate-900 font-semibold font-mono">2023F-BSE-075</div>

                <div className="p-1.5 bg-slate-100 font-bold border-r border-b border-slate-900">Father's Name:</div>
                <div className="p-1.5 border-r border-b border-slate-900">Muhammad Jamil</div>
                <div className="p-1.5 bg-slate-100 font-bold border-r border-b border-slate-900">Enrolment No:</div>
                <div className="p-1.5 border-b border-slate-900 font-mono">2959/SE/2023F</div>

                <div className="p-1.5 bg-slate-100 font-bold border-r border-slate-900">Degree Program:</div>
                <div className="p-1.5 border-r border-slate-900">Bachelor of Science in Software Engineering</div>
                <div className="p-1.5 bg-slate-100 font-bold border-r border-slate-900">Batch & Session:</div>
                <div className="p-1.5">Batch 2023F • Regular Morning</div>
              </div>

              {/* Semester 1 & 2 Course Records */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                {/* Fall 2023 Table */}
                <div className="border border-slate-900 rounded overflow-hidden">
                  <div className="bg-slate-200 text-slate-900 font-bold p-1 text-center border-b border-slate-900 text-[11px]">
                    Fall 2023 Semester (1st Semester)
                  </div>
                  <table className="w-full text-[10px] text-left">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-900 font-semibold">
                        <th className="p-1">Code</th>
                        <th className="p-1">Course Title</th>
                        <th className="p-1 text-center">Cr</th>
                        <th className="p-1 text-center">Grade</th>
                        <th className="p-1 text-right">GP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {sem1Courses.map((c, idx) => (
                        <tr key={idx}>
                          <td className="p-1 font-mono font-medium">{c.code}</td>
                          <td className="p-1 truncate max-w-[140px]">{c.title}</td>
                          <td className="p-1 text-center">{c.crHours}</td>
                          <td className="p-1 text-center font-bold">{c.grade}</td>
                          <td className="p-1 text-right font-mono">{c.gps.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-1 bg-slate-100 border-t border-slate-900 flex justify-between text-[10px] font-semibold">
                    <span>Cr. Hours: 15</span>
                    <span>SGPA: 3.95</span>
                    <span>CGPA: 3.95</span>
                  </div>
                </div>

                {/* Spring 2024 Table */}
                <div className="border border-slate-900 rounded overflow-hidden">
                  <div className="bg-slate-200 text-slate-900 font-bold p-1 text-center border-b border-slate-900 text-[11px]">
                    Spring 2024 Semester (2nd Semester)
                  </div>
                  <table className="w-full text-[10px] text-left">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-900 font-semibold">
                        <th className="p-1">Code</th>
                        <th className="p-1">Course Title</th>
                        <th className="p-1 text-center">Cr</th>
                        <th className="p-1 text-center">Grade</th>
                        <th className="p-1 text-right">GP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {sem2Courses.map((c, idx) => (
                        <tr key={idx}>
                          <td className="p-1 font-mono font-medium">{c.code}</td>
                          <td className="p-1 truncate max-w-[140px]">{c.title}</td>
                          <td className="p-1 text-center">{c.crHours}</td>
                          <td className="p-1 text-center font-bold">{c.grade}</td>
                          <td className="p-1 text-right font-mono">{c.gps.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-1 bg-slate-100 border-t border-slate-900 flex justify-between text-[10px] font-semibold">
                    <span>Cr. Hours: 16</span>
                    <span>SGPA: 3.98</span>
                    <span>CGPA: 3.96</span>
                  </div>
                </div>
              </div>

              {/* Cumulative Progression Table */}
              <div className="mt-3">
                <h4 className="font-bold text-[11px] text-slate-800 uppercase tracking-wider mb-1">
                  Cumulative Academic Performance Summary
                </h4>
                <table className="w-full border-collapse border border-slate-900 text-[11px]">
                  <thead>
                    <tr className="bg-slate-200 text-slate-900 font-bold">
                      <th className="border border-slate-900 p-1 text-center">#</th>
                      <th className="border border-slate-900 p-1 text-left">Semester</th>
                      <th className="border border-slate-900 p-1 text-center">Total Cr</th>
                      <th className="border border-slate-900 p-1 text-center">Earned Cr</th>
                      <th className="border border-slate-900 p-1 text-center">Earned GP</th>
                      <th className="border border-slate-900 p-1 text-center">SGPA</th>
                      <th className="border border-slate-900 p-1 text-center">CGPA</th>
                      <th className="border border-slate-900 p-1 text-center">Passed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semesterWiseSummary.map((s) => (
                      <tr key={s.sr} className="border-b border-slate-300">
                        <td className="border border-slate-900 p-1 text-center font-mono">{s.sr}</td>
                        <td className="border border-slate-900 p-1 font-medium">{s.semester}</td>
                        <td className="border border-slate-900 p-1 text-center font-mono">{s.totalCr}</td>
                        <td className="border border-slate-900 p-1 text-center font-mono">{s.earnedCr}</td>
                        <td className="border border-slate-900 p-1 text-center font-mono">{s.earnedGp.toFixed(1)}</td>
                        <td className="border border-slate-900 p-1 text-center font-bold text-indigo-700">{s.gpa.toFixed(2)}</td>
                        <td className="border border-slate-900 p-1 text-center font-bold text-emerald-700">{s.cgpa}</td>
                        <td className="border border-slate-900 p-1 text-center text-emerald-700 font-semibold">{s.passed} Courses</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Signatures Line */}
              <div className="mt-8 pt-4 flex justify-between items-end border-t border-slate-300 text-[11px]">
                <div className="text-center">
                  <div className="w-36 border-b border-slate-900 pb-1 mb-1"></div>
                  <p className="font-bold text-slate-800">Prepared By</p>
                </div>
                <div className="text-center">
                  <div className="w-36 border-b border-slate-900 pb-1 mb-1"></div>
                  <p className="font-bold text-slate-800">Checked By</p>
                </div>
                <div className="text-center">
                  <div className="w-44 border-b border-slate-900 pb-1 mb-1 text-xs font-serif italic text-slate-600">
                    Dr. M. A. Qureshi
                  </div>
                  <p className="font-bold text-slate-800">Controller of Examinations</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 p-2 bg-slate-50 border border-slate-200 rounded text-[9.5px] text-slate-500 leading-tight">
                <strong>Disclaimer:</strong> This unofficial transcript is an accurate statement of academic record as of 15-May-2025. It is issued for informational and student verification purposes without official university seal. Official transcripts are issued exclusively by the Registrar's Office.
              </div>
            </div>
          ) : (
            /* ================= BACK TRANSCRIPT (REGULATIONS) ================= */
            <div className="space-y-4">
              <div className="border-b-2 border-slate-900 pb-2 text-center">
                <h3 className="text-base font-bold uppercase tracking-wider text-slate-900">
                  Interpretation of Transcript Contents & Academic Regulations
                </h3>
                <p className="text-xs text-slate-600">Sir Syed University of Engineering & Technology Grading Scheme</p>
              </div>

              {/* Grade Meaning Table */}
              <div>
                <h4 className="font-bold text-xs text-slate-800 mb-1">Special Grade Notations</h4>
                <table className="w-full border-collapse border border-slate-900 text-[11px]">
                  <thead>
                    <tr className="bg-slate-200 text-slate-900 font-bold">
                      <th className="border border-slate-900 p-1.5 w-20 text-center">Grade</th>
                      <th className="border border-slate-900 p-1.5 text-left">Academic Meaning & Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradeInterpretations.map((g, idx) => (
                      <tr key={idx} className="border-b border-slate-300">
                        <td className="border border-slate-900 p-1.5 text-center font-bold font-mono">{g.grade}</td>
                        <td className="border border-slate-900 p-1.5">{g.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Grading Scheme Table */}
              <div className="mt-3">
                <h4 className="font-bold text-xs text-slate-800 mb-1">Statutory Grading System</h4>
                <table className="w-full border-collapse border border-slate-900 text-[11px]">
                  <thead>
                    <tr className="bg-slate-200 text-slate-900 font-bold">
                      <th className="border border-slate-900 p-1 text-center">Marks Range</th>
                      <th className="border border-slate-900 p-1 text-center">Grade Point</th>
                      <th className="border border-slate-900 p-1 text-center">Letter Grade</th>
                      <th className="border border-slate-900 p-1 text-left">Standing / Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradingScale.map((s, idx) => (
                      <tr key={idx} className="border-b border-slate-300">
                        <td className="border border-slate-900 p-1 text-center font-mono">{s.marks}%</td>
                        <td className="border border-slate-900 p-1 text-center font-bold font-mono">{s.gpa}</td>
                        <td className="border border-slate-900 p-1 text-center font-bold">{s.grade}</td>
                        <td className="border border-slate-900 p-1 text-slate-700">{s.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Degree Requirements Formula */}
              <div className="p-3 bg-slate-50 border border-slate-300 rounded text-xs space-y-1">
                <p className="font-bold text-slate-900">Graduation Requirements:</p>
                <p className="text-slate-600">
                  Minimum CGPA of <strong>2.00</strong> on a 4.00 scale across all curriculum semesters, with zero remaining F grades.
                </p>
                <p className="font-mono text-slate-800 text-[11px] bg-slate-100 p-1.5 rounded border border-slate-200">
                  CGPA = (Sum of [Credit Hours × Course Grade Point]) / (Total Cumulative Credit Hours)
                </p>
              </div>

              {/* University Charter Details */}
              <div className="grid grid-cols-2 gap-3 text-[11px] p-3 bg-slate-100 rounded border border-slate-200">
                <div>
                  <span className="font-bold text-slate-700">University Charter Date: </span>
                  <span>25-Oct-1995 (Sindh Assembly Act XII)</span>
                </div>
                <div>
                  <span className="font-bold text-slate-700">Accreditation: </span>
                  <span>HEC Recognized / PEC Level-II (Washington Accord)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrintTranscript;
