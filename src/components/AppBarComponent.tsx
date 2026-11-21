import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { useLayout } from '../context/LayoutContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const AppBarComponent = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const { mobileSidebarOpen, toggleMobileSidebar } = useLayout();
  const navigate = useNavigate();

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setProfileOpen(false);
    navigate('/login');
  };

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 select-none shadow-sm">
      <div className="flex items-center justify-between px-3 sm:px-6 h-16 sm:h-18">
        
        {/* Left Section - Hamburger Menu & University Branding */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Mobile sidebar toggle button */}
          <button
            type="button"
            onClick={toggleMobileSidebar}
            aria-label={mobileSidebarOpen ? "Close sidebar menu" : "Open sidebar menu"}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          >
            {mobileSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Logo & Portal Name */}
          <Link to="/dashboard" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800/80 p-1 flex items-center justify-center ring-2 ring-indigo-500/30 group-hover:ring-indigo-500 transition-all shrink-0">
              <img
                src={`${baseUrl}images/login-logo.png`}
                alt="SSUET Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // fallback to index-logo
                  (e.target as HTMLImageElement).src = `${baseUrl}images/login-logo.jpg`;
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="hidden sm:inline-block font-semibold text-sm sm:text-base tracking-tight text-white leading-tight">
                Sir Syed University of Engineering & Technology
              </span>
              <span className="sm:hidden font-semibold text-sm tracking-tight text-white">
                SSUET CMS Portal
              </span>
              <span className="hidden sm:inline-block text-xs text-indigo-300 font-medium tracking-wide">
                Student CMS Portal • Spring 2025
              </span>
            </div>
          </Link>
        </div>

        {/* Right Section - Student Badge & Profile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          
          {/* Quick Info Pill (Hidden on extra small devices) */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">BS-SE (Morning)</span>
            <span className="text-slate-500">|</span>
            <span className="text-indigo-300 font-semibold">2023F-BSE-075</span>
          </div>

          {/* Notification Button */}
          <div className="relative" ref={notificationRef}>
            <button
              type="button"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              aria-label="Notifications"
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors relative"
            >
              <NotificationsNoneIcon className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-slate-900" />
            </button>

            {/* Notification Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-xl border border-slate-200 text-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-xs text-slate-500 uppercase tracking-wider">Notifications</span>
                  <span className="text-[11px] bg-indigo-50 text-indigo-600 font-medium px-2 py-0.5 rounded-full">3 New</span>
                </div>
                <div className="max-h-60 overflow-y-auto divide-y divide-slate-100 text-xs">
                  <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer">
                    <p className="font-medium text-slate-900">Midterm Examination Schedule Uploaded</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Please check the Exam section for dates & seating</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
                  </div>
                  <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer">
                    <p className="font-medium text-slate-900">Course Survey Available</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Submit online feedback for Spring 2025 courses</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">1 day ago</span>
                  </div>
                  <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer">
                    <p className="font-medium text-slate-900">Fee Clearance Reminder</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Tuition balance voucher has been generated</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">3 days ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Avatar with Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center space-x-2 sm:space-x-3 p-1 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-slate-700 ring-2 ring-indigo-500/50">
                <img
                  src={`${baseUrl}images/avatar.png`}
                  alt="Student Avatar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `${baseUrl}images/dp.png`;
                  }}
                />
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-sm font-semibold text-white leading-tight">Riyan Jamil</span>
                <span className="text-[11px] text-slate-400">Section B</span>
              </div>
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 text-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="font-semibold text-sm text-slate-900">Riyan Jamil</p>
                  <p className="text-xs text-slate-500 truncate mt-0.5">2023F-BSE-075@ssuet.edu.pk</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[11px] font-medium rounded-full">
                    BS Software Engineering
                  </span>
                </div>

                <div className="py-1 text-sm">
                  <Link
                    to="/dashboard/profile"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center px-4 py-2 hover:bg-slate-50 text-slate-700 transition-colors"
                  >
                    <AccountCircleOutlinedIcon className="w-4 h-4 mr-2.5 text-slate-500" />
                    My Student Profile
                  </Link>

                  <Link
                    to="/dashboard/course"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center px-4 py-2 hover:bg-slate-50 text-slate-700 transition-colors"
                  >
                    <SchoolOutlinedIcon className="w-4 h-4 mr-2.5 text-slate-500" />
                    Enrolled Courses
                  </Link>
                </div>

                <div className="border-t border-slate-100 pt-1">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogoutOutlinedIcon className="w-4 h-4 mr-2.5 text-red-500" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
};

export default AppBarComponent;
