import NavbarTop from './NavbarTop';
import NavbarMiddle from './NavbarMiddle';
import NavCategory from './NavCategory';

const Navbar = () => {
    return (
        <div>
            <div className='hidden md:block'>
                <NavbarTop></NavbarTop>
            </div>

            <NavbarMiddle></NavbarMiddle>

            <div className='lg:block hidden'>
                <NavCategory></NavCategory>
            </div>
        </div>
    );
};

export default Navbar;