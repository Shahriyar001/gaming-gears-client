import React from 'react';
import img1 from "../../../assets/images/ipad1.jpg";
import img2 from "../../../assets/images/macbook1.jpg";
import ProCard from './ProCard';

const Promotion = () => {

    const cardData = [
        {
            id: 1,
            name: 'Ipad in education',
            description: 'An iPad is much lighter and more portable than a stack of books, making it easy to carry with you wherever you go. You can have access to your entire library of books in one device.',
            img: img1
        },
        {
            id: 2,
            name: 'MacBook Pro',
            description: 'The MacBook Pro is a line of professional-grade laptop computers developed and manufactured by Apple Inc. It was first introduced in 2006 and has since undergone several design changes and updates.',
            img: img2
        }

    ]

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 my-8 py-6 gap-6'>
            {
                cardData.map(card => <ProCard
                    key={card.id}
                    card={card}
                ></ProCard>)
            }
        </div>
    );
};

export default Promotion;