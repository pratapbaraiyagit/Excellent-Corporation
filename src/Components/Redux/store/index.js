import { configureStore } from '@reduxjs/toolkit';
import auth from '../reducers/auth.slice.js';
import common from '../reducers/common.slice.js';
import dashboard from '../reducers/dashboard.slice.js';
export const store = configureStore({
  reducer: {
    auth,
    common,
    dashboard,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
