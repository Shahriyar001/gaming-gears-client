import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h3 className="text-3xl mb-5">My Bookings</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                            bookings?.length &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmetDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-primary btn-sm'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        } */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;