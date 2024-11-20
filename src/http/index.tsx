import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

const $axios = axios.create({
     withCredentials: true,
     baseURL: API_URL
})

$axios.interceptors.request.use((config) => {
     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
     return config
})

$axios.interceptors.response.use(
     (config) => config,
     async (error) => {
          const originalResponse = error.config
          if(error.response.status === 401 &&
             error.config && 
             !error.config._is_Retry
          ) {
               originalResponse._is_Retry = true
               try {
                    const response = await axios.get(`${API_URL}/refresh`, {
                         withCredentials: true
                    })
                    localStorage.setItem('token', response.data.accessToken)
                    return $axios.request(originalResponse)
               } catch (error) {
                    console.log('unauthorized')
               }
          }
     }
)

export default $axios