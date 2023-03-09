import React from 'react';
import Category from '../Category/Category';
import LeftNav from './LeftNav/LeftNav';
import ProductsSec from './ProductsSec/ProductsSec';

const AllProduct = () => {
    return (
        <div className='flex'>
            <div className='w-1/5 bg-base-300'>
                <LeftNav></LeftNav>
            </div>
            <div className='w-4/5 '>
                <ProductsSec></ProductsSec>
            </div>
        </div>
    );
};

export default AllProduct;