import { Navigate, Route } from "react-router";
import { createBrowserRouter, createRoutesFromElements } from "react-router";
import { Login } from "./components/Login";
import { RootLayout } from "./components/RootLayout";
import { Dashboard } from "./components/dashboard";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navigate to='/login' replace/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            <Route path="/dashboard" element={<RootLayout/>}>
                <Route path="dashboard" element={<Dashboard/>}></Route>
            </Route>
        </>
    ),

    {
        basename: "/CMS-Portal",
    }
)