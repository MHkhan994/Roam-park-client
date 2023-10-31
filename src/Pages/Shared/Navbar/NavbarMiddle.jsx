import { IoSearchOutline } from 'react-icons/io5';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { openDrawer } from '../../../Hooks/drawerButtons';
import CartDrawer from '../../../components/CartDrawer';

const NavbarMiddle = () => {
    return (
        <div className="md:border-b md:border-t">
            <div className="my-container md:h-20 py-4 md:py-0 grid lg:grid-cols-3 md:grid-cols-2 md:justify-between items-center">
                <Link to={'/'}>
                    <img className="h-8 mx-auto md:mx-0" src="/logo.png" alt="" />
                </Link>
                <div className='pb-3'>
                    <form className="lg:w-[35vw] md:w-full w-[95vw] mx-auto h-10 border mt-3 rounded-md flex items-center px-3">
                        <input type="text" placeholder='Search Product' className="h-full w-full border-none pe-2 outline-none" />
                        <button>
                            <IoSearchOutline className='text-xl pri-text' />
                        </button>
                    </form>
                </div>
                <div className='lg:flex hidden justify-center items-center text-4xl ms-auto text-gray-600'>
                    <button
                        onClick={() => openDrawer('my-drawer-cart')}
                        className='relative'
                    >
                        <LiaShoppingBagSolid />
                        <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center'>
                            <p className='text-sm pri-text pt-2 font-semibold'>4</p>
                        </div>
                    </button>
                </div>
            </div>
            <CartDrawer></CartDrawer>
        </div>
    );
};

export default NavbarMiddle;