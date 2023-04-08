import React, { useState, useEffect } from 'react'

const Reservation = () => {
  const [reserve, setReserve] = useState({
    datetime: '',
    name: '',
    address: '',
  })

  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')

  useEffect(() => {
    if (date && hour) {
      handleReservation()
    }
  }, [date, hour])

  const handleReservation = () => {
    const selectedDate = new Date(date)
    const selectedHour = hour.split(':')
    selectedDate.setHours(selectedHour[0])
    selectedDate.setMinutes(selectedHour[1])
    const formattedDate = selectedDate.toISOString()
    // Update the reserve object with the formatted date

    // Set the updated reserve object
    setReserve((prevReserve) => ({ ...prevReserve, datetime: formattedDate }))
  }
  console.log(reserve)

  return (
    <div>
      <div>
        <input type='date' onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <button value={'7:00'} onClick={(e) => setHour(e.target.value)}>
          7:00 AM
        </button>
        <button value={'7:30'} onClick={(e) => setHour(e.target.value)}>
          7:30 AM
        </button>
      </div>
      <div>
        <span></span>
      </div>
    </div>
  )
}

export default Reservation
