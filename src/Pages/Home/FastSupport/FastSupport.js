import React from 'react';
import img1 from "../../../assets/images/support/image-1.jpg";
import img2 from "../../../assets/images/support/image-2.jpg";
import img3 from "../../../assets/images/support/image-3.jpg";
import FastCard from './FastCard';

const FastSupport = () => {

    const cardData = [
        {
            id: 1,
            name: 'ONLINE SUPPORT',
            img: img1,
        },
        {
            id: 2,
            name: 'INASTALLATION',
            img: img2,
        },
        {
            id: 3,
            name: 'CUSTOMIZATION',
            img: img3,
        }

    ]

    return (
        <div className='m-5'>
            <div className='mx-auto mt-10'>
                <div className='text-center my-4'>
                    <h2 className='text-5xl'>Fastest Support</h2>
                    <p className='my-4 text-xl'>We provide fastest 24/7 support to our customer for there satisfaciton. </p>
                    <p></p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-8'>
                    {
                        cardData.map(card => <FastCard
                            key={card.id}
                            card={card}
                        ></FastCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FastSupport;