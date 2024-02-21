import localeReducer from "@/i18nConfig/localeSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  locale: localeReducer,
})

export default reducers;