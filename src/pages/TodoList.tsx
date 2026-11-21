import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

interface Task {
  id: number;
  task: string;
  dueDate: string;
  priority: "High" | "Normal" | "Low";
  status: "Not Started" | "In Progress" | "Completed";
}

const defaultTasks: Task[] = [
  { id: 1, task: "Prepare Software Architecture Lab Report 4", dueDate: "2025-05-25", priority: "High", status: "In Progress" },
  { id: 2, task: "Submit Online Course Evaluation Survey", dueDate: "2025-05-28", priority: "Normal", status: "Not Started" },
  { id: 3, task: "Review Probability & Statistics Chapter 5", dueDate: "2025-05-30", priority: "High", status: "Completed" },
  { id: 4, task: "Fee Voucher Payment Clearance", dueDate: "2025-05-30", priority: "High", status: "In Progress" },
];

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : defaultTasks;
    } catch {
      return defaultTasks;
    }
  });

  const [formOpen, setFormOpen] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<"High" | "Normal" | "Low">("Normal");
  const [editingId, setEditingId] = useState<number | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    if (editingId !== null) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingId
            ? { ...t, task: taskText, dueDate: dueDate || "No date", priority }
            : t
        )
      );
      setEditingId(null);
    } else {
      const newTask: Task = {
        id: Date.now(),
        task: taskText,
        dueDate: dueDate || "No date",
        priority,
        status: "Not Started",
      };
      setTasks((prev) => [newTask, ...prev]);
    }

    setTaskText("");
    setDueDate("");
    setPriority("Normal");
    setFormOpen(false);
  };

  const handleEdit = (task: Task) => {
    setEditingId(task.id);
    setTaskText(task.task);
    setDueDate(task.dueDate !== "No date" ? task.dueDate : "");
    setPriority(task.priority);
    setFormOpen(true);
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleStatus = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === "Completed" ? "In Progress" : "Completed",
            }
          : t
      )
    );
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
                Productivity & Study Planner
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Academic To-Do List
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Keep track of assignment submissions, lab records, and exam milestones
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setTaskText("");
              setDueDate("");
              setFormOpen(!formOpen);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-colors self-start sm:self-auto"
          >
            <AddIcon className="w-4 h-4" />
            <span>{formOpen ? "Close Form" : "Add New Task"}</span>
          </button>
        </div>
      </div>

      {/* Task Creation / Edit Card */}
      {formOpen && (
        <div className="bg-white rounded-2xl border border-indigo-200 shadow-md p-5 animate-in fade-in duration-200">
          <h2 className="text-sm font-bold text-slate-800 mb-3">
            {editingId ? "Edit Academic Task" : "Create New Task"}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">Task Title / Description</label>
              <input
                type="text"
                placeholder="e.g. Complete Database ERD Assignment 2"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                required
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as any)}
                className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="High">High</option>
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="sm:col-span-2 flex items-end justify-end gap-2">
              <button
                type="button"
                onClick={() => setFormOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm"
              >
                {editingId ? "Update Task" : "Save Task"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tasks Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">My Study Tasks</h2>
          <span className="text-xs text-slate-500">{tasks.length} Total</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4 w-10 text-center">Status</th>
                <th className="py-3 px-4">Task Description</th>
                <th className="py-3 px-4">Due Date</th>
                <th className="py-3 px-4 text-center">Priority</th>
                <th className="py-3 px-4 text-center">Current State</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tasks.length > 0 ? (
                tasks.map((task) => {
                  const isDone = task.status === "Completed";
                  const isInProgress = task.status === "In Progress";

                  return (
                    <tr key={task.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(task.id)}
                          className={isDone ? "text-emerald-500" : "text-slate-400 hover:text-indigo-600"}
                        >
                          {isDone ? (
                            <CheckCircleOutlineIcon className="w-4 h-4" />
                          ) : (
                            <RadioButtonUncheckedIcon className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`font-semibold text-slate-800 ${isDone ? "line-through text-slate-400" : ""}`}>
                          {task.task}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-500">{task.dueDate}</td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                            task.priority === "High"
                              ? "bg-red-50 text-red-700"
                              : task.priority === "Normal"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {task.priority}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                            isDone
                              ? "bg-emerald-50 text-emerald-700"
                              : isInProgress
                              ? "bg-amber-50 text-amber-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {task.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            onClick={() => handleEdit(task)}
                            className="p-1 rounded text-slate-400 hover:text-indigo-600 hover:bg-slate-100"
                            title="Edit Task"
                          >
                            <EditIcon className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(task.id)}
                            className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50"
                            title="Delete Task"
                          >
                            <DeleteIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400">
                    No academic tasks scheduled. Add your first study task above.
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

export default TodoList;
