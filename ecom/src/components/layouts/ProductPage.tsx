import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Typography from '../elements/text/Typography';
import Button from '../elements/button/Button';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
}

const ProductPage = () => {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            axios
                .get<Product>(`https://dummyjson.com/products/${id}`)
                .then((response) => {
                    setProduct(response.data)
                })
                .catch((error) => {
                    console.log(`Error fetching product data: ${error}`)
                })
        }
    }, [id])

    if (!product) {
        return <Typography>Loading...</Typography>
    }

    return (
        <div className='p-5 w-[60%]'>
            <Button
                onClick={() => navigate(-1)}
                className='mb-5 bg-black text-white rounded'
            >
                Back
            </Button>

            <img
                src={product.images[0]}
                alt={product.title}
                className='w-[50%] h-auto mb-5'
            />

            <Typography className='font-bold'>{product.title}</Typography>
            <Typography className='mb-4 text-gray-700 w-[70%]'>{product.description}</Typography>
            <div className='flex'>
                <Typography>Price : ${product.price}</Typography>
                <Typography className='ml-10'>Rating: {product.rating}</Typography>
            </div>
        </div>
    )
}

export default ProductPage