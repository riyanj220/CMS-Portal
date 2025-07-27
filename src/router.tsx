import { Navigate, Route } from "react-router";
import { createBrowserRouter, createRoutesFromElements } from "react-router";
import { Login } from "./components/Login";
import { RootLayout } from "./components/RootLayout";
import { Dashboard } from "./components/Dashboard";
import General from "./components/General";
import Course from "./components/Course";
import Registration from "./components/Registration";
import Fee from "./components/Fee";
import Exam from "./components/Exam";
import Profile from "./components/Profile";
import FinantialLedgerDetail from "./components/dashboardComponents/FinantialLedgerDetail";
import { TeacherSurvey } from "./pages/TeacherSurvey";
import { CourseSurvey } from "./pages/CourseSurvey";




export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navigate to='/login' replace />}></Route>
            <Route path="/login" element={<Login />}></Route>

            <Route path="/dashboard" element={<RootLayout />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="general" element={<General />} />
                <Route path="course" element={<Course />} />
                <Route path="registration" element={<Registration />} />
                <Route path="fee" element={<Fee />} />
                <Route path="exam" element={<Exam />} />
                <Route path="profile" element={<Profile />} />

                <Route path="general/:submenu/" element={<General />} />
                <Route path="general/online-survey/course/:id" element={<CourseSurvey />} />
                <Route path="general/online-survey/teacher/:id" element={<TeacherSurvey />} />

                <Route path="exam/:submenu/" element={<Exam />} />


                <Route path="finantial-ledger" element={<FinantialLedgerDetail />} />
            </Route>
        </>
    ),

    {
        basename: "/CMS-Portal",
    }
)