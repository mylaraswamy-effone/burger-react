import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-buger-app-e2841-default-rtdb.firebaseio.com/'
})

export default instance