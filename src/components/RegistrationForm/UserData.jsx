import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

function UserData({ onSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={event => {
      event.preventDefault()
      onSubmit({email, password})
    }}>
      <TextField
        id='email'
        value={email}
        type='email'
        required
        onChange={event => setEmail(event.target.value)}
        label='email'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='password'
        value={password}
        type='password'
        required
        onChange={event => setPassword(event.target.value)}
        label='Password'
        variant='outlined'
        fullWidth
        margin='normal'
      />

      <Button type='submit' variant='contained' color='primary'>
        Next
      </Button>
    </form>
  )
}

export default UserData