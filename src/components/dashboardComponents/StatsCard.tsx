import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TimelineIcon from "@mui/icons-material/Timeline";

export const StatsCard = () => {
  const stats = [
    {
      title: "Current Balance",
      value: "PKR 119,800",
      subtext: "Spring 2025 Fee Due",
      icon: <AccountBalanceWalletIcon className="w-6 h-6 text-amber-600" />,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      badge: "Pending",
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      title: "CGPA",
      value: "3.97",
      subtext: "Top 5% of Batch",
      icon: <EmojiEventsIcon className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      badge: "Excellent",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "Registered Courses",
      value: "8 Courses",
      subtext: "19 Total Credit Hours",
      icon: <MenuBookIcon className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-700",
      badge: "Regular",
      badgeColor: "bg-indigo-100 text-indigo-800",
    },
    {
      title: "Average Attendance",
      value: "94%",
      subtext: "Exam Eligible (Min 75%)",
      icon: <TimelineIcon className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      badge: "Good Standing",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
        >
          <div className="flex items-start justify-between">
            <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.borderColor} border`}>
              {stat.icon}
            </div>
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${stat.badgeColor}`}>
              {stat.badge}
            </span>
          </div>

          <div className="mt-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.title}</p>
            <h3 className={`text-2xl font-bold mt-1 tracking-tight ${stat.textColor}`}>{stat.value}</h3>
            <p className="text-xs text-slate-400 mt-1 font-medium">{stat.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
