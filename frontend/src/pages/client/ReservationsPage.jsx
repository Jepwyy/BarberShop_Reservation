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
import SelectHaircut from '../../components/SelectHaircut'
import Reciept from '../../components/Reciept'
import { UserReserve } from '../../context/reserveContext'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import LinearProgress from '@mui/material/LinearProgress'
import axios from '../../api/api'
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
  const {
    datetime,
    haircut,
    reciept,
    setDatetime,
    setHaircut,
    setReciept,
    setSelectedTime,
    setSelectedDate,
  } = UserReserve()
  const PageName = 'Reservations'

  const [activeStep, setActiveStep] = useState(0)

  const mutation = useMutation({
    mutationFn: (reserve) =>
      axios.post('/reserve/create', reserve, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    onError: (error) => {
      // setErrorMessage(error.response.data.message);
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })
    },
    onSuccess: (data) => {
      toast.success(`Reservation Created Successfully! `, {
        position: 'top-center',
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })
      toast.info(
        `Please wait for the email confirmation after the admin reviewed your reservation.. `,
        {
          position: 'top-center',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: 'light',
        }
      )
      setDatetime('')
      setHaircut('')
      setSelectedDate(null)
      setSelectedTime(null)
      setReciept(null)
      setActiveStep(0)
    },
  })

  const handleNext = () => {
    if (activeStep === 0 && datetime == '') {
      toast.warn('Please Select Date and Time!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else if (activeStep === 1 && haircut == '') {
      toast.warn('Please Select a Haircut', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (reciept == null) {
      toast.warn('Please upload a reciept...', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else {
      const formData = new FormData()
      formData.append('datetime', datetime)
      formData.append('haircutId', haircut)
      formData.append('receiptImage', reciept)

      mutation.mutate(formData)
    }
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div className='mainReservation'>
        <Banner PageName={PageName} />
        <div>
          <Box sx={{ width: '100%', padding: '1.5rem' }}>
            {mutation.isLoading && (
              <LinearProgress color='primary' sx={{ marginBottom: '.2rem' }} />
            )}
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                return (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                )
              })}
            </Stepper>
            <div>
              {activeStep === 0 ? (
                <SelectDateTime />
              ) : activeStep === 1 ? (
                <SelectHaircut setActiveStep={setActiveStep} />
              ) : activeStep === 2 ? (
                <Reciept />
              ) : null}
            </div>
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
              {activeStep === 2 ? (
                <Button onClick={handleSubmit}>Submit</Button>
              ) : (
                <Button onClick={handleNext} disabled={activeStep === 2}>
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default ReservationsPage
