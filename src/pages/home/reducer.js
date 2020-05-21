import produce from "immer"
import { INCREMENT_TEST } from "./constant"

const homeReducer = (state = { test: 1 }, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INCREMENT_TEST:
        return draft
      default:
        return draft
    }
  })
export default homeReducer
