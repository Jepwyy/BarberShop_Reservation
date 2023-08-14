import axios from '../api/api'
import { UserAuth } from '../context/authContext'

const useCookie = () => {
  const { setUser, setToken } = UserAuth()

  const refresh = async () => {
    const response = await axios.get('/auth/cookie')
    setUser(response.data.user)
    setToken(response.data.auth)

    return response.data.user
  }
  return refresh
}

export default useCookie
