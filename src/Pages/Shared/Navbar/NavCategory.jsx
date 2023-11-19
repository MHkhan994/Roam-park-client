import { useNavigate } from 'react-router-dom';
import categories from '/src/categories.json'
import './Navbar.css'
import { useEffect, useRef, useState } from 'react';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { openDrawer } from '../../../Hooks/drawerButtons';

const NavCategory = () => {
    const navigate = useNavigate()
    const navRef = useRef()
    const [pFixed, setPFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 126) {
                setPFixed(true)
            }
            else {
                setPFixed(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
    }, [])

    console.log(pFixed);

    return (
        <div ref={navRef} className={`${pFixed ? 'fixed top-0 left-0 z-30 bg-[#ffffffe7] backdrop-blur-sm shadow-sm' : 'bg-white'} py-3 w-[100%]`}>
            <div className='my-container flex justify-center items-center relative gap-16 font-semibold text-gray-700'>
                {
                    categories.map((category) => {
                        const { name, subCategory, photo } = category
                        return <li
                            onClick={(e) => {
                                e.stopPropagation()
                                navigate(`/shop?menu=${name}`)
                            }}
                            key={name}
                            className={`list-none cursor-pointer text-sm category-li uppercase z-30`}
                        >
                            <span className='flex gap-1'>
                                {
                                    photo && <img className='h-5' src={photo}></img>
                                }
                                {name}
                            </span>
                            {subCategory &&
                                <ul className={`${pFixed ? 'bg-[#ffffffe7] backdrop-blur-sm top-[42px]' : 'bg-white top-6'} min-h-[250px] shadow-sm z-10 py-10 grid grid-cols-6 px-[2%] absolute left-0 lg:w-[85vw]`}>
                                    {
                                        subCategory.map(subC => {
                                            const { name, subCategory } = subC
                                            return <div key={name}>
                                                <h4
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        navigate(`/shop?menu=${category.name}&category=${name}`)
                                                    }}
                                                    className='text-sm pri-text pb-3'>{name}</h4>
                                                <div className='space-y-3'>
                                                    {
                                                        subCategory && subCategory.map(item => <p
                                                            className='text-sm capitalize text-gray-500 relative hover:ps-1 transition-all hover:border-s font-normal border-orange-300'
                                                            key={item}
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                navigate(`/shop?menu=${category.name}&category=${name}&subCategory=${item}`)
                                                            }}
                                                        >
                                                            {item}
                                                        </p>)
                                                    }
                                                </div>
                                            </div>
                                        })
                                    }
                                </ul>
                            }
                        </li>
                    })
                }
                <div className={`${pFixed ? 'lg:flex' : 'hidden lg:hidden'} justify-center h-full items-center text-3xl ms-auto text-gray-600`}>
                    <button
                        onClick={() => openDrawer('my-drawer-cart')}
                        className='relative'
                    >
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

export default NavCategory;