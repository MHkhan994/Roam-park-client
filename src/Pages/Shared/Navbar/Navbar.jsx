import NavbarTop from './NavbarTop';
import NavbarMiddle from './NavbarMiddle';
import NavCategory from './NavCategory';

const Navbar = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>

            <NavbarMiddle></NavbarMiddle>

            <NavCategory></NavCategory>
        </div>
    );
};

export default Navbar;