import React from 'react'
import Banner from '../../components/Banner'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'

const ReservationsPage = () => {
  const PageName = 'Reservations'

  // Function to determine if a date should be disabled (past dates)
  const shouldDisableDate = (date) => {
    return dayjs(date).isBefore(dayjs(), 'day')
  }

  return (
    <div>
      <Banner PageName={PageName} />
      <div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              defaultValue={dayjs()}
              shouldDisableDate={shouldDisableDate}
            />
          </LocalizationProvider>
        </div>
        <div>
          <div>
            <h1>Morning</h1>
            <button>8:00 AM - 9:00 AM</button>
            <button>9:00 AM - 10:00 AM</button>
            <button>10:00 AM - 11:00 AM</button>
            <button>11:00 AM - 12:00 PM</button>
          </div>
          <div>
            <h1>Afternoon</h1>
            <button>1:00 PM - 2:00 PM</button>
            <button>2:00 PM - 3:00 PM</button>
            <button>3:00 PM - 4:00 PM</button>
            <button>4:00 PM - 5:00 PM</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationsPage
