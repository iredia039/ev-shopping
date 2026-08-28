import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Charging from './components/Charging';
import Battery from './components/Battery';
import Products from './components/Products';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Logs from './assets/About Us.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar />

        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Products" element={<Products />}/>
      <Route path='/battery' element={<Battery />}/>
      <Route path="/charging" element={<Charging/>}/>
        <Route path='/search' element={<Contact />} />

    </Routes>

    {/* <Home /> */}
    </>
  )
}

export default App
