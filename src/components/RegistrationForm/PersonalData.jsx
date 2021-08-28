import React, { useState, useContext } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core'
import RegistrationValidators from '../../context/RegistrationValidators'
import useErrors from '../../hooks/useErrors'

function PersonalData({ onSubmit }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [id, setId] = useState('')
  const [sales, setSales] = useState(true)
  const [newsletter, setNewsletter] = useState(true)
  const validators = useContext(RegistrationValidators)
  const [errors, validate, isValidForm] = useErrors(validators)

  return (
    <form onSubmit={event => {
      event.preventDefault()
      if(isValidForm()) {
        onSubmit({name, lastName, id, sales, newsletter})
      }
    }}>
      <TextField
        id='name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
        label='name'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='lastName'
        name='lastName'
        value={lastName}
        onChange={event => setLastName(event.target.value)}
        label='Last name'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='id'
        name='id'
        value={id}
        onChange={event => setId(event.target.value)}
        onBlur={validate}
        error={!errors.id.valid}
        helperText={errors.id.text}
        label='ID'
        variant='outlined'
        fullWidth
        margin='normal'
      />

      <FormControlLabel
        label='Sales'
        control={
          <Switch
            checked={sales}
            onChange={event => setSales(event.target.checked)}
            name='sales'
            color='primary'
          />
        }
      />

      <FormControlLabel
        label='Newsletter'
        control={
          <Switch
            checked={newsletter}
            onChange={event => setNewsletter(event.target.checked)}
            name='newsletter'
            color='primary'
          />
        }
      />

      <Button type='submit' variant='contained' color='primary'>
        Next
      </Button>
    </form>
  )
}

export default PersonalData