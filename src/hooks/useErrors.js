import React, { useState }from 'react';

function useErrors(validators) {
  const initialState = createInitialState(validators)
  const [errors, setErrors] = useState(initialState)

  function validate(event) {
    const { name, value } = event.target
    const newState = { ...errors }
    newState[name] = validators[name](value)
    setErrors(newState)
  }

  function isValidForm(){
    for(let field in errors) {
      if(!errors[field].valid){
        return false
      }
    }

    return true
  }

  return [errors, validate, isValidForm]
}

function createInitialState(validators) {
  const initialState = {}
  for(let field in validators) {
    initialState[field] = { valid: true, text: '' }
  }

  return initialState
}

export default useErrors