import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import DeliveryData from './DeliveryData'
import PersonalData from './PersonalData'
import UserData from './UserData'

function RegistrationForm({ onSubmit, validateId }) {
  const [currentStep, setCurrentStep] = useState(0)

  const forms = [
    <UserData onSubmit={nextStep} />,
    <PersonalData onSubmit={nextStep} validateId={validateId} />,
    <DeliveryData onSubmit={onSubmit} />
  ]

  function nextStep() {
    setCurrentStep(currentStep+1)
  }

  return <> { forms[currentStep] }</>
}

export default RegistrationForm