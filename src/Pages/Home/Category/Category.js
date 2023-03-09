import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h2>This is category: {products?.length}</h2>
        </div>
    );
};

export default Category;