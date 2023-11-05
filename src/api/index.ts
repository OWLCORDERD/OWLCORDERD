import axios from 'axios';
import CommonService from './CommonService';

const getService = axios.create({
  baseURL: 'https://api.iuprofile.site',
  timeout: 60000,
});

export default getService;
export { CommonService };
