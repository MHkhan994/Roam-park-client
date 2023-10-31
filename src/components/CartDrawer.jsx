
const CartDrawer = () => {
    return (
        <div className="drawer drawer-end z-40">
            <input id="my-drawer-cart" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-cart" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content overflow-y-auto">
                    <div className="h-[120vh]">
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                        <h1 className="py-10">hello</h1>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default CartDrawer;