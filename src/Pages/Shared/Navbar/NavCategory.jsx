
import categories from '../../../../public/categories.json'
import './Navbar.css'

const NavCategory = () => {
    return (
        <div className="py-3 my-container flex justify-center relative gap-16 font-semibold text-gray-700">
            {
                categories.map((category) => {
                    const { name, subCategory } = category
                    return <li key={name} className={`list-none cursor-pointer category-li uppercase z-30`}>{name}
                        {subCategory &&
                            <ul className='h-[400px] z-10 pt-10 flex justify-around absolute left-0 top-10 w-[90vw] bg-white'>
                                {
                                    subCategory.map(subC => {
                                        const { name, subCategory } = subC
                                        return <div key={name}>
                                            <h4 className='text-sm pri-text pb-3'>{name}</h4>
                                            <div className='space-y-3'>
                                                {
                                                    subCategory && subCategory.map(item => <p className='text-sm capitalize hover:border-b' key={item}>{item}</p>)
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