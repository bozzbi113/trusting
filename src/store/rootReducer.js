import { combineReducers } from "redux"
import homeReducer from "../pages/home/reducer"

const createReducer = () =>
  combineReducers({
    homeReducer,
  })
export default createReducer
