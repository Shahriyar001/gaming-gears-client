import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from './ProductCard';

const ProductsSec = () => {
    // const [products, setProducts] = useState([]);
    const [singpro, setSingpro] = useState(null);

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/products')
            .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    return (
        <section>
            <div className='p-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setSingpro={setSingpro}
                    ></ProductCard>)
                }

            </div>
            {
                singpro &&
                <BookingModal
                    singpro={singpro}
                ></BookingModal>
            }
        </section>

        // https://preview.themeforest.net/item/leo-digital-prestashop-theme/full_screen_preview/6677692?_ga=2.245550916.1187940336.1677775171-1665065071.1665491297
    );
};

export default ProductsSec;