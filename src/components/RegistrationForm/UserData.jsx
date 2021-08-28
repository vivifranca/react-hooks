import React, { useState, useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import RegistrationValidators from '../../context/RegistrationValidators'

function UserData({ onSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ password: { valid: true, text: ''} })
  const validators = useContext(RegistrationValidators)

  function validate(event) {
    const { name, value } = event.target
    const newState = { ...errors }
    newState[name] = validators[name](value)
    setErrors(newState)
  }

  function isValidForm(){
    console.log(errors)
    for(let field in errors) {
      if(!errors[field].valid){
        return false
      }
    }

    return true
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      if(isValidForm()) {
        onSubmit({email, password})
      }
    }}>
      <TextField
        id='email'
        name='email'
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
        name='password'
        value={password}
        type='password'
        required
        onBlur={validate}
        onChange={event => setPassword(event.target.value)}
        error={!errors.password.valid}
        helperText={errors.password.text}
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