import { AiFillCloseSquare } from 'react-icons/ai'
import { closeDrawer } from '../../../Hooks/drawerButtons';

const SideBar = () => {

    return (
        <div className="h-[95vh] w-full">
            <div className='flex justify-between items-center'>
                <h1 className="text-center text-lg font-semibold uppercase">Category Menu</h1>
                <button onClick={() => closeDrawer('my-drawer-sidebar')}>
                    <AiFillCloseSquare className='pri-text text-2xl'></AiFillCloseSquare>
                </button>
            </div>
        </div>
    );
};

export default SideBar;