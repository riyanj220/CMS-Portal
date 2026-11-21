import { useEffect, useState } from "react";
import { Link } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

interface TaskItem {
  id?: number;
  task: string;
  dueDate: string;
  status: string;
}

const defaultTasks: TaskItem[] = [
  { task: "Prepare Software Architecture Lab Report 4", dueDate: "25-May-2025", status: "In Progress" },
  { task: "Submit Online Course Evaluation Survey", dueDate: "28-May-2025", status: "Pending" },
  { task: "Review Probability & Statistics Chapter 5", dueDate: "30-May-2025", status: "Completed" },
];

export const TodoListCard = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(defaultTasks);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("tasks");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTasks(parsed.slice(0, 4));
        }
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">Academic To-Do List</h2>
          <p className="text-xs text-slate-500 mt-0.5">Tasks, deadlines & reminders</p>
        </div>
        <Link
          to="/dashboard/general/todo-list"
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
        >
          <span>Manage</span>
          <ArrowForwardIcon className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Task List */}
      <div className="mt-3 space-y-2.5">
        {tasks.map((item, idx) => {
          const isDone = item.status === "Completed";
          const isInProgress = item.status === "In Progress";

          return (
            <div
              key={idx}
              className="p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <span className={`shrink-0 mt-0.5 ${isDone ? "text-emerald-500" : "text-slate-400"}`}>
                  {isDone ? (
                    <CheckCircleOutlineIcon className="w-4 h-4" />
                  ) : (
                    <RadioButtonUncheckedIcon className="w-4 h-4" />
                  )}
                </span>
                <div className="min-w-0">
                  <p className={`font-semibold text-slate-800 truncate ${isDone ? "line-through text-slate-400" : ""}`}>
                    {item.task}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Due: {item.dueDate}</p>
                </div>
              </div>

              <span
                className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                  isDone
                    ? "bg-emerald-50 text-emerald-700"
                    : isInProgress
                    ? "bg-amber-50 text-amber-700"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {item.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoListCard;
