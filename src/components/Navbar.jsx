import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Charging from './components/Charging';
import Battery from './components/Battery';
import Products from './components/Products';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';


function Navbar(props) {
    return (
        <div>

            <nav className='flex justify-around'>

                
                    <Link to='/'>
                    <img src={Navlogo} alt="" />
                    </Link>
                
             <div className='flex justify-around gap-3.5'>
                   <Link to='/'>products</Link>
                <Link to='/battery'>battery shop</Link>
                <Link to='/charging'> charging shop</Link>
                <Link to='/contact'>contact us</Link>
             </div>

           <div>
              <div className='flex border rounded-2xl border-gray-400'>
                <FaSearch className='text-gray-400'/>
                <input type="search" placeholder='search' className='rounded-2xl'/>
             </div>

             <BiCart />
           </div>
            </nav>
            
        </div>
    );
}

export default Navbar;