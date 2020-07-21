import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import usersBand from "./user"
import musicalGenres from './genres'
import albuns from "./albuns"
import musics from "./music"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    usersBand,
    musicalGenres,
    albuns,
    musics
  })
