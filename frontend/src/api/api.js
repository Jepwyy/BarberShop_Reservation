import axios from 'axios'

export default axios.create({
  baseURL: 'https://barber-shop-backend-reservation.vercel.app/',
  withCredentials: true,
})
