import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarTop = () => {
    return (
        <div className="py-2 grid justify-center items-center grid-cols-3 my-container text-gray-600 uppercase text-sm">
            <h1>call us: +880124383483</h1>
            <h1 className='text-center mx-auto'>FREE SHIPPING THIS MONTH ORDER OVER - $55</h1>
            <div className='ms-auto flex items-center text-lg gap-2'>
                <Link to="https://web.facebook.com/mahmudkhan.mahmudkhan.125/" target='_blank' className='border p-1 rounded-sm'>
                    <FaFacebookF></FaFacebookF>
                </Link>
                <Link to="https://www.linkedin.com/in/mahmud-khan-a61850263/" target='_blank' className='border p-1 rounded-sm'>
                    <AiOutlineInstagram></AiOutlineInstagram>
                </Link>
                <Link to="https://www.linkedin.com/in/mahmud-khan-a61850263/" target='_blank' className='border p-1 rounded-sm'>
                    <AiFillYoutube></AiFillYoutube>
                </Link>
            </div>
        </div>
    );
};

export default NavbarTop;