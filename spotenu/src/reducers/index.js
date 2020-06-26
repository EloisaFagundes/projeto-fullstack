import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import usersBand from "./user"
import musicalGenres from './genres'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    usersBand,
    musicalGenres
  })
