import SchoolIcon from "@mui/icons-material/School";

interface DegreeCompletionProps {
  progress?: number;
}

const DegreeCompletionCard: React.FC<DegreeCompletionProps> = ({ progress = 55 }) => {
  const strokeWidth = 10;
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">Degree Progress</h2>
          <p className="text-xs text-slate-500 mt-0.5">BS Software Engineering Curriculum</p>
        </div>
        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
          <SchoolIcon className="w-4 h-4" />
        </div>
      </div>

      {/* Circular Progress Gauge */}
      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative flex items-center justify-center">
          <svg className="w-36 h-36 transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx="72"
              cy="72"
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              className="text-slate-100"
              fill="transparent"
            />
            {/* Progress Circle */}
            <circle
              cx="72"
              cy="72"
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="text-indigo-600 transition-all duration-1000 ease-out"
              fill="transparent"
            />
          </svg>

          {/* Center Content */}
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{progress}%</span>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Completed</span>
          </div>
        </div>

        {/* Milestone Breakdown */}
        <div className="grid grid-cols-2 gap-3 w-full mt-4 text-center">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-[11px] text-slate-400 font-medium">Credits Earned</p>
            <p className="text-sm font-bold text-slate-800 mt-0.5">74 / 134 Cr</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-[11px] text-slate-400 font-medium">Current Semester</p>
            <p className="text-sm font-bold text-indigo-600 mt-0.5">4th of 8</p>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center mt-3 leading-relaxed">
          Roadmap tracks mandatory degree requirements according to HEC and SSUET accreditation standards.
        </p>
      </div>
    </div>
  );
};

export default DegreeCompletionCard;
