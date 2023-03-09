import React from 'react';
import img from "../../../assets/images/banner1.png";


const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className=" w-1/2 rounded-lg shadow-2xl" />
                <div className='w-1/2 ml-6'>
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="py-6 text-xl">Humans naturally love entertainment.  But in a busy life there are very few opportunities for entertainment.  It is seen that many times people get 2-3 hours a day for entertainment.  At this time, he can't go outside and can't sit at home.  Many people play games during this time.  Many people want to explore the game for a few days, there are many gaming gear which are constantly updated so gamers are interested in new products, there are many gamers who cannot buy brand new gear due to financial condition.  Where the old gear can be sold and delivered to the recipient  We provide 24 hours service to our customers.  I sell products from these verified sellers.  Our hotline number is always functional for transaction related issues.  So you can use our site without hesitation.</p>
                    <button className="btn btn-primary">Get more</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;