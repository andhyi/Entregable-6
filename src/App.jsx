import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/routes/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
import { useEffect } from 'react'
import axios from 'axios'
import Register from './components/register/Register'

function App() {

  const dispatch = useDispatch()

  // const handleUsuario = ()=>{
    
  //     const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //     const obj = {
  //       firstName: 'WillyCe',
  //       lastName: 'Villaordu',
  //       email: 'andhyi@hotmail.com',
  //       password: '123456789',
  //       phone: '9232540002',
  //       role: 'admin'
  //     }
  //     axios.post(URL, obj)
  //     .then(res=> console.log(res.data))
  //     .catch(err=> console.log(err))
    
     
     
  // }



  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className='app'>
      {/* <button onClick={handleUsuario}>crear</button> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/registerr' element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
