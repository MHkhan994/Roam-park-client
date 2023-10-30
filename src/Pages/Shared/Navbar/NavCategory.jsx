import { useNavigate } from 'react-router-dom';
import categories from '../../../../public/categories.json'
import './Navbar.css'

const NavCategory = () => {
    const navigate = useNavigate()

    return (
        <div className="py-3 my-container flex justify-center relative gap-16 font-semibold text-gray-700">
            {
                categories.map((category) => {
                    const { name, subCategory } = category
                    return <li onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/shop?menu=${name}`)
                    }} key={name} className={`list-none cursor-pointer category-li uppercase z-30`}>{name}
                        {subCategory &&
                            <ul className={`min-h-[250px] shadow-sm z-10 pt-10 grid grid-cols-6 px-[2%] absolute left-0 top-10 lg:w-[85vw] bg-white`}>
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
                                                        className='text-sm capitalize border-b text-gray-500 border-transparent hover:border-b hover:border-gray-300'
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
        </div>
    );
};

export default NavCategory;