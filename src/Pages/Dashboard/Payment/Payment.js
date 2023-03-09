import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const product = useLoaderData();
    const navigation = useNavigation();
    const { title, price } = product;
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    console.log(product);
    return (
        <div>
            <h2 className='text-3xl my-4'>payment for {title} </h2>
            <p className='text-xl'>Please pay <strong>$ {price}</strong> for your product.</p>
            <div className='w-96 my-12 bg-base-100'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        product={product}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;