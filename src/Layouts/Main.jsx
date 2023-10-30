import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import MobileNavbar from "../Pages/Shared/MobileNavbar/MobileNavbar";

const Main = () => {

    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="lg:hidden block z-40">
                <MobileNavbar></MobileNavbar>
            </div>
        </div>
    );
};

export default Main;