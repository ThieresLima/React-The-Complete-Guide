import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-dd3f5.firebaseio.com/'
});

export default instance;