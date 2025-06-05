import { Outlet, useLocation } from "react-router";
import { Helmet } from "react-helmet";
import AppBarComponent from "./AppBarComponent";
import AppSidebar from "./AppSidebar";

export const RootLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <>
      {!isLogin && (
        <Helmet>
          <meta name="viewport" content="width=1440" />
        </Helmet>
      )}

      <div className="h-screen flex flex-col">
        {!isLogin && <AppBarComponent />}

        <div className="flex flex-1 overflow-hidden relative">
          {!isLogin && <AppSidebar />}

          <div className="flex-1 h-screen overflow-y-auto p-2 sm:p-5 bg-gray-100">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
