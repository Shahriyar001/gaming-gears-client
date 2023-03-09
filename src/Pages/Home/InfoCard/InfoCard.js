import React from 'react';
import InCard from './InCard';

const InfoCard = () => {

    const cardData = [
        {
            id: 1,
            name: 'FREE SHIPPING',
            description: 'We proide free shipping to our valid customer',
            icon: null,
            bgClass: 'bg-red-300'
        },
        {
            id: 2,
            name: 'MONEY BACK',
            description: 'We have money back geuranty for customers',
            icon: null,
            bgClass: 'bg-green-400'
        },
        {
            id: 3,
            name: 'DISCOUNTS',
            description: 'Customes can get discount in several orders',
            icon: null,
            bgClass: 'bg-cyan-400'
        },
        {
            id: 4,
            name: 'SUPPORT',
            description: 'We have 24/7 support center that you can get',
            icon: null,
            bgClass: 'bg-emerald-400'
        },
    ]
    return (
        <div className='grid gap-4 my-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {
                cardData.map(card => <InCard
                    key={card}
                    card={card}
                ></InCard>)
            }
        </div>
    );
};

export default InfoCard;