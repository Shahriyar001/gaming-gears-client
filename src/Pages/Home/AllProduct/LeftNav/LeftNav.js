import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='m-5'>
            <div className='grid grid-cols-1'>
                {
                    categories.map(category => <p className='btn btn-secondary my-2'
                        key={category.id}
                    >  <Link to={`/caregory/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;