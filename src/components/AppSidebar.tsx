import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useLayout } from "../context/LayoutContext";

// MUI & Lucide Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CampaignIcon from "@mui/icons-material/Campaign";
import PrintIcon from "@mui/icons-material/Print";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BadgeIcon from "@mui/icons-material/Badge";

type SubMenuItem = {
  title: string;
  slug: string;
  icon?: React.ReactNode;
};

type MenuItem = {
  title: string;
  icon: React.ReactNode;
  path: string;
  key?: string;
  subMenus?: SubMenuItem[];
};

const menus: MenuItem[] = [
  {
    title: "Dashboard",
    icon: <DashboardIcon className="w-5 h-5" />,
    path: "",
  },
  {
    title: "General",
    icon: <MenuBookIcon className="w-5 h-5" />,
    key: "general",
    path: "general",
    subMenus: [
      { title: "Time Table", slug: "time-table", icon: <ScheduleIcon className="w-4 h-4" /> },
      { title: "Todo List", slug: "todo-list", icon: <CheckCircleOutlineIcon className="w-4 h-4" /> },
      { title: "Online Survey", slug: "online-survey", icon: <AssignmentTurnedInIcon className="w-4 h-4" /> },
      { title: "Attendance", slug: "attendance", icon: <HowToRegIcon className="w-4 h-4" /> },
      { title: "Announcements", slug: "announcements", icon: <CampaignIcon className="w-4 h-4" /> },
    ],
  },
  {
    title: "Courses",
    icon: <SchoolIcon className="w-5 h-5" />,
    path: "course",
  },
  {
    title: "Registration",
    icon: <LibraryBooksIcon className="w-5 h-5" />,
    path: "registration",
  },
  {
    title: "Fee Management",
    icon: <CreditCardIcon className="w-5 h-5" />,
    path: "fee",
  },
  {
    title: "Examinations",
    icon: <QuizIcon className="w-5 h-5" />,
    key: "exam",
    path: "exam",
    subMenus: [
      { title: "Print Transcript", slug: "print-unofficial-transcript", icon: <PrintIcon className="w-4 h-4" /> },
      { title: "Exam Seating Plan", slug: "exam-seating-plan", icon: <EventSeatIcon className="w-4 h-4" /> },
      { title: "Assessment Result", slug: "assessment-result", icon: <AssessmentIcon className="w-4 h-4" /> },
      { title: "Print Admit Card", slug: "print-admit-card", icon: <BadgeIcon className="w-4 h-4" /> },
    ],
  },
  {
    title: "Student Profile",
    icon: <AccountBoxIcon className="w-5 h-5" />,
    path: "profile",
  },
];

const AppSidebar = () => {
  const {
    mobileSidebarOpen,
    setMobileSidebarOpen,
    desktopCollapsed,
    toggleDesktopCollapse,
  } = useLayout();

  const location = useLocation();

  // Active submenus tracking
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({
    general: false,
    exam: false,
  });

  // Automatically expand the section if the user is visiting a submenu path
  useEffect(() => {
    if (location.pathname.includes("/dashboard/general")) {
      setOpenSubMenus((prev) => ({ ...prev, general: true }));
    }
    if (location.pathname.includes("/dashboard/exam")) {
      setOpenSubMenus((prev) => ({ ...prev, exam: true }));
    }
  }, [location.pathname]);

  const toggleSubMenu = (key: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isRouteActive = (item: MenuItem) => {
    if (item.path === "") {
      return location.pathname === "/dashboard" || location.pathname === "/dashboard/";
    }
    return location.pathname.startsWith(`/dashboard/${item.path}`);
  };

  const isSubRouteActive = (parentPath: string, subSlug: string) => {
    return location.pathname.includes(`/dashboard/${parentPath}/${subSlug}`);
  };

  // Reusable Navigation List
  const renderNavList = (isMobileView: boolean) => (
    <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
      {menus.map((menu, idx) => {
        const isActive = isRouteActive(menu);
        const hasSub = Boolean(menu.subMenus && menu.subMenus.length > 0);
        const isSubOpen = menu.key ? openSubMenus[menu.key] : false;
        const isCollapsedOnDesktop = !isMobileView && desktopCollapsed;

        return (
          <div key={idx} className="space-y-1">
            {!hasSub ? (
              <Link
                to={menu.path === "" ? "/dashboard" : `/dashboard/${menu.path}`}
                onClick={() => isMobileView && setMobileSidebarOpen(false)}
                title={isCollapsedOnDesktop ? menu.title : undefined}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                } ${isCollapsedOnDesktop ? "justify-center px-2" : ""}`}
              >
                <span className={`shrink-0 ${isActive ? "text-white" : "text-slate-400"}`}>
                  {menu.icon}
                </span>
                {!isCollapsedOnDesktop && (
                  <span className="truncate tracking-wide">{menu.title}</span>
                )}
              </Link>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => menu.key && toggleSubMenu(menu.key)}
                  title={isCollapsedOnDesktop ? menu.title : undefined}
                  className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                    isActive
                      ? "bg-slate-800 text-indigo-300 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                  } ${isCollapsedOnDesktop ? "justify-center px-2" : ""}`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className={`shrink-0 ${isActive ? "text-indigo-400" : "text-slate-400"}`}>
                      {menu.icon}
                    </span>
                    {!isCollapsedOnDesktop && (
                      <span className="truncate tracking-wide">{menu.title}</span>
                    )}
                  </div>
                  {!isCollapsedOnDesktop && (
                    <span className="shrink-0 text-slate-400 transition-transform duration-200">
                      {isSubOpen ? <ExpandMoreIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />}
                    </span>
                  )}
                </button>

                {/* Submenu Accordion */}
                {(!isCollapsedOnDesktop || isMobileView) && isSubOpen && menu.subMenus && (
                  <div className="pl-6 pr-2 py-1 space-y-1 mt-1 border-l-2 border-slate-700/60 ml-5">
                    {menu.subMenus.map((sub, sIdx) => {
                      const isSubActive = isSubRouteActive(menu.path, sub.slug);
                      return (
                        <Link
                          key={sIdx}
                          to={`/dashboard/${menu.path}/${sub.slug}`}
                          onClick={() => isMobileView && setMobileSidebarOpen(false)}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            isSubActive
                              ? "bg-indigo-600/20 text-indigo-300 font-semibold"
                              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                          }`}
                        >
                          {sub.icon && <span className="shrink-0 text-slate-400">{sub.icon}</span>}
                          <span className="truncate">{sub.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* ================= MOBILE DRAWER ================= */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileSidebarOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-slate-900 border-r border-slate-800 shadow-2xl flex flex-col z-50 animate-in slide-in-from-left duration-250">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-800">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center font-bold text-sm">
                  SSUET
                </div>
                <div>
                  <h2 className="text-white font-semibold text-sm leading-tight">Student Portal</h2>
                  <p className="text-[11px] text-slate-400">Navigation Menu</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(false)}
                aria-label="Close menu"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            {renderNavList(true)}

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <div>
                <p className="text-slate-300 font-medium">Session: Spring 2025</p>
                <p className="text-[11px] text-slate-500">v2.1 Modernized</p>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-[10px]">
                Active
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside
        className={`no-print hidden lg:flex flex-col shrink-0 h-full bg-slate-900 border-r border-slate-800 text-white transition-all duration-300 ease-in-out relative ${
          desktopCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Collapse / Expand Toggle Button */}
        <button
          type="button"
          onClick={toggleDesktopCollapse}
          title={desktopCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 flex items-center justify-center shadow-md transition-colors z-20"
        >
          {desktopCollapsed ? (
            <ChevronRightIcon className="w-4 h-4" />
          ) : (
            <ChevronLeftIcon className="w-4 h-4" />
          )}
        </button>

        {/* Desktop Nav Items */}
        <div className="flex-1 overflow-y-auto">
          {renderNavList(false)}
        </div>

        {/* Desktop Sidebar Footer */}
        <div className="mt-auto p-3 border-t border-slate-800/80 bg-slate-950/40 shrink-0">
          {!desktopCollapsed ? (
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span className="text-[11px] text-slate-400">CMS Portal v2.1</span>
              <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-medium">
                Spring '25
              </span>
            </div>
          ) : (
            <div className="flex justify-center text-[10px] text-indigo-400 font-bold">
              CMS
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
