import { Button, TextField, Typography } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { IAuth } from '../../interfaces/auth.interface'


interface AuthFormProps {
    type:string
    onSubmit: (formData:IAuth) => void
}

const AuthForm:React.FC<AuthFormProps> = ({type, onSubmit}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({email, password})
    setEmail('')
    setPassword('')
  }  

  return (
    <form onSubmit={handleSubmit} style={{width: '469px', margin: '49px auto', display: 'flex', flexDirection: 'column'}}>
        <Typography>{type === 'login' ? 'Login' : 'Register'}</Typography>

        <TextField
            style={{marginBottom: '5px'}} 
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant='outlined'
            type='email'
            fullWidth
            required
        />

        <TextField  
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant='outlined'
            type='password'
            fullWidth
            required
        />

        <Button type='submit' style={{marginTop: '4px', background: '#1976d2', color: 'white'}}>
            <Typography>
                {type === 'login' ? 'Login' : 'Register'}
            </Typography>
        </Button>
    </form> 
  )
}

export default AuthForm