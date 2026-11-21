import { useState } from "react";
import {
  Alert,
  Snackbar,
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SaveIcon from "@mui/icons-material/Save";

interface Course {
  id: number;
  name: string;
  courseCode: string;
  courseType: string;
  creditHours: number;
  teacher: string;
  timing: string;
  availableSeats: number;
}

const initialSections: Record<string, Course[]> = {
  A: [
    { id: 1, name: "Computing Professional Practices", courseCode: "HS412T", courseType: "Core", creditHours: 3, teacher: "Engr. Shoaib Alam", timing: "Mon 08:30 - 09:30 | CF-44", availableSeats: 17 },
    { id: 2, name: "Data Structures & Algorithms", courseCode: "CS202T", courseType: "Core", creditHours: 3, teacher: "Dr. Ahmed", timing: "Tue 11:30 - 12:30 | CF-12", availableSeats: 10 },
    { id: 3, name: "Software Design & Architecture", courseCode: "CS310T", courseType: "Elective", creditHours: 3, teacher: "Ms. Hira", timing: "Wed 09:30 - 10:30 | CF-22", availableSeats: 0 },
  ],
  B: [
    { id: 4, name: "Database Systems", courseCode: "CS303T", courseType: "Core", creditHours: 3, teacher: "Engr. Bilal", timing: "Mon 10:30 - 11:30 | CF-10", availableSeats: 5 },
    { id: 5, name: "Web Engineering", courseCode: "CS401T", courseType: "Elective", creditHours: 3, teacher: "Ms. Sara", timing: "Tue 13:30 - 14:30 | CF-09", availableSeats: 8 },
    { id: 6, name: "Operating Systems", courseCode: "CS305T", courseType: "Core", creditHours: 3, teacher: "Dr. Ali", timing: "Fri 14:30 - 15:30 | CF-20", availableSeats: 0 },
  ],
  C: [
    { id: 7, name: "Artificial Intelligence", courseCode: "CS501T", courseType: "Elective", creditHours: 3, teacher: "Dr. Faizan", timing: "Thu 10:30 - 11:30 | CF-18", availableSeats: 12 },
    { id: 8, name: "Machine Learning", courseCode: "CS502T", courseType: "Elective", creditHours: 3, teacher: "Dr. Sana", timing: "Wed 11:30 - 12:30 | CF-15", availableSeats: 14 },
    { id: 9, name: "Computer Networks", courseCode: "CS404T", courseType: "Core", creditHours: 3, teacher: "Mr. Usman", timing: "Mon 14:30 - 15:30 | CF-11", availableSeats: 3 },
  ],
};

const Registration = () => {
  const [section, setSection] = useState("B");
  const [sectionData, setSectionData] = useState(initialSections);
  const [selected, setSelected] = useState<number[]>([]);
  const [savedCourses, setSavedCourses] = useState<Course[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<number | null>(null);

  const handleToggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSaveCourses = () => {
    const currentCourses = sectionData[section] || [];
    const coursesToSave = currentCourses.filter(
      (c) => selected.includes(c.id) && !savedCourses.some((sc) => sc.id === c.id)
    );

    if (coursesToSave.length > 0) {
      setSavedCourses((prev) => [...prev, ...coursesToSave]);
      setSnackbarOpen(true);

      // Decrement seats
      setSectionData((prev) => ({
        ...prev,
        [section]: prev[section].map((c) =>
          selected.includes(c.id) ? { ...c, availableSeats: Math.max(c.availableSeats - 1, 0) } : c
        ),
      }));

      setSelected([]);
    }
  };

  const handleConfirmDelete = () => {
    if (courseToDelete !== null) {
      setSavedCourses((prev) => prev.filter((c) => c.id !== courseToDelete));
      setDeleteModalOpen(false);
      setCourseToDelete(null);
    }
  };

  const totalRegisteredCr = savedCourses.reduce((sum, c) => sum + c.creditHours, 0);

  return (
    <div className="space-y-6 pb-12">
      {/* Toast */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" variant="filled">
          Selected courses confirmed and registered successfully!
        </Alert>
      </Snackbar>

      {/* Delete Confirmation Modal */}
      <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 420 },
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: "#111827" }}>
            Drop Course Registration
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: 14, color: "#6b7280" }}>
            Are you sure you want to drop this registered course? The seat will be released back to the section quota.
          </Typography>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 1.5 }}>
            <Button
              variant="outlined"
              onClick={() => setDeleteModalOpen(false)}
              sx={{ textTransform: "none", borderRadius: 2 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleConfirmDelete}
              sx={{ textTransform: "none", borderRadius: 2 }}
            >
              Drop Course
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Online Course Enrollment
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Semester Course Registration
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select sections, pick theory/labs, and submit registration for Spring 2025
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 font-bold text-xs text-indigo-700">
              Confirmed Credits: {totalRegisteredCr} / 21 Max
            </span>
          </div>
        </div>
      </div>

      {/* Section Filter & Registration Action Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <label className="text-xs font-bold text-slate-700 shrink-0">Select Section:</label>
          <div className="flex items-center gap-1.5">
            {["A", "B", "C"].map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => {
                  setSection(sec);
                  setSelected([]);
                }}
                className={`w-9 h-9 rounded-xl font-bold text-xs transition-colors ${
                  section === sec
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">
            {selected.length} {selected.length === 1 ? "course" : "courses"} selected
          </span>
          <Button
            variant="contained"
            color="primary"
            disabled={selected.length === 0}
            startIcon={<SaveIcon />}
            onClick={handleSaveCourses}
            sx={{
              textTransform: "none",
              borderRadius: 2.5,
              fontWeight: 600,
              fontSize: 12,
              px: 2.5,
              backgroundColor: "#4f46e5",
            }}
          >
            Confirm Registration
          </Button>
        </div>
      </div>

      {/* Available Courses Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HowToRegIcon className="w-4 h-4 text-indigo-600" />
            <h2 className="text-sm font-bold text-slate-800">
              Available Courses in Section {section}
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            {sectionData[section]?.length || 0} Offerings
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4 w-10 text-center">Select</th>
                <th className="py-3 px-4">Course Name & Code</th>
                <th className="py-3 px-4 text-center">Type</th>
                <th className="py-3 px-4 text-center">Credit Hours</th>
                <th className="py-3 px-4">Faculty Member</th>
                <th className="py-3 px-4">Timing & Venue</th>
                <th className="py-3 px-4 text-center">Available Seats</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sectionData[section]?.map((row) => {
                const isSaved = savedCourses.some((c) => c.id === row.id);
                const isSelected = selected.includes(row.id);
                const isFull = row.availableSeats === 0;

                return (
                  <tr
                    key={row.id}
                    onClick={() => !isSaved && !isFull && handleToggleSelect(row.id)}
                    className={`transition-colors ${
                      isSaved
                        ? "bg-slate-50/80 opacity-60 cursor-not-allowed"
                        : isFull
                        ? "bg-red-50/30 opacity-60 cursor-not-allowed"
                        : "hover:bg-slate-50/80 cursor-pointer"
                    }`}
                  >
                    <td className="py-3 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={isSelected || isSaved}
                        disabled={isSaved || isFull}
                        onChange={() => handleToggleSelect(row.id)}
                        className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-900">{row.name}</div>
                      <span className="text-[11px] font-mono text-slate-400">{row.courseCode}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium">
                        {row.courseType}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center font-mono font-bold text-slate-800">
                      {row.creditHours}
                    </td>
                    <td className="py-3 px-4 text-slate-600">{row.teacher}</td>
                    <td className="py-3 px-4 text-slate-600 font-mono text-[11px]">{row.timing}</td>
                    <td className="py-3 px-4 text-center font-mono font-semibold">
                      <span className={isFull ? "text-red-600" : "text-emerald-700"}>
                        {row.availableSeats} Seats
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {isSaved ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <CheckCircleIcon className="w-3 h-3" />
                          Enrolled
                        </span>
                      ) : isFull ? (
                        <span className="inline-block text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full">
                          Closed
                        </span>
                      ) : (
                        <span className="inline-block text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
                          Open
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmed Courses Tray */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
            <h2 className="text-sm font-bold text-slate-800">Confirmed Enrolled Courses</h2>
          </div>
          <span className="text-xs text-slate-500">{savedCourses.length} Registered</span>
        </div>

        {savedCourses.length === 0 ? (
          <div className="p-8 text-center text-slate-400">
            <p className="text-sm font-medium">No courses confirmed yet. Select courses above and click "Confirm Registration".</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Course Name</th>
                  <th className="py-3 px-4">Course Code</th>
                  <th className="py-3 px-4 text-center">Cr. Hrs</th>
                  <th className="py-3 px-4">Instructor</th>
                  <th className="py-3 px-4">Schedule</th>
                  <th className="py-3 px-4 text-center">Drop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {savedCourses.map((c, idx) => (
                  <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono text-slate-400">{idx + 1}</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">{c.name}</td>
                    <td className="py-3 px-4 font-mono text-slate-500">{c.courseCode}</td>
                    <td className="py-3 px-4 text-center font-mono font-bold text-slate-800">{c.creditHours}</td>
                    <td className="py-3 px-4 text-slate-600">{c.teacher}</td>
                    <td className="py-3 px-4 text-slate-600 font-mono text-[11px]">{c.timing}</td>
                    <td className="py-3 px-4 text-center">
                      <Tooltip title="Drop Course">
                        <IconButton
                          size="small"
                          onClick={() => {
                            setCourseToDelete(c.id);
                            setDeleteModalOpen(true);
                          }}
                          className="text-red-500 hover:bg-red-50"
                        >
                          <DeleteIcon className="w-4 h-4 text-red-500" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
