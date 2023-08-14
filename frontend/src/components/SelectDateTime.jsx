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
      <div className='left'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={dayjs()}
            shouldDisableDate={shouldDisableDate}
            sx={{ fontWeight: 'bold', mx: 0.5, fontSize: '3rem' }}
          />
        </LocalizationProvider>
      </div>
      <div className='right'>
        <div>
          <h1 className='title'>Morning</h1>
          <div className='btnContainer'>
            <button className='btnTime'>8:00 AM - 8:30 AM</button>
            <button className='btnTime'>8:30 AM - 9:00 AM</button>
            <button className='btnTime'>9:00 AM - 9:30 AM</button>
            <button className='btnTime'>9:30 AM - 10:00 PM</button>
            <button className='btnTime'>10:00 AM - 10:30 AM</button>
            <button className='btnTime'>10:30 AM - 11:00 AM</button>
            <button className='btnTime'>11:00 AM - 11:30 AM</button>
            <button className='btnTime'>11:30 AM - 12:00 PM</button>
          </div>
        </div>
        <div>
          <h1 className='title'>Afternoon</h1>
          <div className='btnContainer'>
            <button className='btnTime'>1:00 PM - 1:30 PM</button>
            <button className='btnTime'>1:30 PM - 2:00 PM</button>
            <button className='btnTime'>2:00 PM - 2:30 PM</button>
            <button className='btnTime'>2:30 PM - 3:00 PM</button>
            <button className='btnTime'>3:00 PM - 3:30 PM</button>
            <button className='btnTime'>3:30 PM - 4:00 PM</button>
            <button className='btnTime'>4:00 PM - 4:30 PM</button>
            <button className='btnTime'>4:30 PM - 5:00 PM</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectDateTime
