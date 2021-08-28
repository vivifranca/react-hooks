import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core'
import './App.css'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import 'fontsource-roboto'
import {validateId, validatePassword} from './models/registration'
import RegistrationValidators from './context/RegistrationValidators'

class App extends Component {
  render() {
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align="center">Registration Form</Typography>
        <RegistrationValidators.Provider value={{ id: validateId, password: validatePassword }} >
          <RegistrationForm onSubmit={onSubmit} />
        </RegistrationValidators.Provider>
      </Container>
    )
  }
}

function onSubmit(data) {
  console.log(data)
}

export default App
