import { BASE_URL } from '../config';
import callApi from './callApiServices';

//admin
export function indexServers() {
  const url = BASE_URL + 'admin/servers';
  return callApi(url, 'get', {});
}

export function createServer({name, password,description}) {
    const url = BASE_URL + 'admin/servers';
    return callApi(url, 'post', {
      name,
      password,
      description
    });
  }

// client

export function indexUserServers() {
  const url = BASE_URL + 'servers';
  return callApi(url, 'get', {});
}

export function joinServer(idserver) {
  const url = BASE_URL + 'servers/join/'+idserver;
  return callApi(url, 'get');
}

// client and admin

export function showServer(idserver) {
  const url = BASE_URL + 'servers/'+idserver;
  return callApi(url, 'get');
}