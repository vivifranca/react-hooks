import { Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import ShippingData from './ShippingData'
import PersonalData from './PersonalData'
import UserData from './UserData'

function RegistrationForm({ onSubmit, validateId }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if(currentStep === forms.length-1) {
      onSubmit(formData)
    }
  })

  const forms = [
    <UserData onSubmit={addFormData} />,
    <PersonalData onSubmit={addFormData} validateId={validateId} />,
    <ShippingData onSubmit={addFormData} />,
    <Typography variant='h5'>Data saved successfully! Thank you :)</Typography>
  ]

  function addFormData(stepData){
    setFormData({...formData, ...stepData})
    nextStep()
  }

  function nextStep() {
    setCurrentStep(currentStep+1)
  }

  return <>
    <Stepper activeStep={currentStep}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Personal Data</StepLabel></Step>
      <Step><StepLabel>Shipping</StepLabel></Step>
      <Step><StepLabel>Done</StepLabel></Step>
    </Stepper>
    { forms[currentStep] }
  </>
}

export default RegistrationForm