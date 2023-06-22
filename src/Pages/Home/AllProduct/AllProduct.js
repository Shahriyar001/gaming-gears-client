import React from 'react';
import Category from '../Category/Category';
import LeftNav from './LeftNav/LeftNav';
import ProductsSec from './ProductsSec/ProductsSec';

const AllProduct = () => {
    return (
        <div className=''>
            <h1 className='text-3xl font-semibold my-3 text-center'>Popular Products</h1>
            <div className='w-full '>
                <ProductsSec></ProductsSec>
            </div>
        </div>
    );
};

export default AllProduct;