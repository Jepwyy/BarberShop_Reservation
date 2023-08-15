import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'
import { UserReserve } from '../context/reserveContext'

const SelectDateTime = () => {
  const {
    setDatetime,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  } = UserReserve()

  const shouldDisableDate = (date) => {
    return dayjs(date).isBefore(dayjs(), 'day')
  }

  const handleTimeButtonClick = (time) => {
    setSelectedTime(time)
    if (selectedDate) {
      const combined =
        dayjs(selectedDate).format('YYYY-MM-DD') + 'T' + time + ':00.000Z' // Using ISO 8601 format
      setDatetime(combined)
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
    if (selectedTime) {
      const combined =
        dayjs(date).format('YYYY-MM-DD') + 'T' + selectedTime + ':00.000Z' // Using ISO 8601 format
      setDatetime(combined)
    }
  }

  return (
    <div className='TimeDateContainer'>
      <div className='left'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={selectedDate}
            onChange={handleDateChange}
            shouldDisableDate={shouldDisableDate}
            sx={{ fontWeight: 'bold', mx: 0.5, fontSize: '3rem' }}
          />
        </LocalizationProvider>
      </div>
      <div className='right'>
        <div>
          <h1 className='title'>Morning</h1>
          <div className='btnContainer'>
            <button
              onClick={() => handleTimeButtonClick('08:00')}
              className={`btnTime ${selectedTime === '08:00' && 'selected'}`}
            >
              8:00 AM - 8:30 AM
            </button>
            <button
              onClick={() => handleTimeButtonClick('08:30')}
              className={`btnTime ${selectedTime === '08:30' && 'selected'}`}
            >
              8:30 AM - 9:00 AM
            </button>
            <button
              onClick={() => handleTimeButtonClick('09:00')}
              className={`btnTime ${selectedTime === '09:00' && 'selected'}`}
            >
              9:00 AM - 9:30 AM
            </button>
            <button
              onClick={() => handleTimeButtonClick('09:30')}
              className={`btnTime ${selectedTime === '09:30' && 'selected'}`}
            >
              9:30 AM - 10:00 AM
            </button>
            <button
              onClick={() => handleTimeButtonClick('10:00')}
              className={`btnTime ${selectedTime === '10:00' && 'selected'}`}
            >
              10:00 AM - 10:30 AM
            </button>
            <button
              onClick={() => handleTimeButtonClick('10:30')}
              className={`btnTime ${selectedTime === '10:30' && 'selected'}`}
            >
              10:30 AM - 11:00 AM
            </button>
            <button
              onClick={() => handleTimeButtonClick('11:00')}
              className={`btnTime ${selectedTime === '11:00' && 'selected'}`}
            >
              11:00 AM - 11:30 AM
            </button>
            <button
              onClick={() => handleTimeButtonClick('11:30')}
              className={`btnTime ${selectedTime === '11:30' && 'selected'}`}
            >
              11:30 AM - 12:00 PM
            </button>
          </div>
        </div>
        <div>
          <h1 className='title'>Afternoon</h1>
          <div className='btnContainer'>
            <button
              onClick={() => handleTimeButtonClick('13:00')}
              className={`btnTime ${selectedTime === '13:00' && 'selected'}`}
            >
              1:00 PM - 1:30 PM
            </button>
            <button
              onClick={() => handleTimeButtonClick('13:30')}
              className={`btnTime ${selectedTime === '13:30' && 'selected'}`}
            >
              1:30 PM - 2:00 PM
            </button>
            <button
              onClick={() => handleTimeButtonClick('14:00')}
              className={`btnTime ${selectedTime === '14:00' && 'selected'}`}
            >
              2:00 PM - 2:30 PM
            </button>
            <button
              onClick={() => handleTimeButtonClick('14:30')}
              className={`btnTime ${selectedTime === '14:30' && 'selected'}`}
            >
              2:30 PM - 3:00 PM
            </button>
            <button
              onClick={() => handleTimeButtonClick('15:00')}
              className={`btnTime ${selectedTime === '15:00' && 'selected'}`}
            >
              3:00 PM - 3:30 PM
            </button>
            <button
              onClick={() => handleTimeButtonClick('15:30')}
              className={`btnTime ${selectedTime === '15:30' && 'selected'}`}
            >
              3:30 PM - 4:00 PM
            </button>
            <button
              onClick={() => handleTimeButtonClick('16:00')}
              className={`btnTime ${selectedTime === '16:00' && 'selected'}`}
            >
              4:00 PM - 4:30 PM
            </button>
            <button
              onClick={() => handleTimeButtonClick('16:30')}
              className={`btnTime ${selectedTime === '16:30' && 'selected'}`}
            >
              4:30 PM - 5:00 PM
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectDateTime
