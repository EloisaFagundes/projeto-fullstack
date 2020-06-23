import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"

import HomePage from "../HomePage/HomePage"
import SignupPage from "../SignupPage/SignupPage"
import LoginPage from "../LoginPage/LoginPage"
import UserPage from "../UserPage/UserPage"
import AdminPage from "../AdminPage/AdminPage"
import ApproveBands from "../ApproveBands/ApproveBands"
import RegisterGenres from "../RegisterGenres/RegisterGenres"
import BandPage from "../BandPage/BandPage"


export const routes = {
    root: "/",
    signup: "/signup",
    login: "/login",
    user: "/user",
    admin: "/admin",
    approveBands: "/aprovar-bandas",
    registerGenres:"/cadastrar-generos",
    band: "/band"
}

function Router(props) {
    return (
        // Proteger as rotas?
        
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={HomePage} />
                <Route exact path={routes.signup} component={SignupPage} />
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.user} component={UserPage} />
                <Route exact path={routes.admin} component={AdminPage} />
                <Route exact path={routes.approveBands} component={ApproveBands} />
                <Route exact path={routes.registerGenres} component={RegisterGenres} />
                <Route exact path={routes.band} component={BandPage} />

                <Route path="*" component={() => "Página não encontrada"} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router