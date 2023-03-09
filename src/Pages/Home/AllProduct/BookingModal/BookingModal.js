import React from 'react';
import { Link } from 'react-router-dom';

const BookingModal = ({ singpro }) => {
    const { img, details, title } = singpro;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="hero  bg-base-200">
                        <div className="hero-content flex-col ">
                            <img src={img} alt='/' className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="py-6">{details}</p>
                                <div className='flex justify-end'>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary mx-3 text-neutral-50">Add To Cart</button>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/dashboard/payment/${singpro._id}`}><button className="btn btn-primary text-neutral-50">Buy Now</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;