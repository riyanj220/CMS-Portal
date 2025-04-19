import { useEffect, useState } from "react";
// MUI Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon } from "lucide-react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from "react-router";
import { useIsMobile } from "@/hooks/use-mobile";

type MenuKeys = "general" | "course" | "registration" | "fee" | "exam" | 'profile';

const App = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(true)

  const [subMenus, setSubMenus] = useState({
    general: false,
    course: false,
    registration: false,
    fee: false,
    exam: false,
    profile: false,
  });

  useEffect(() => {
    if (isMobile !== undefined) {
      setOpen(!isMobile);
    }
  }, [isMobile]);

  // Toggle submenus on click
  const toggleSubMenu = (menu: MenuKeys) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Menu items with potential submenus
  const Menus = [
    { title: "Dashboard", icon: <DashboardIcon />, path: "" },
    {
      title: "General",
      icon: <MenuIcon />,
      gap: true,
      subMenu: ["Time table", "Todo list", "Attendance", "Announcements"],
      key: "general",
      path: "general",
    },
    { title: "Course", icon: <SchoolIcon />, key: "course", path: "course" },
    { title: "Registration", icon: <LibraryBooksIcon />, key: "registration", path: "registration" },
    { title: "Fee", icon: <CreditCardIcon />, key: "fee", path: "fee" },
    {
      title: "Exam",
      icon: <QuizIcon />,
      subMenu: ["Print unofficial transcript", "Exam seating plan", "Assessment result", "Print admit card"],
      key: "exam",
      path: "exam",
    },
    { title: "Profile", icon: <AccountBoxIcon />, key: "profile", path: "profile" },
  ];

  return (
    <div className={`max-h-[90vh] h-full overflow-y-auto ${open? "w-60 flex flex-col  sm:w-72" : "w-16 h-full sm:w-24 overflow-y-hidden"}`}>
      {/* Sidebar section */}
      <div
        className={`${
          open ? "w-60 sm:w-72 p-5" : "w-16 p-1 sm:w-24 sm:p-5"
        } bg-[#1E293B] h-screen pt-8 relative duration-300 ease-in-out overflow-x-hidden`}
      >
        {/* Toggle button sections */}
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-8 h-8 p-0.5 bg-gray-50 border-gray-50 border-2 rounded-full text-xl flex items-center justify-center ${
            !open && "rotate-180"
          } transition-all ease-in-out duration-300 `}
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeftIcon /> : <ChevronLeftIcon />}
        </div>

        {/* Sidebar Navbar Items section */}
        <ul className="pt-6 space-y-0.5 overflow-y-auto h-full">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex flex-col rounded-md py-3 px-4 cursor-pointer hover:text-white text-gray-200 hover:bg-indigo-800/50 transition-all ease-in-out duration-300 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-indigo-700/40"}`}
            >
              {/* Main Menu item - linkable if no submenu */}
              {!Menu.subMenu ? (
                <Link to={`/dashboard/${Menu.path}`} className="flex items-center gap-2">
                  <span className="text-lg">{Menu.icon}</span>
                  <span className={`${!open && "hidden"} origin-left ease-in-out duration-300`}>
                    {Menu.title}
                  </span>
                </Link>
              ) : (
                <>
                  {/* Menu item with submenu toggle */}
                  <div
                    className="flex items-center justify-between gap-x-4"
                    onClick={() => Menu.key && toggleSubMenu(Menu.key as MenuKeys)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{Menu.icon}</span>
                      <span className={`${!open && "hidden"} origin-left ease-in-out duration-300`}>
                        {Menu.title}
                      </span>
                    </div>
                    <span
                      className={`ml-auto cursor-pointer text-sm ${subMenus[Menu.key as MenuKeys] ? "rotate-360" : ""} transition-transform ease-in-out duration-300 ${!open ? "hidden" : ""}`}
                    >
                      {subMenus[Menu.key as MenuKeys] ? <ChevronDownIcon /> : <ChevronRightIcon />}
                    </span>
                  </div>
                  {/* Sidebar submenus Navbar Items */}
                  {open && Menu.subMenu && Menu.key && subMenus[Menu.key as MenuKeys] && (
                    <ul className="pl-3 pt-4 text-gray-300">
                      {Menu.subMenu.map((subMenu, subIndex) => (
                        <li key={subIndex} className="text-sm flex items-center gap-x-2 py-3 px-2 hover:bg-indigo-600 rounded-lg">
                          <Link
                            to={`/dashboard/${Menu.path}/${subMenu.toLowerCase().replace(/ /g, "-")}`}
                            className="flex items-center gap-x-2 w-full"
                          >
                            <span className="text-gray-300">
                              <ChevronRightIcon className="text-xs" />
                            </span>
                            <span className="text-gray-300">{subMenu}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
