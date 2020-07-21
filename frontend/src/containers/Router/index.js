import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"

import HomePage from "../HomePage/HomePage"
import SignupPage from "../SignupPage/SignupPage"
import LoginPage from "../LoginPage/LoginPage"
import UserPage from "../UserPage/UserPage"
import ApproveBands from "../ApproveBands/ApproveBands"
import RegisterGenres from "../RegisterGenres/RegisterGenres"
import BandAlbunsPage from "../BandAlbunsPage/BandAlbunsPage"
import BandMusicsPage from "../BandMusicsPage/BandMusicsPage"


export const routes = {
    root: "/",
    home:"/home",
    signup: "/signup",
    user: "/user",
    admin: "/admin",
    approveBands: "/aprovar-bandas",
    registerGenres:"/cadastrar-generos",
    bandAlbuns: "/band-albuns",
    bandMusics: "/band-musics"
}

function Router(props) {
    return (
        // Proteger as rotas?
        
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.home} component={HomePage} />
                <Route exact path={routes.signup} component={SignupPage} />
                <Route exact path={routes.root} component={LoginPage} />
                <Route exact path={routes.user} component={UserPage} />
                <Route exact path={routes.approveBands} component={ApproveBands} />
                <Route exact path={routes.registerGenres} component={RegisterGenres} />
                <Route exact path={routes.bandAlbuns} component={BandAlbunsPage} />
                <Route exact path={routes.bandMusics} component={BandMusicsPage} />

                <Route path="*" component={() => "Página não encontrada"} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router