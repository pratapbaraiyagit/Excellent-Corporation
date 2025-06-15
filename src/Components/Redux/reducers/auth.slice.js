import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showMessage } from './common.slice';
import axios from 'axios';
import { clearToken } from '../../../Helper/AuthTokenHelper';
import { Domain } from '../../../Helper/CommonHelper';

const initialState = {
  isLogin: false,
  loginLoading: false,
  registrationLoading: false,
  isRegistration: false,
  userData: {},
  isLogout: false,
  logoutLoading: false,
  isForgot: false,
  forgotLoading: false,
};

export const registration = createAsyncThunk(
  'registration',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        DomainName: Domain ? Domain : '',
        Full_Name:
          data.firstName && data.lastName ? data.firstName + data.lastName : '',
        Company_Name: data.companyName ? data.companyName : '',
        Login_Name: data.email ? data.email : '',
        Login_Pass: data.password ? data.password : '',
        Contact_No: data.contactNo ? data.contactNo : '',
        Country_ID: data.country.value ? data.country.value : '',
        City_ID: data.city.value ? data.city.value : '',
        State_ID: data.state.value ? data.state.value : '',
        Address_1: data.companyAddress ? data.companyAddress : '',
        WhatsApp_No: data.whatsappNo ? data.whatsappNo : '',
        Member_ID: data.member.value ? data.member.value : '',
        Other_Member: data.otherMember ? data.otherMember : '',
      };

      axios
        .post('registration', obj)
        .then(({ data }) => {
          if (data.IsSuccess) {
            resolve({ data: data.Result });
            dispatch(
              showMessage({ message: data.Message, varient: 'success' }),
            );
          } else {
            dispatch(showMessage({ message: data.Message }));
            reject(data);
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const login = createAsyncThunk('login', (data, { dispatch }) => {
  return new Promise((resolve, reject) => {
    const obj = {
      UserName: data.email ? data.email : '',
      Password: data.password ? data.password : '',
    };
    axios
      .post('login', obj)
      .then(({ data }) => {
        if (data.IsSuccess) {
          Object.keys(data.Result)?.length > 0 &&
            sessionStorage.setItem(
              'userLoginInfo',
              window.btoa(JSON.stringify(data.Result)),
            );
          resolve({ data: data.Result });
          dispatch(showMessage({ message: data.Message, varient: 'success' }));
        } else {
          dispatch(showMessage({ message: data.Message }));
          reject(data);
        }
      })
      .catch(errors => {
        reject(errors);
      });
  });
});
export const forgotPassword = createAsyncThunk(
  'forgotPassword',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        DomainName: data.DomainName,
        EmailID: data.EmailID,
      };
      axios
        .post('forget-password', obj)
        .then(({ data }) => {
          if (data.IsSuccess) {
            resolve({ data: data.Result });
            dispatch(
              showMessage({ message: data.Message, varient: 'success' }),
            );
          } else {
            dispatch(showMessage({ message: data.Message }));
            reject(data);
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const logout = createAsyncThunk('logout', (data, { dispatch }) => {
  return new Promise((resolve, reject) => {
    const obj = {
      UserID: data.UserID,
    };
    axios
      .post('logout', obj)
      .then(({ data }) => {
        if (data?.IsSuccess) {
          clearToken();
          resolve({ data: data.Result });
          dispatch(showMessage({ message: data.Message, varient: 'success' }));
        }
      })
      .catch(errors => {
        reject(errors);
        dispatch(showMessage({ message: data.Message }));
      });
  });
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getLoginInfo: (state, action) => {
      state.userData = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setIsRegistration: (state, action) => {
      state.isRegistration = action.payload;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.userData = {};
      state.loginLoading = true;
      state.isLogin = false;
    },
    [login.rejected]: (state, action) => {
      state.userData = {};
      state.isLogin = false;
      state.loginLoading = false;
    },
    [login.fulfilled]: (state, action) => {
      state.userData = action.payload.data;
      state.isLogin = true;
      state.loginLoading = false;
    },
    [logout.pending]: (state, action) => {
      state.logoutLoading = true;
      state.isLogout = false;
    },
    [logout.rejected]: (state, action) => {
      state.isLogout = false;
      state.logoutLoading = false;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLogin = false;
      state.isLogout = true;
      state.logoutLoading = false;
    },
    [registration.pending]: (state, action) => {
      state.registrationLoading = true;
      state.isRegistration = false;
    },
    [registration.rejected]: (state, action) => {
      state.isRegistration = false;
      state.registrationLoading = false;
    },
    [registration.fulfilled]: (state, action) => {
      state.isRegistration = true;
      state.registrationLoading = false;
    },
    [forgotPassword.pending]: (state, action) => {
      state.forgotLoading = true;
      state.isForgot = false;
    },
    [forgotPassword.rejected]: (state, action) => {
      state.isForgot = false;
      state.forgotLoading = false;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.isForgot = true;
      state.forgotLoading = false;
    },
  },
});

export const { getLoginInfo, setIsLogin, setIsRegistration } =
  authSlice.actions;
export default authSlice.reducer;
