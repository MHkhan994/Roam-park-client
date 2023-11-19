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
            <div className='border-t h-[85vh] overflow-y-auto'>
                {
                    categories.map((category, i) => {
                        const { name, subCategory, photo } = category
                        return <div
                            key={name} className={`pt-4 ${subCategory && 'collapse-plus collapse'}`}
                        >
                            {
                                !subCategory ?
                                    <h4
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            navigate(`/shop?menu=${name}`)
                                            closeDrawer('my-drawer-sidebar')
                                        }}
                                        className='font-semibold uppercase dark-text ps-1 py-1 m-0 text-base'
                                    >
                                        <span className='flex gap-2 pt-0'>
                                            <img src={photo} className='h-6'></img>
                                            {name}
                                        </span>
                                    </h4>
                                    :
                                    subCategory &&
                                    <>
                                        <input type="radio" name="my-accordion-2" id={`accordion-${i}`} />
                                        <lebel
                                            htmlFor={`accordion-${i}`}
                                            className={`font-semibold uppercase collapse-title dark-text text-base`}
                                        >
                                            <span className='flex gap-2 items-center'>
                                                <img src={photo} className='h-6'></img>
                                                {name}
                                            </span>
                                        </lebel>
                                    </>
                            }
                            {
                                subCategory && <div className="collapse-content pe-0 me-0 text-base capitalize">
                                    {
                                        subCategory.map((sub, index) => {
                                            const { name, subCategory } = sub
                                            return <div
                                                key={name} className={`collapse ${subCategory && 'collapse-plus'}`}
                                            >
                                                {
                                                    !subCategory ?
                                                        <h4
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                navigate(`/shop?menu=${category.name}&category=${name}`)
                                                                closeDrawer('my-drawer-sidebar')
                                                            }}
                                                            className='font-semibold uppercase dark-text ps-8 py-2 m-0 text-base'
                                                        >
                                                            {name}
                                                        </h4>
                                                        :
                                                        subCategory &&
                                                        <>
                                                            <input type="radio" name="my-accordion-3" id={`accordion-${i}`} />
                                                            <lebel
                                                                htmlFor={`accordion-${i}`}
                                                                className={`font-semibold uppercase collapse-title dark-text text-base`}
                                                            >
                                                                <span className='ps-7'>{name}</span>
                                                            </lebel>
                                                        </>
                                                }
                                                {
                                                    subCategory && <div className="collapse-content space-y-4 text-base capitalize">
                                                        {
                                                            subCategory.map(item => <p
                                                                className='text-sm capitalize text-gray-500 relative hover:ms-8 transition-all hover:border-s font-normal border-orange-300 ms-7'
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