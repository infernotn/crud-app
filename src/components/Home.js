
import React from 'react'
import {Link} from 'react-router-dom';

 const Home = () => {
    return (
        <div >
            <h1 className=''>Home</h1>
           <Link to='/add' className='btn btn-success ml-2'>ADD</Link>
        </div>
    )
}
export default Home;