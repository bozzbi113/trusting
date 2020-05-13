import { createStore } from "redux"
import rootReducer from "./rootReducer"
import { composeWithDevTools } from "redux-devtools-extension"
const middleware = (history) => {
  if (process.env.NODE_ENV === "development") {
    return composeWithDevTools()
  }
}

export default function configureStore() {
  return createStore(rootReducer(), {}, middleware())
}
