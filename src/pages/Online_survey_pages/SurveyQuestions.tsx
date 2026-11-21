import React, { useState } from "react";
import { Link, useParams } from "react-router";
import SurveySuccessModal from "./SurveySuccessModal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const COURSE_QUESTIONS = [
  "The course workload was manageable and reasonable?",
  "Learning materials (lesson plans, lecture slides, notes) were relevant, useful, and timely available?",
  "The course was completed thoroughly according to the semester schedule?",
  "Sufficient number of quizzes and periodic assessments were conducted?",
  "Given assignments and project tasks were adequate, challenging, and appropriate?",
  "Examinations accurately reflected the course syllabus and learning outcomes?",
  "The instructor communicated the subject matter with clarity and proficiency?",
  "The course contents were intellectually stimulating and career-oriented?",
  "The instructor actively encouraged interactive class participation?",
  "Relevant reference books and resources were accessible in the university library?",
  "Audio and multimedia equipment in the lecture hall was satisfactory?",
  "Visual presentation equipment and lighting supported an effective learning environment?",
];

const TEACHER_QUESTIONS = [
  "The instructor is consistently prepared and organized for each class session?",
  "Demonstrates in-depth, current knowledge and mastery of the subject area?",
  "Lecture presentations are conceptual, engaging, and well-structured?",
  "The instructor demonstrates punctuality in arriving and ending class sessions?",
  "Shows genuine enthusiasm and dedication towards student learning?",
  "Completes the designated course curriculum according to the teaching plan?",
  "Actively assists students in clearing doubts and gaining solid subject understanding?",
  "Delivers lectures and course materials in proficient English?",
  "Provides academic guidance and availability during office hours?",
  "The instructor maintains fairness and transparency in marking and grading?",
  "Recommended readings and textbooks were relevant and beneficial?",
  "Teaching methodologies encouraged creative thinking and participation?",
  "Maintains a respectful, disciplined, and conducive learning classroom environment?",
];

const SCALE = [
  { value: "A", label: "Strongly Agree" },
  { value: "B", label: "Agree" },
  { value: "C", label: "Neutral" },
  { value: "D", label: "Disagree" },
  { value: "E", label: "Strongly Disagree" },
];

const user = {
  name: "RIYAN JAMIL",
  regNo: "2023F-BSE-075",
  program: "(BS) - Software Engineering - MOR",
  email: "riyanjamil220@gmail.com",
};

export const SurveyQuestions = () => {
  const { type } = useParams();

  const questions = type === "teacher" ? TEACHER_QUESTIONS : COURSE_QUESTIONS;
  const title = type === "teacher" ? "Teacher Evaluation Survey" : "Course Quality Evaluation Survey";

  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [comment, setComment] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSelectOption = (qIdx: number, val: string) => {
    const updated = [...answers];
    updated[qIdx] = val;
    setAnswers(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const answeredCount = answers.filter((a) => a !== "").length;

  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard/general/online-survey"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shrink-0"
              title="Back to Surveys"
            >
              <ArrowBackIcon className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <AssignmentTurnedInIcon className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Quality Enhancement Cell Evaluation
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                {title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Confidential student feedback • Responses are aggregated anonymously
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 font-bold text-xs text-indigo-700">
              Completed: {answeredCount} / {questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Scale Legend Guide */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
          Rating Scale Guide:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
          {SCALE.map((s) => (
            <div key={s.value} className="flex items-center gap-2 bg-slate-800/80 p-2 rounded-xl">
              <span className="w-6 h-6 rounded-lg bg-indigo-600 font-bold flex items-center justify-center shrink-0 text-white">
                {s.value}
              </span>
              <span className="text-slate-200 font-medium text-[11px]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Questions Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {questions.map((q, idx) => {
          const selectedVal = answers[idx];

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-5 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="px-2.5 py-1 rounded-xl bg-indigo-50 text-indigo-700 font-mono font-bold text-xs shrink-0 mt-0.5">
                  #{idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                  {q}
                </p>
              </div>

              {/* Options selection */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4 pt-3 border-t border-slate-100">
                {SCALE.map((s) => {
                  const isChecked = selectedVal === s.value;
                  return (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => handleSelectOption(idx, s.value)}
                      className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        isChecked
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span className="font-bold">{s.value}</span>
                      <span className="text-[10px] hidden sm:inline">{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Qualitative Comments */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 space-y-2">
          <label className="block text-xs font-bold text-slate-800">
            Additional Constructive Comments & Recommendations (Optional):
          </label>
          <textarea
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share specific feedback regarding strengths, areas of improvement, or suggestions for future offerings..."
            className="w-full text-xs p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            Submit Confidential Evaluation
          </button>
        </div>
      </form>

      <SurveySuccessModal open={openModal} user={user} />
    </div>
  );
};

export default SurveyQuestions;
