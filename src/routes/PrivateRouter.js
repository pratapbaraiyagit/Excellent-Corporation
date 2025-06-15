import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { clearToken } from '../Helper/AuthTokenHelper';
import { setIsLogin } from '../Components/Redux/reducers/auth.slice';

export default function PrivateRouter({ children }) {
  const dispatch = useDispatch();
  let UserPreferences = sessionStorage.getItem('userLoginInfo');
  if (UserPreferences) {
    UserPreferences = JSON.parse(window.atob(UserPreferences));
  }
  const token = UserPreferences?.Token;
  useEffect(() => {
    if (!token) {
      clearToken();
      dispatch(setIsLogin(false));
    }
  }, [dispatch, token]);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>{children}</div>;
}
