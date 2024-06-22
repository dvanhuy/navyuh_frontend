import { BASE_URL } from '../config';
import callApi from './callApiServices';

export function indexMessages(serverid) {
    const url = BASE_URL + 'servers/'+serverid+"/messages";
    return callApi(url, 'get');
}
export function sendMessages(data) {
  const url = BASE_URL + 'messages';
  return callApi(url, 'post', data);
}