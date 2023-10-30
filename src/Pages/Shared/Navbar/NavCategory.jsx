import categories from '../../../../public/categories.json'
import './Navbar.css'

const NavCategory = () => {

    const handleMenuClick = (menuName) => {
        // console.log(menuName);
    }

    const handleCategoryClick = (category, menuName) => {
        // console.log(category);
    }
    const handleSubCategoryClick = (subCategory, category, menuName) => {
        console.log(subCategory, category, menuName);
    }

    return (
        <div className="py-3 my-container flex justify-center relative gap-16 font-semibold text-gray-700">
            {
                categories.map((category) => {
                    const { name, subCategory } = category
                    return <li onClick={() => handleMenuClick(name)} key={name} className={`list-none cursor-pointer category-li uppercase z-30`}>{name}
                        {subCategory &&
                            <ul className={`min-h-[300px] shadow-sm z-10 pt-10 flex px-[5%] absolute left-0 top-10 w-[85vw] bg-white ${subCategory.length >= 4 ? 'justify-between' : 'justify-start gap-[15%]'}`}>
                                {
                                    subCategory.map(subC => {
                                        const { name, subCategory } = subC
                                        return <div key={name}>
                                            <h4 onClick={() => handleCategoryClick(name, category.name)} className='text-sm pri-text pb-3'>{name}</h4>
                                            <div className='space-y-3'>
                                                {
                                                    subCategory && subCategory.map(item => <p
                                                        className='text-sm capitalize border-b text-gray-500 border-transparent hover:border-b hover:border-gray-300'
                                                        key={item}
                                                        onClick={() => handleSubCategoryClick(item, name, category.name)}
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