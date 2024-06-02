import { BASE_URL } from '../config';
import callApi from './callApiServices';

export function indexPosts() {
    const url = BASE_URL + 'posts';
    return callApi(url, 'get');
  }