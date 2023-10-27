
const Navbar = () => {
    return (
        <div>
            <div className="py-3 flex justify-center my-container text-gray-600 uppercase text-sm">
                <h1>FREE SHIPPING THIS WEEK ORDER OVER - $55</h1>
            </div>
            <div className="py-5 border-b border-t my-1">
                <div className="my-container">
                    <img className="h-9" src="/logo.png" alt="" />
                </div>
            </div>
            <div className="py-3 my-container flex justify-center gap-8 uppercase font-semibold text-gray-700">
                <h1>Men's</h1>
                <h1>Women</h1>
            </div>
        </div>
    );
};

export default Navbar;