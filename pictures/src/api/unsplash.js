import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID UpFHjnZWFXOuSCA9ecB4g85x9hYQXKU0go9eJWCri3U'
  },
})