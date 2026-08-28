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
import { FaArrowAltCircleRight } from 'react-icons/fa';
import First from '../assets/1st-image.png'
import Second from '../assets/2nd-image.png'
import Logs from '../assets/About Us.png'
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

        <section className='flex justify-around'>

            <div className='flex'>
                <img src={First} alt="" />
                <img src={Second} alt="" />
            </div>

            <div>
                <h2 className='text-orange-400'>ABout us</h2>
                <h3 className='text-3xl'>Driving Africa’s Electric Future</h3>
                <p>At RoadRunner EV, we’re on a mission to revolutionize <br /> mobility through clean, smart, and accessible electric  <br />transportation. From eco-friendly tricycles to innovative <br /> battery swap services and expanding EV infrastructure, <br /> we provide solutions that power businesses and individuals alike. <br />
Built for performance and sustainability, our vehicles are <br /> designed to meet the unique challenges of urban and <br /> rural transportation — all while reducing carbon <br /> emissions and fueling progress.</p>

<h4 className='text-3xl'>Why RoadRunner?</h4>
<p>✔ Affordable, high-performing EVs <br /> ✔ Convenient battery swap and charging networks <br /> ✔ Trusted by riders, businesses, and delivery services <br /> ✔ Committed to a greener, smarter tomorrows.</p>
            </div>
        </section>

        <Products />

        <img src={Logs} alt="" />
        </>
    );
}

export default Home;