import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advertise from '../Advertise/Advertise';
import AllProduct from '../AllProduct/AllProduct';
import Banner from '../Banner/Banner';
import BastSaller from '../BestSaller/BastSaller';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import FastSupport from '../FastSupport/FastSupport';
import InfoCard from '../InfoCard/InfoCard';
import Promotion from '../Promotion/Promotion';
import Review from '../Review/Review';
import Fifa from '../Fifa/Fifa';
import Newsletter from '../NewsLetter/Newsletter';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <BastSaller></BastSaller>
            <Promotion></Promotion>
            <AllProduct></AllProduct>
            <AboutUs></AboutUs>
            <FastSupport></FastSupport>
            <Review></Review>
            <Fifa></Fifa>
            <Advertise></Advertise>
            <Blog></Blog>
            <ContactUs></ContactUs>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;