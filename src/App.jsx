import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Popup from './Components/Popup/Popup'
// Banner from './Components/Home/Banner'
//import Contact from './Components/Home/Contact'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [order, setOrder] = useState(false)

  const handleOrder = () => {
    setOrder(!order)
  }

  return (
  
      <div>
        <Navbar handleOrder={handleOrder} />
        <Popup order={order} setOrder={setOrder}/>
        <Outlet/>
        <Footer/>
      </div>
   
  )
}

export default App
