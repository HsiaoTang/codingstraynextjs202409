import localeReducer from '../localeSlice';
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  locale: localeReducer,
})

export default reducers;