import { Outlet } from "react-router";
import AppBarComponent from "./AppBarComponent";
import AppSidebar, { SidebarItem } from "./AppSidebar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QuizIcon from '@mui/icons-material/Quiz';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const RootLayout = () => {
    return (
        <div className="bg-gray-100 h-screen flex flex-col">
            <AppBarComponent/>
            <AppSidebar>
                <SidebarItem icon={<DashboardIcon/>} text="Dashboard" ></SidebarItem>
                <SidebarItem icon={<MenuIcon/>} text="General" ></SidebarItem>
                <SidebarItem icon={<LibraryBooksIcon/>} text="Course" ></SidebarItem>
                <SidebarItem icon={<AppRegistrationIcon/>} text="Registration" ></SidebarItem>
                <SidebarItem icon={<QuizIcon/>} text="Exam" ></SidebarItem>
                <SidebarItem icon={<CreditCardIcon/>} text="Fee" ></SidebarItem>
                <SidebarItem icon={<AccountBoxIcon/>} text="Profile" ></SidebarItem>
            </AppSidebar>
                
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}