import { createStore, applyMiddleware } from "redux"
import rootReducer from "./rootReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"
const sagaMiddleware = createSagaMiddleware()
const middleware = () => {
  return composeWithDevTools(applyMiddleware(sagaMiddleware))
}

export default function configureStore() {
  const store = createStore(rootReducer(), {}, middleware())
  store.runSaga = sagaMiddleware.run
  store.runSaga(rootSaga)
  return store
}
