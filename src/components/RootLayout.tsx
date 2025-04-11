import { Outlet } from "react-router";


export const RootLayout = () => {
    return (
        <div>
            siderbar header etc

            <div>
                <h1>Cms portal</h1>
                <Outlet/>
            </div>

        </div>
    );
}