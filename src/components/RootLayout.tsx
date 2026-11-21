import { Outlet, useLocation } from "react-router";
import AppBarComponent from "./AppBarComponent";
import AppSidebar from "./AppSidebar";
import { LayoutProvider } from "../context/LayoutContext";

const LayoutContent = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  if (isLogin) {
    return <Outlet />;
  }

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-800 antialiased overflow-hidden">
      <div className="no-print shrink-0">
        <AppBarComponent />
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        <AppSidebar />

        <main className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-5 lg:p-6 bg-slate-100/90 transition-all">
          <div className="max-w-[1600px] mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export const RootLayout = () => {
  return (
    <LayoutProvider>
      <LayoutContent />
    </LayoutProvider>
  );
};
