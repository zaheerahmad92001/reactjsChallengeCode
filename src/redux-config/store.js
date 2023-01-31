import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from '../redux-config/reducers/user'

const rootReducer = combineReducers({
    user:userSlice
})

export const store = configureStore({
  reducer:rootReducer
})