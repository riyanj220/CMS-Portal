import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import AppBarComponent from "./AppBarComponent";


export const RootLayout = () => {
    return (
        <div className="bg-gray-100 mb-10">
            <AppBarComponent/>
            <Sidebar/>
            <div>
                <Outlet/>
            </div>

        </div>
    );
}