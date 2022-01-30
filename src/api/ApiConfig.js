import axios from 'axios';
import { Api } from './UrlApi';

export default axios.create({
  baseURL: `${Api}/`,
});
