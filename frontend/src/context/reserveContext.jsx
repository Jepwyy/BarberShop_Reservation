import { createContext, useContext, useState } from 'react'

const ReserveContext = createContext()

export const ReserveContextProvider = ({ children }) => {
  const [haircut, setHaircut] = useState('')
  const [datetime, setDatetime] = useState('')
  const [reciept, setReciept] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [price, setPrice] = useState('')

  return (
    <ReserveContext.Provider
      value={{
        haircut,
        setHaircut,
        datetime,
        setDatetime,
        reciept,
        setReciept,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        price,
        setPrice,
      }}
    >
      {children}
    </ReserveContext.Provider>
  )
}
export const UserReserve = () => {
  return useContext(ReserveContext)
}
