import React, { useState } from 'react'
import { LogIn } from './login'
import { RegisterForm } from './Register'


const Auth = () => {  

  const [showForm, setShowForm] = useState('true')

  const toggleShow = () => {
    const show = showForm === 'true' ? 'false' : 'true'
    setShowForm(show)
  }
  console.log(showForm)


  return (
    
    
    <div className='form'>
    <h1 className='form-title'>TrFamily-Todo</h1>  
    <div data-show={showForm}>
    <LogIn className=''/>
    </div>
    <div data-dont-show={showForm}>
    <RegisterForm className=''/>
    </div>
    <div className='form-span-container'>
    <span className='form-span'>Login 
      <label className='switch'>
        <input type='checkbox' onClick={toggleShow}></input>
        <span className='slider round'></span>
      </label> 
    Register</span>
    </div>
   </div>
  )
}

export default Auth