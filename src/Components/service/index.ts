import axios from 'axios';
import CommonService from './CommonService';

const getService = axios.create({
  baseURL: 'http://175.119.224.137:4000',
  timeout: 60000,
});

export default getService;
export { CommonService };
