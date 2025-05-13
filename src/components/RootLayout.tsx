import { Outlet } from "react-router";
import AppBarComponent from "./AppBarComponent";
import AppSidebar from "./AppSidebar";

export const RootLayout = () => {
  return (

    <div className="h-screen flex flex-col">
      {/* AppBar */}
      <AppBarComponent />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 h-screen overflow-y-auto p-2 sm:p-5 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
