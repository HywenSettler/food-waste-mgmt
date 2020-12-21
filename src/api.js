import axios from 'axios';

export default axios.create({
  baseURL: 'https://food-mgmt-api.herokuapp.com/'
  // baseURL: 'http://localhost:5000/'
});
