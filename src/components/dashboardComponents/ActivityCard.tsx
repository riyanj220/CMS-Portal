import HistoryIcon from "@mui/icons-material/History";

const activityData = [
  {
    date: "01 Jun",
    time: "09:50 AM",
    title: "Student Portal Login",
    detail: "Authenticated via Web Session (Karachi, PK)",
    type: "auth",
  },
  {
    date: "31 May",
    time: "12:19 PM",
    title: "Attendance Recorded",
    detail: "SE204L Operating Systems Lab (100%)",
    type: "academic",
  },
  {
    date: "31 May",
    time: "07:51 AM",
    title: "Student Portal Login",
    detail: "Authenticated via Mobile Device",
    type: "auth",
  },
  {
    date: "19 Apr",
    time: "01:28 AM",
    title: "Tuition Fee Assessed",
    detail: "Spring 2025 Tuition: PKR 102,000",
    type: "finance",
  },
  {
    date: "19 Apr",
    time: "01:28 AM",
    title: "Student Activities Fund",
    detail: "Semester Charge: PKR 1,100",
    type: "finance",
  },
];

export const ActivityCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">Recent Activity</h2>
          <p className="text-xs text-slate-500 mt-0.5">Audit log & portal interactions</p>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 text-slate-500">
          <HistoryIcon className="w-4 h-4" />
        </div>
      </div>

      {/* Timeline List */}
      <div className="mt-4 space-y-4">
        {activityData.map((activity, index) => {
          const isAuth = activity.type === "auth";
          const isFinance = activity.type === "finance";
          const nodeColor = isAuth
            ? "bg-blue-500"
            : isFinance
            ? "bg-amber-500"
            : "bg-emerald-500";

          return (
            <div key={index} className="flex items-start gap-3 text-xs">
              <div className="flex flex-col items-center">
                <span className={`w-2.5 h-2.5 rounded-full ${nodeColor} ring-4 ring-slate-100 shrink-0 mt-1`} />
                {index !== activityData.length - 1 && (
                  <span className="w-0.5 h-7 bg-slate-200 mt-1" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-slate-800 truncate">{activity.title}</p>
                  <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                    {activity.date} • {activity.time}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 truncate">{activity.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
