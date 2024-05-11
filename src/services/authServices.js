import { BASE_URL } from '../config';
import callApi from './callApiServices';

export function getGoogleLoginURL() {
  const url = BASE_URL + `login/google`;
  return callApi(url);
}

export function login({email, password}) {
  const url = BASE_URL + 'login';
  return callApi(url, 'post', {
    email,
    password
  });
}

export function register({ email, password, name, password_confirmation }) {
  const url = BASE_URL + 'register';
  return callApi(url, 'post', {
    email,
    password,
    name,
    password_confirmation
  });
}

export function loginGoogle(params){
  const url = BASE_URL + 'login/google/callback';
  return callApi(url, 'get', params);
}

export function verifyAccount(params){
  const url = BASE_URL + 'register/verify';
  return callApi(url, 'get', params);
}

export function forgotPassword(params){
  const url = BASE_URL + 'forgot-password';
  return callApi(url, 'post', params);
}

export function resetPassword(params){
  const url = BASE_URL + 'reset-password';
  return callApi(url, 'post', params);
}
