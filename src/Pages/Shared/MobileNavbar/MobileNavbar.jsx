import { GiShoppingBag } from 'react-icons/gi';
import { AiFillHome, AiFillHeart } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const MobileNavbar = () => {

    const openDrawer = () => {
        const drawerCheckbox = document.getElementById('my-drawer');
        drawerCheckbox.checked = true;
    }

    const closeDrawer = () => {
        const drawerCheckbox = document.getElementById('my-drawer');
        if (drawerCheckbox) {
            drawerCheckbox.checked = false;
        }
    }

    return (
        <div className="h-14 w-screen fixed bottom-0 left-0">
            <div className="bg-[#f1f1f1] text-2xl dark-text flex justify-around items-center md:rounded-tl-md md:rounded-tr-md h-full md:w-[65vw] mx-auto w-full">
                <button onClick={openDrawer}>
                    <FaBars></FaBars>
                </button>
                <button className='relative'>
                    <GiShoppingBag></GiShoppingBag>
                    <p className='absolute -top-2 text-white h-4 w-4 rounded-full pri-bg text-xs -right-3'>4</p>
                </button>
                <button className='relative'>
                    <AiFillHeart></AiFillHeart>
                    <p className='absolute -top-2 text-white h-4 w-4 rounded-full pri-bg text-xs -right-3'>4</p>
                </button>
                <Link to={'/'}>
                    <AiFillHome></AiFillHome>
                </Link>
            </div>

            {/* =============sidebar========== */}
            <div className="drawer z-50">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[80vw] md:w-[55%] min-h-full bg-base-200 text-base-content">
                        <SideBar closeDrawer={closeDrawer}></SideBar>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;