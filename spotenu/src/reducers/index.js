import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import usersBand from "./user"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    usersBand
  })
