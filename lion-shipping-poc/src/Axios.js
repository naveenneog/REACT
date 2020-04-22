import axios from 'axios';


const instance  = axios.create({
    baseURL : "https://apiv2.shiprocket.in/v1/external/"
})

// instance.defaults.headers.common['Authorization'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM5MDU1MiwiaXNzIjoiaHR0cHM6Ly9hcGl2Mi5zaGlwcm9ja2V0LmluLy92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNTgzNTYzMzA0LCJleHAiOjE1ODQ0MjczMDQsIm5iZiI6MTU4MzU2MzMwNCwianRpIjoiOW84NEt3YkxCRDZQZE5MNiJ9.FpZuSNfQo_Yf309RXAlVTtaedY4kOM4PAzLiYkVBKn8";
export default instance;