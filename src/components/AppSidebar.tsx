import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, ReactNode, useContext, useState } from "react";

const SidebarContext = createContext<{ expanded: boolean }>({
  expanded: true, // default value for 'expanded'
});

const AppSidebar = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-screen flex flex-col transition-all duration-300 ${expanded ? "max-w-64" : "max-w-20"}`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-xl rounded-lg">
        {/* Sidebar Header */}
        <div className={`p-4 pb-2 flex justify-between items-center`}>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
          >
            {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </button>
        </div>

        {/* Sidebar Content */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 py-4">
            {children}
          </ul>
        </SidebarContext.Provider>

        {/* Footer Section (Profile) */}
        {expanded && <div className={`hidden sm:flex items-center p-3 mt-4`}>
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-blue-300"
          />
          <div
            className={`ml-3 flex flex-col justify-center w-52`}
          >
            <h4 className="font-semibold text-black">Riyan Jamil</h4>
            <span className="text-xs text-black-300">2023F-BSE-075</span>
          </div>
          <MoreVertical size={20} className="text-white ml-auto" />
        </div>}
        
      </nav>
    </aside>
  );
};

type SidebarItemProps = {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
};

export function SidebarItem({ icon, text, active = false, alert = false }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-4 my-2 font-medium rounded-md cursor-pointer transition-all group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export default AppSidebar;
