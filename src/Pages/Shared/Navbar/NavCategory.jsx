
import categories from '../../../../public/categories.json'
import './Navbar.css'

const NavCategory = () => {
    return (
        <div className="py-3 my-container flex justify-center gap-16 uppercase font-semibold text-gray-700">
            {
                categories.map((category, index) => {
                    const { name } = category
                    return <li key={name} className='list-none cursor-pointer category-li'>{name}
                        {category.subCategory &&
                            <ul className='h-20 w-20 bg-gray-100'>

                            </ul>
                        }
                    </li>
                })
            }
        </div>
    );
};

export default NavCategory;