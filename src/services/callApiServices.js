import axios from 'axios';
import { localStorageHelper } from './localStorageHelper';

async function callApi(url, method ='get', data) {
  const token = localStorageHelper.load('accessToken')
  var header;
  if (token){
    header = {
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      // "Access-Control-Allow-Origin": "*",
      'Authorization': `Bearer ${token}`
    }
  }
  try {
    switch (method) {
      case 'get':
        return await axios({
          method: method,
          url: url,
          headers : header,
          params: data
        });
      case 'post':
        return await axios({
          method: method,
          url: url,
          headers : header,
          data: data
        });
      default:
        return await axios({
          method: method,
          url: url,
        });
    }
  } catch (error) {
    return error.response;
  }
}

export default callApi;
