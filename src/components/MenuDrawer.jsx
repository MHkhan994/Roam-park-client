import SideBar from "../Pages/Shared/MobileNavbar/SideBar";

const MenuDrawer = () => {
    return (
        <div className="drawer z-50">
            <input id="my-drawer-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[80vw] md:w-[55%] min-h-full bg-base-200 text-base-content">
                    <SideBar></SideBar>
                </ul>
            </div>
        </div>
    );
};

export default MenuDrawer;