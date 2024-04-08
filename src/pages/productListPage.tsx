import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { productDetails } from '../types/product';
import ProductCard from '../components/productCard';
import { Link } from 'react-router-dom';
import Loader from '../utils/loader';

const ProductListPage: React.FC = () => {
    const [productData, setProductData] = useState<productDetails[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const fetchProductData = () => {
        setIsLoading(true);
        const limit = 10;
        const skip = (currentPage - 1) * limit;
        axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then(response => {
                setProductData(response.data.products);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    };
    
    useEffect(() => {
        fetchProductData();
    }, [currentPage,]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <div className='w-6/7 md:w-4/5 m-auto'>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className=' m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
                        {productData.map((item: productDetails, index: number) =>
                            <Link to={`/products/${item.id}`} key={index}>
                                <ProductCard data={item} />
                            </Link>
                        )}
                    </div>
                    <div className="flex justify-center mt-4 gap-3">
                        <button onClick={handlePrevPage} disabled={currentPage === 1} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                            Prev
                        </button>
                        <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductListPage;
