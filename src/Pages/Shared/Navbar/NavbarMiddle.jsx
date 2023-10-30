import { IoSearchOutline } from 'react-icons/io5';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const NavbarMiddle = () => {
    return (
        <div className="py-4 border-b border-t my-1">
            <div className="my-container grid grid-cols-3 justify-between items-center">
                <Link to={'#'}>
                    <img className="h-8" src="/logo.png" alt="" />
                </Link>
                <div>
                    <form className="w-[35vw] mx-auto h-10 border rounded-md flex items-center px-3">
                        <input type="text" placeholder='Search Product' className="h-full w-full border-none pe-2 outline-none" />
                        <button>
                            <IoSearchOutline className='text-xl pri-text' />
                        </button>
                    </form>
                </div>
                <div className='flex justify-center items-center text-4xl ms-auto text-gray-600'>
                    <button className='relative'>
                        <LiaShoppingBagSolid />
                        <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center'>
                            <p className='text-sm pri-text pt-2 font-semibold'>4</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavbarMiddle;