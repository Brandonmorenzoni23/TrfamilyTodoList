import React from 'react'
import { LogIn } from './login'
import { RegisterForm } from './Register'
import { Route, Routes } from 'react-router-dom'

const Auth = () => {
  return (
   <div className='Form'>
    <LogIn className=''/>
    <RegisterForm className=''/>
    <span>register? Click <a href='/register'>here</a></span>
   </div>
  )
}

export default Auth