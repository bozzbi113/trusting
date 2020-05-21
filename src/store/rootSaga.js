import { all } from "redux-saga/effects"
import watchHome from "../pages/home/saga"
export default function* rootSaga() {
  yield all([watchHome()])
}
