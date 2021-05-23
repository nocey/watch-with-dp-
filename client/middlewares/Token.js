import { useState } from 'react';

export function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());


  return {
    setToken: saveToken,
    token
  }
}

export const saveToken = userToken => {
  sessionStorage.setItem('user', userToken);
  window.location.href = '/';
};