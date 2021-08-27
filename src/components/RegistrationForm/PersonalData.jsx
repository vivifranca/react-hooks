import React, { useState } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core'

function PersonalData({ onSubmit, validateId }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [id, setId] = useState('')
  const [sales, setSales] = useState(true)
  const [newsletter, setNewsletter] = useState(true)
  const [errors, setErrors] = useState({ id: { valid: true, text: ''} })

  return (
    <form onSubmit={event => {
      event.preventDefault()
      onSubmit({name, lastName, id, sales, newsletter})
    }}>
      <TextField
        id='name'
        value={name}
        onChange={event => setName(event.target.value)}
        label='name'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='lastName'
        value={lastName}
        onChange={event => setLastName(event.target.value)}
        label='Last name'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='id'
        value={id}
        onChange={event => setId(event.target.value)}
        onBlur={event => setErrors({ id: validateId(event.target.value) })}
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