import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const cardData = [
        {
            id: 1,
            name: 'John Duo',
            add: 'Dhaka, Bangladesh',
            description: 'I brought many things from here in sevarel time. there products are much well as it is 2nd hand product. one thing is important that there sellers are verified. so one can cheat whith customers. there services are also good. whenever i faced in any problem i knock them ab=nd the try to solve these problem as it is there problem, i am setisfied with there service.',
            icon: null,
            bgClass: 'bg-red-400'
        },
        {
            id: 2,
            name: 'Ben Josef',
            add: 'Khulna, Bangladesh',
            description: 'Few days ago i brought a keyboard from here and got some issue. then i knock them and they were very carefull with this problem. when they fix that key-board then the deliver it to my house. they are vere profetional and carefull about there customer setisfection. i am very happy with there services. i would like to buy moire things from there web site. aslo there website ui is also very well ',
            icon: null,
            bgClass: 'bg-red-400'
        }

    ]
    return (
        <div>
            <div className='my-6'>
                <h2 className='text-4xl text-center'>What people says</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    cardData.map(card => <ReviewCard
                        key={card.id}
                        card={card}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;