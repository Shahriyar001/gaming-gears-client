import React, { useContext } from 'react';
import img from '../../../assets/images/gaming1.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div className="navbar bg-base-400 py-1 mt-2">
                <div className="flex-1">
                    <img src={img} alt="" />
                    <a className="btn btn-ghost normal-case text-xl font-bold">Joystick Junction</a>
                </div>
                <div className="flex-none gap-2">
                    <div className='mx-4 flex' >
                        <h2>Mon-Set 9.00 am-19.00 pm <br />Sunday closed</h2>
                    </div>
                    <div className='mx-4'>
                        <h2>5 Green Ave, Path. <br /> Dhaka, Bangladesh</h2>
                    </div>
                    <div className='mx-4'>
                        <h2> <span className='text-2xl font-semibold'>+1 222 333-44-55</span> <br /> Call us for enquiry</h2>
                    </div>
                    <div className='mx-4' className="dropdown dropdown-end">

                        {user?.uid ?
                            <>
                                <button onClick={handleLogOut} className='btn btn-primary'>Sign out</button>
                            </>
                            : <button className='btn btn-primary'><Link to="/login">Log In</Link></button>}
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><a>About us</a></li>
                        <li tabIndex={0}>
                            <a>
                                Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><a>Console</a></li>
                                <li><a>PC</a></li>
                            </ul>
                        </li>
                        <li><a>Contact Us</a></li>
                        {user?.uid ?
                            <>
                                < li > <Link to="/dashboard">Deshboard</Link></li>
                            </>
                            : <button className='btn btn-primary opacity-0'><Link to="/">Log In</Link></button>}


                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;