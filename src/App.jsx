import './App.css'
import Footer from './components/Footer'
import HeaderLogin from './components/HeaderLogin'
import NavBar from './components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">
        <HeaderLogin/>  
        <NavBar/>
        <Routes >
          <Route path="/" element={<Navigate to="/home" />}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/item/:id" element={<ItemDetail/>}/>
          <Route path="/productos/category/:cat" element={<ItemListContainer/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/ubicacion" element={<Ubicacion/>}/>
          <Route path="/carrito" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registrar" element={<CreateUser/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
