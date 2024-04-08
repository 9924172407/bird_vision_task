import React from 'react';
import { productCard } from '../types/product';

const ProductCard: React.FC<{ data: productCard }> = ({ data }) => {
    const { thumbnail, title, price } = data;

    return (
        <div className='p-2 shadow-md m-3 shadow-gray-400 rounded-md flex justify-center flex-col'>
            <img src={thumbnail} alt={title} className='flex justify-center align-middle h-15 product-img ' />
            <h3 className='uppercase py-3 text-black'>{title}</h3>
            <h5 className='font-bold text-xl'>${price}</h5>
        </div>
    );
}

export default ProductCard;
