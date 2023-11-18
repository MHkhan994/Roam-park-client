import { AiFillCloseSquare } from 'react-icons/ai'
import { closeDrawer } from '../../../Hooks/drawerButtons';

import categories from '/src/categories.json'
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

    const navigate = useNavigate()

    return (
        <div className="h-full w-full">
            <div className='flex justify-between items-center pb-4'>
                <h1 className="text-center text-lg font-semibold uppercase">Category Menu</h1>
                <button onClick={() => closeDrawer('my-drawer-sidebar')}>
                    <AiFillCloseSquare className='pri-text text-2xl'></AiFillCloseSquare>
                </button>
            </div>
            <div className='border-t py-4 h-[85vh] overflow-y-auto pb-1'>
                {
                    categories.map((category, i) => {
                        const { name, subCategory } = category
                        return <div
                            key={name} className={`collapse ${subCategory && 'collapse-plus'}`}
                        >
                            <input type="radio" name="my-accordion-2" id={`accordion-${i}`} />
                            {
                                subCategory ?
                                    <lebel
                                        htmlFor={`accordion-${i}`}
                                        className={`font-semibold font-ibm uppercase collapse-title dark-text text-base`}
                                    >
                                        {name}
                                    </lebel>
                                    :
                                    <h4
                                        className={`font-semibold font-ibm uppercase absolute ps-4 dark-text text-base`}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            navigate(`/shop?menu=${name}`)
                                            closeDrawer('my-drawer-sidebar')
                                        }}
                                    >
                                        {name}
                                    </h4>
                            }
                            {
                                subCategory && <div className="collapse-content pe-0 me-0 text-base capitalize">
                                    {
                                        subCategory.map((sub, index) => {
                                            const { name, subCategory } = sub
                                            return <div
                                                key={name} className={`collapse ${subCategory && 'collapse-plus'}`}
                                            >
                                                <input type="radio" name="my-accordion-3" id={`accordion-sub-${name}`} />
                                                <label
                                                    htmlFor={`accordion-sub-${name}`}
                                                    className={`font-semibold font-ibm capitalize collapse-title dark-text text-base`}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        navigate(`/shop?menu=${category.name}&category=${name}`)
                                                        closeDrawer('my-drawer-sidebar')
                                                    }}
                                                >
                                                    <p
                                                    >
                                                        {name}
                                                    </p>
                                                </label>
                                                {
                                                    subCategory && <div className="collapse-content space-y-4 text-base capitalize">
                                                        {
                                                            subCategory.map(item => <p
                                                                className='text-sm capitalize text-gray-500 relative hover:ps-5 transition-all hover:border-s font-normal border-orange-300 ps-4'
                                                                key={item}
                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    navigate(`/shop?menu=${category.name}&category=${name}&subCategory=${item}`)
                                                                    closeDrawer('my-drawer-sidebar')
                                                                }}
                                                            >
                                                                {item}
                                                            </p>)
                                                        }
                                                    </div>
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default SideBar;