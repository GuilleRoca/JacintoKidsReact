import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import HeaderLogin from './components/HeaderLogin'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail'
import Contacto from './components/Contacto'
import Ubicacion from './components/Ubicacion'
import Cart from './components/Cart'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import Payments from './components/Payments'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './components/Spinner'


function App() {

  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProductos = async () => {
    const {data} = await axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=138745311')
    setCategorias(data.available_filters[0].values)
    setLoading(false)
  }

  console.table(categorias)

  useEffect(() => {
    fetchProductos()
/*     getUsers() */
  }, [])
    
  if (loading) { return <Spinner/>}


  return (
    <>
      <div>
        <HeaderLogin/>  
        <NavBar categories={categorias}/>
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
          <Route path="/pagos" element={<Payments/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
