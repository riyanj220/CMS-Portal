import { Outlet } from "react-router";
import Sidebar from "./Sidebar";


export const RootLayout = () => {
    return (
        <div>
            <Sidebar/>
            <div>
                <Outlet/>
            </div>

        </div>
    );
}