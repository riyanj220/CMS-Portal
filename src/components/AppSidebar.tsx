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

type MenuKeys = "general" | "course" | "registration" | "fee" | "exam" | 'profile';

const App = () => {
  const [open, setOpen] = useState(true);
  const [subMenus, setSubMenus] = useState({
    general: false,
    course: false,
    registration: false,
    fee: false,
    exam: false,
    profile: false,
  });

  const toggleSubMenu = (menu: MenuKeys) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth<768){
        setOpen(false);
      }

      else{
        setOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  },[])

  const Menus = [
    { title: "Dashboard", icon: <DashboardIcon /> },
    {
      title: "General",
      icon: <MenuIcon />,
      gap: true,
      subMenu: ["Time table", "Todo list", "Attendance", "Announcements"],
      key: "general",
    },
    { title: "Course", icon: <SchoolIcon />, key: "course" },
    { title: "Registration", icon: <LibraryBooksIcon />, key: "registration" },
    { title: "Fee", icon: <CreditCardIcon />, key: "fee" },
    {
      title: "Exam",
      icon: <QuizIcon />,
      subMenu: ["Print unofficial transcript", "Exam seating plan", "Assessment result", "Print admit card"],
      key: "exam"
    },
    { title: "Profile", icon: <AccountBoxIcon />, key: "profile" },
  ];

  return (
    <div className={`${open? "w-60 flex flex-col h-screen sm:w-72" : "w-16 h-full sm:w-24 "}`}>
      {/* Sidebar section */}
      <div
        className={`${
          open ? "w-60 sm:w-72 p-5" : "w-16 p-1 sm:w-24 sm:p-5"
        } bg-[#1E293B] h-screen pt-8 relative duration-300 ease-in-out`}
      >
        {/* Toggle button sections */}
        <div
          className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-gray-50 border-gray-50 border-2 rounded-full text-xl flex items-center justify-center ${
            !open && "rotate-180"
          } transition-all ease-in-out duration-300`}
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeftIcon /> : <ChevronLeftIcon />}
        </div>

        {/* Sidebar Navbar Items section */}
        <ul className="pt-6 space-y-0.5 overflow-y-auto h-full">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex flex-col rounded-md py-3 px-4 cursor-pointer hover:text-white text-gray-200 hover:bg-indigo-800/50 transition-all ease-in-out duration-300 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-indigo-700/40"}`}
            >
              <div
                className="flex items-center justify-between gap-x-4"
                onClick={() => Menu.key && toggleSubMenu(Menu.key as MenuKeys)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{Menu.icon}</span>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left ease-in-out duration-300`}
                  >
                    {Menu.title}
                  </span>
                </div>

                {Menu.subMenu && (
                  <span
                    className={`ml-auto cursor-pointer text-sm ${
                      Menu.key && subMenus[Menu.key as MenuKeys] ? "rotate-360" : ""
                    } transition-transform ease-in-out duration-300 ${
                      !open ? "hidden" : ""
                    }`}
                  >
                    {Menu.key && subMenus[Menu.key as MenuKeys] ? <ChevronDownIcon /> : <ChevronRightIcon />}
                  </span>
                )}
              </div>

              {/* Sidebar submenus Navbar Items */}
              {open && Menu.subMenu && Menu.key && subMenus[Menu.key as MenuKeys] && (
                <ul className="pl-3 pt-4 text-gray-300">
                  {Menu.subMenu.map((subMenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-sm flex items-center gap-x-2 py-3 px-2 hover:bg-indigo-600 rounded-lg"
                    >
                      <span className="text-gray-400">
                        <ChevronRightIcon className="text-xs" />
                      </span>
                      {subMenu}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
