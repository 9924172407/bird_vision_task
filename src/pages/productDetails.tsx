import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { productDetails } from '../types/product';
import { useParams } from 'react-router-dom';
import ProductImageSlider from '../components/slider';
import StarRatings from 'react-star-ratings';
import Loader from '../utils/loader';

const ProductDetails: React.FC = () => {
  const [productInfo, setProductInfo] = useState<productDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setProductInfo(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [id]);

  console.log(productInfo);

  return (
    <div className='flex justify-center items-center py-10'>
      {isLoading ? (
        <Loader />
      ) : (
        productInfo && (
          <div className='w-5/6 grid grid-cols-1 md:grid-cols-2 m-1 gap-1'>
            <div>
              <div className='m-6'>
                <ProductImageSlider images={productInfo.images} />
              </div>
            </div>
            <div>
              <h4 className='capitalize text-2xl'>{productInfo.brand}</h4>
              <h1 className='uppercase text-4xl xl:text-4xl py-4'>{productInfo.title}</h1>
              <h3 className='border w-fit px-3 uppercase bg-blue-500 text-white my-3'>{productInfo.category}</h3>
              <>  <StarRatings
                rating={productInfo?.rating}
                starDimension="30px"
                starSpacing="5px"
              />({productInfo?.rating + ' Reviews'})</>
              <br />
              <h4 className='font-serif text-xl space-x-1 py-2'>{productInfo.description}</h4>
              <div className='flex flex-row'>
                <h4 className='font-bold text-2xl line-through text-red-400'>${productInfo.price}</h4>
                <h4 className='font-bold text-2xl px-2'>  ${productInfo ? productInfo.price - (productInfo.price * (productInfo.discountPercentage / 100)) : ''}
                </h4>
                {productInfo.discountPercentage && <h4 className='font-bold text-md'> ({productInfo.discountPercentage}% Discount)</h4>}
              </div>
              <div className='w-fit flex flex-row gap-2 pt-5'>
                <button className='border rounded-md bg-blue-500 text-white '>
                  Add to cart
                </button>
                <button className='border rounded-md bg-gray-500 text-white '>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ProductDetails;
