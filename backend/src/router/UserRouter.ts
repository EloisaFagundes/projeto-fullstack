import express from "express"
import { UserController } from "../controller/UserController"

export const userRouter = express.Router()

userRouter.post("/signup/user", new UserController().signupUser)
userRouter.post("/signup/admin", new UserController().signupAdmin)
userRouter.post("/signup/band", new UserController().signupBand)

userRouter.post("/login", new UserController().login)

userRouter.get("/all-bands", new UserController().getAllBandsToBeApproved)
userRouter.post("/approve-band/:id", new UserController().approveBand)



