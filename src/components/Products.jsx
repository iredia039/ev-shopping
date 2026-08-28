import React from "react";
import { useState, useEffect } from "react";
import { Route, Router, Routes, Link } from "react-router-dom";

function Products() {

    const [products, setProducts] = useState([])

    const del = products.slice(0,3)
    const no2 = products.slice(3,6)
    const no3 = products.slice(6,9)
    const no4 = products.slice(9, 12)
    const no5 = products.slice(12, 15)

          useEffect(() => {
         fetch('https://dummyjson.com/recipes')
         .then(res => {
           return res.json()
         })
         .then(data =>{
            setProducts(data.recipes)
         })
      }, [])
    return (
       <>
       <h1>our products</h1>


<div className="ml-[8]">
<div className="grid grid-cols-3">
           {/* <h2>delivery bikes</h2> */}

           {del.map((item)=> (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} className="w-50" alt="" />
        </div>
       ))}
</div>

 <div className="grid grid-cols-3">
          {/* <h2>delivery bikes</h2> */}

              {no2.map((item)=> (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} className="w-50" alt="" />
        </div>
       ))}
 </div>

<div className="grid grid-cols-3">
           {/* <h2>delivery bikes</h2> */}

                     {no3.map((item)=> (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} className="w-50" alt="" />
        </div>
       ))}
</div>


<div className="grid grid-cols-3">
           {/* <h2>delivery bikes</h2> */}
    
                     {no4.map((item)=> (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} className="w-50" alt="" />
        </div>
       ))}
</div>

<div className="grid grid-cols-3">
           {/* <h2>delivery bikes</h2> */}
             
                     {no5.map((item)=> (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} className="w-50" alt="" />
        </div>
       ))}
</div>
</div>
       </>
    );
}

export default Products;