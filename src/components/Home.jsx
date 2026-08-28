import React from 'react';
import { useEffect, useState } from 'react';
import { Router, Link, Routes, Route, useNavigate } from "react-router-dom";
import Charging from './Charging';
import Battery from './Battery';
import Products from './Products';
import Contact from './Contact';
import Navlogo from '../assets/navbarlogo.png'
import Navbar from './Navbar';
// import Home from './Home';
import Bg from '../assets/bg.png'
import Homelogos from '../assets/home-logos.png'
import Bghome from '../assets/homebg.png'
import { FaArrowAltCircleRight, FaSearch, FaCart } from 'react-icons/fa';
// import {  } from 'react-icons/fa';

function Home() {

    const navigate = useNavigate()
    return (
        <>
        
        {/* <img src={Bg} alt="" /> */}

        <div className='flex justify-around items-center h-[50vh]' style={{ backgroundImage: `url(${Bghome})` }}>

<div>

      <button className='bg-green-700 opacity-10 rounded-2xl p-1.5 text-white'>Eco friendly</button>
                <h1 className='text-4xl font-bold text-white'>Power Your journey. <br /> charge your future</h1>
            <p className='text-white mt-3'>Explore a new era of electric mobility with EV’s built for <br /> urban delivery, sustainability and convenience... </p>

            <div className='flex justify-around mt-7'>
                <button onClick={()=> navigate()} className='bg-[#F18729] rounded-2xl p-1.5'>shop now</button>
                <button onClick={()=> navigate()} className='bg-white text-black rounded-2xl p-1.5'>charging registraation</button>
            </div>

            {/* <h3 className='text-white'>our partners</h3> */}

            <img src={Homelogos} alt="" className='mt-7'/>
</div>


            <div  className='flex items-center'>
<FaArrowAltCircleRight className='bg-white' size={28}/>

            </div>

        </div>
        </>
    );
}

export default Home;