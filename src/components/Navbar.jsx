import React from 'react';
import { useEffect, useState } from 'react';
import { Router, Link, Routes, Route, useNavigate } from "react-router-dom";
import Charging from './Charging';
import Battery from './Battery';
import Products from './Products';
import Contact from './Contact';
import Navlogo from '../assets/navbarlogo.png'
import { FaSearch, FaCart } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';


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