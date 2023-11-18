import { AiFillCloseSquare } from "react-icons/ai";
import { closeDrawer } from "../Hooks/drawerButtons";

const CartDrawer = () => {
    return (
        <div className="drawer drawer-end z-40 bg-white">
            <input id="my-drawer-cart" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-cart" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-white p-4 w-80 min-h-full text-base-content overflow-y-auto cart-drawer">
                    <div className="pb-16">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-center text-lg font-semibold uppercase">cart preview</h1>
                            <button onClick={() => closeDrawer('my-drawer-cart')}>
                                <AiFillCloseSquare className='pri-text text-2xl'></AiFillCloseSquare>
                            </button>
                        </div>
                    </div>
                </ul>
                <div className="fixed bottom-0 flex flex-col w-80 gap-2 border-t p-3 bg-white">
                    <button className="w-full border-transparent transition-all pri-bg text-white py-[6px]  hover:bg-transparent border pri-border hover:text-black">
                        checkout
                    </button>
                    <button className="w-full border-transparent transition-all dark-bg text-white py-[6px] hover:bg-transparent border dark-border hover:text-black">
                        view cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;