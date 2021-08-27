import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

function DeliveryData({ onSubmit }) {
  const [postalCode, setPostalCode] = useState('')
  const [address, setAddress] = useState('')
  const [unit, setUnit] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  return (
    <form onSubmit={event => {
      event.preventDefault()
      onSubmit({postalCode, address, unit, city, state})
    }}>
      <TextField
        id='postalCode'
        value={postalCode}
        type='text'
        onChange={event => setPostalCode(event.target.value)}
        label='Postal Code'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='address'
        value={address}
        type='text'
        onChange={event => setAddress(event.target.value)}
        label='Address'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='unit'
        value={unit}
        type='unit'
        onChange={event => setUnit(event.target.value)}
        label='Unit (optional)'
        variant='outlined'
        margin='normal'
      />

      <TextField
        id='city'
        value={city}
        type='text'
        onChange={event => setCity(event.target.value)}
        label='City'
        variant='outlined'
        margin='normal'
      />
      <TextField
        id='state'
        value={state}
        type='text'
        onChange={event => setState(event.target.value)}
        label='State'
        variant='outlined'
        margin='normal'
      />

      <Button type='submit' variant='contained' color='primary' fullWidth >
        Save
      </Button>
    </form>
  )
}

export default DeliveryData