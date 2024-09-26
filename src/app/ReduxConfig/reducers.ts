import { combineReducers } from "@reduxjs/toolkit";
import memberReducer from "../../app/[locale]/_components/member/memberSlice"

const reducers = combineReducers({
  member: memberReducer,
})

export default reducers;