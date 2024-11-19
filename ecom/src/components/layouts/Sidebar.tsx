import { useEffect, useState } from 'react'
import Button from '../elements/button/Button';
import InputSearch from '../elements/input/InputSearch';
import InputForm from '../elements/input/InputForm';
import Label from '../elements/input/Label';
import Typography from '../elements/text/Typography';

interface Product {
    category: string;
}

interface FetchResponse {
    products: Product[];
}

const Sidebar = () => {
    
    const [categories, setCategories] = useState<string[]>([]);
    const [keywords] = useState<string[]>([
        "apple",
        "watch",
        "fashion",
        "trend",
        "shoes",
        "shirt"
    ])

    // conect api public
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products")
                const data: FetchResponse = await response.json()
                const uniqueCategories = Array.from(new Set(data.products.map(product => product.category)))
                
                setCategories(uniqueCategories)
                console.log(uniqueCategories)
            } catch (error) {
                console.log('Error fetching product', error)
            }
        }

        fetchCategories();
    }, [])

  return (
    <div className='w-64 p-5 h-screen'>
        <h1 className="text-2xl font-bold mb-10 mt-4">
            React Store
        </h1>

        <section>
            <InputSearch 
                name='search'
                className='border-2 sm:mb-0'
                placeholder='Search Product'
            />

            <div className='flex justify-center items-center'>
                <InputForm 
                    name='min'
                    type='text'
                    className='border-2 mr-2 px-5 py-3 mb-3 w-full'
                    placeholder='Min'
                />
                 <InputForm 
                    name='max'
                    type='text'
                    className='border-2 mr-2 px-5 py-3 mb-3 w-full'
                    placeholder='Max'
                />
            </div>

            <section>
                {/* categories section */}
                <div className='mb-5'>
                    <Typography className='text-xl font-semibold mb-3'>Categories</Typography>
                </div>

                {categories.map((category, index) => (
                    <Label key={index} className='flex items-center mb-2'>
                        <InputForm type='radio' name='category' value={category} className='mr-2 w-[16px] h-[16px] cursor-pointer'/>
                        {category.toUpperCase()}
                    </Label>
                ))}
            </section>

            {/* keyword section */}
            <div className='mb-5 mt-4'>
                <Typography className='text-xl font-semibold mb-3'>Keywords</Typography>
                <div>
                    {keywords.map((keyword, index) => (
                        <Button
                            key={index}
                            className='block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200'
                        >
                            {keyword.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </div>

            <Button className='w-full mb-[4rem] py-2 bg-black text-white rounded mt-5 font-bold'>Reset Filters</Button>
            
        </section>
    </div>
  )
}

export default Sidebar