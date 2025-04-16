import { Outlet } from "react-router";
import AppBarComponent from "./AppBarComponent";
import AppSidebar from "./AppSidebar";

export const RootLayout = () => {
    return (
        <div className="bg-gray-100 h-screen flex flex-col">
            <AppBarComponent/>
            <AppSidebar>
            </AppSidebar>
                
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>

        </div>
    );
}