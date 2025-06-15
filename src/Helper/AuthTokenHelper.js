import axios from 'axios';

export const getSessionData = () => {
  const sessionData = sessionStorage.getItem('userLoginInfo');
  if (sessionData) {
    return JSON.parse(window.atob(sessionData));
  } else {
    return null;
  }
};

export const clearToken = () => {
  sessionStorage.removeItem('userLoginInfo');
  delete axios.defaults.headers.common['Authorization'];
};
