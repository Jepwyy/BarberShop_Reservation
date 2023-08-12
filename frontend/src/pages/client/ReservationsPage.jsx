import React, { useState } from 'react'
import Banner from '../../components/Banner'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import SelectDateTime from '../../components/SelectDateTime'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
const steps = ['Select Time & Data', 'Select Haircut', 'Submit a Receipt']
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#da9d40',
      contrastText: '#fff',
    },
  },
})
const ReservationsPage = () => {
  const PageName = 'Reservations'

  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Banner PageName={PageName} />
        <Box sx={{ width: '100%', padding: '1.5rem' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
          <div>{activeStep === 0 && <SelectDateTime />}</div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color='inherit'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} disabled={activeStep === 2}>
              Next
            </Button>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  )
}

export default ReservationsPage
