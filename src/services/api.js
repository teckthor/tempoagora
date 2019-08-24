import axios from 'axios'

   const api = axios.create({ baseURL: `https://weather.cit.api.here.com/weather/1.0/`} )

export default api