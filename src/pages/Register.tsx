import React from 'react'
import { IAuth } from '../interfaces/auth.interface'
import AuthForm from '../components/forms/AuthForm'
import $axios from '../http'

const Register:React.FC = () => {
  const onSubmit = async (formData: IAuth) => {
    try {
      const res = await $axios.post('/registration', {...formData})
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return <AuthForm type='register' onSubmit={onSubmit}/>
}

export default Register