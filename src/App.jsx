import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Whishlist from './Pages/Whishlist'
import View from './Pages/View'
import Cart from './Pages/Cart'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'



function App() {

  const location = useLocation();

  return (
    <>
       {/* Set insideHome to true only when on the Home page */}
       <Header insideHome={location.pathname === '/'} />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Whishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/view/:id' element={<View/>} />
      <Route path='/*' element={<Navigate to={'/'}/>} />
    </Routes>
   
     <Footer />
    </>
  )
}

export default App
