import React from 'react';
import { useRouteError } from 'react-router-dom';

const DislayError = () => {
    const error = useRouteError();
    return (
        <div>
            <p className="text-red-500">Something went worng</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please Sign Out and log back in</h4>
        </div>
    );
};

export default DislayError;