import React, { Component } from "react"
import AppBar from "../../components/AppBar/AppBar"
import Footer from "../../components/Footer/Footer"
import styled from "styled-components"

const bannerStyled = styled.div`
max-width: 100%;
background-color: orange;
`


class HomePage extends Component {

    render() {
        return (
            
            <>
                <AppBar />
            
                <bannerStyled>
                 <img src={require('../../images/banner-home-boy-microphone-black-white.jpg')} onClick="/"alt="imagem de um menino gritando em um microfone em preto e branco"/>
                 </bannerStyled>
                <Footer />
            </>
        )
    }
}
export default HomePage