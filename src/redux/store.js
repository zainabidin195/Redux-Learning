import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./form/UserForm1"


export const store = configureStore({
  reducer: {

    user: userReducer,

  },
})