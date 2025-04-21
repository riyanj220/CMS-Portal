import { Outlet } from "react-router";
import AppBarComponent from "./AppBarComponent";
import AppSidebar from "./AppSidebar";

export const RootLayout = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col ">
            {/* AppBar - remains at the top */}
            <AppBarComponent />
            
            <div className="flex flex-1">
                {/* Sidebar section */}
                <AppSidebar />

                {/* Main content - adjust based on sidebar state */}
                <div className="flex-1 p-2 overflow-y-auto min-h-screen sm:p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};