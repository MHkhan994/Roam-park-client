import { GiShoppingBag } from 'react-icons/gi';
import { AiFillHome, AiFillHeart } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { openDrawer } from '../../../Hooks/drawerButtons';
import MenuDrawer from '../../../components/MenuDrawer';

const MobileNavbar = () => {

    return (
        <div className="h-14 w-screen fixed bottom-0 left-0">
            <div className="bg-[#f1f1f1] text-2xl dark-text flex justify-around items-center md:rounded-tl-md md:rounded-tr-md h-full md:w-[65vw] mx-auto w-full">
                <button onClick={() => openDrawer('my-drawer-sidebar')}>
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
            <MenuDrawer></MenuDrawer>
        </div>
    );
};

export default MobileNavbar;