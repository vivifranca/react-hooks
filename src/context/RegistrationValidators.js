import React from 'react';

const RegistrationValidators = React.createContext({
  id: noValidation,
  password: noValidation,
})

function noValidation(data) {
  console.log(data)
  return { valid: true, text: '' }
}

export default RegistrationValidators