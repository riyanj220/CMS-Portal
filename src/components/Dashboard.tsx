import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";

import { StatsCard } from "./dashboardComponents/StatsCard";
import { OverviewCard } from "./dashboardComponents/OverviewCard";
import { ActivityCard } from "./dashboardComponents/ActivityCard";
import { ChartOfGPA } from "./dashboardComponents/ChartOfGPA";
import TodoListCard from "./dashboardComponents/TodoListCard";
import DegreeCompletionCard from "./dashboardComponents/DegreeCompletionCard";
import FinancialLedgerCard from "./dashboardComponents/FinancialLedgerCard";
import AnnouncmentsCard from "./dashboardComponents/AnnouncmentsCard";
import FeedbackSurveysCard from "./dashboardComponents/FeedbackSurveysCard";

export const Dashboard = () => {
  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner / Student Information Header */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6 transition-all">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Welcome Text */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Official Student Portal
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              Welcome back, Riyan Jamil 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Bachelor of Science in Software Engineering • Spring 2025 Semester
            </p>
          </div>

          {/* Student Credentials Pill Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs font-medium text-slate-700">
              <BadgeIcon className="w-4 h-4 text-slate-500" />
              <span>ID: <strong>2023F-BSE-075</strong></span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs font-medium text-slate-700">
              <SchoolIcon className="w-4 h-4 text-slate-500" />
              <span>Enrollment: <strong>2959/SE/2023F</strong></span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
              Section: B
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-medium ml-auto sm:ml-0">
              <CalendarTodayIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Thursday, May 15, 2025</span>
            </div>
          </div>

        </div>
      </div>

      {/* KPI Stats Grid */}
      <section>
        <StatsCard />
      </section>

      {/* Section 1: Overview & Activity */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OverviewCard />
        </div>
        <div className="lg:col-span-1">
          <ActivityCard />
        </div>
      </section>

      {/* Section 2: GPA Chart & Todo List */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartOfGPA />
        </div>
        <div className="lg:col-span-1">
          <TodoListCard />
        </div>
      </section>

      {/* Section 3: Degree Progress & Financial Ledger */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <DegreeCompletionCard progress={55} />
        </div>
        <div className="lg:col-span-2">
          <FinancialLedgerCard />
        </div>
      </section>

      {/* Section 4: Announcements & Surveys */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnnouncmentsCard />
        <FeedbackSurveysCard />
      </section>
    </div>
  );
};

export default Dashboard;
