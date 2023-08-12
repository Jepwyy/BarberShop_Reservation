import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'
const SelectDateTime = () => {
  const shouldDisableDate = (date) => {
    return dayjs(date).isBefore(dayjs(), 'day')
  }
  return (
    <div className='TimeDateContainer'>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={dayjs()}
            shouldDisableDate={shouldDisableDate}
            sx={{ fontWeight: 'bold', mx: 0.5, fontSize: '3rem' }}
          />
        </LocalizationProvider>
      </div>
      <div>
        <div>
          <h1>Morning</h1>
          <button>8:00 AM - 8:30 AM</button>
          <button>8:30 AM - 9:00 AM</button>
          <button>9:00 AM - 9:30 AM</button>
          <button>9:30 AM - 10:00 PM</button>
          <button>10:00 AM - 10:30 AM</button>
          <button>10:30 AM - 11:00 AM</button>
          <button>11:00 AM - 11:30 AM</button>
          <button>11:30 AM - 12:00 PM</button>
        </div>
        <div>
          <h1>Afternoon</h1>
          <button>1:00 PM - 1:30 PM</button>
          <button>1:30 PM - 2:00 PM</button>
          <button>2:00 PM - 2:30 PM</button>
          <button>2:30 PM - 3:00 PM</button>
          <button>3:00 PM - 3:30 PM</button>
          <button>3:30 PM - 4:00 PM</button>
          <button>4:00 PM - 4:30 PM</button>
          <button>4:30 PM - 5:00 PM</button>
        </div>
      </div>
    </div>
  )
}

export default SelectDateTime
