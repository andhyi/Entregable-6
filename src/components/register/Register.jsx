import React from 'react'
import { useForm } from 'react-hook-form'
import './register.css'

const defaultValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  role: ''
}

const Register = () => {

  const {register, handleSubmit, reset} = useForm()

  const handleUsuario = ()=>{
    
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    const obj = {
      firstName: 'WillyCe',
      lastName: 'Villaordu',
      email: 'andhyi@hotmail.com',
      password: '123456789',
      phone: '9232540002',
      role: 'admin'
    }
    axios.post(URL, obj)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err))
 
     
}
const submit = data => {
  
    createNewUser(data)
    
  }


const createNewUser = obj => {
  const url='https://ecommerce-api-react.herokuapp.com/api/v1/users'
  
  axios.post(url, obj)
  .then(res => console.log(res.data))
  .catch(err=> console.log(err))
 
  }



  return (
    <div className='register'>
    <form onSubmit={handleSubmit(submit)} className='form__register' >
        <h1>Register!</h1>
        <section className='contenedor_register'>
        <label>Firstname :</label>
        <input {...register('firstName')} type="text" />
        
        <label>Lastname :</label>
        <input {...register('lastName')} type="text" />
        <label>Email    :</label>
        <input {...register('email')} type="email" />
        <label>Password :</label>
        <input {...register('password')} type="password" />
        <label>Phone  :</label>
        <input {...register('phone')} type="text" />
        <label>Role user :</label>
        <input {...register('role')} type="text" />
        </section>
        <button>crear</button> 
    </form>
    </div>
  )
}

export default Register