import { Navigate, Route } from "react-router";
import { createBrowserRouter, createRoutesFromElements } from "react-router";
import { Login } from "./components/Login";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navigate to='/login' replace/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </>
    ),

    {
        basename: "/CMS-Portal",
    }
)