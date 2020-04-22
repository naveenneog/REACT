import axios from 'axios';

const instance  = axios.create({
    baseURL : "https://react-my-burger-eeba4.firebaseio.com/"
})


export default instance;