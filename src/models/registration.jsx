function validateId(id){
  if(id.length < 5) {
    return { valid: false, text: 'ID must be at least 5 digits' }
  } else {
    return { valid: true, text: '' }
  }
}

function validatePassword(password){
  if(password.length < 4 || password.length > 10) {
    return { valid: false, text: 'Your password should be between 4 and 10 characters' }
  } else {
    return { valid: true, text: '' }
  }
}

export { validateId, validatePassword }