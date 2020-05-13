import produce from "immer"

const homeReducer = (state = { test: 1 }, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "GET_COMPANIES_SUCCESS":
        return draft
      default:
        return draft
    }
  })
export default homeReducer
