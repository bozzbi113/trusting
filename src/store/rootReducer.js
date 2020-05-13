import { combineReducers } from "redux"
import homeReducer from "../pages/home/reducer"

const createReducer = (state, action) =>
  combineReducers({
    homeReducer,
  })
export default createReducer
