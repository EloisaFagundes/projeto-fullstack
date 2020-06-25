import React, { Component } from "react"
import AppBar from "../../components/AppBar/AppBar"
import styled from "styled-components"



const BannerImageStyled = styled.img `
max-width: 100%;
background-color: orange;
`


class HomePage extends Component {

    render() {
        return (
            
            <>
                <AppBar />
            
                {/* <BannerStyled> */}
                 <BannerImageStyled src={require('../../images/banner-desktop.png')} onClick="/"alt="imagem de um menino gritando em um microfone em preto e branco"/>
                 {/* </BannerStyled> */}
               
            </>
        )
    }
}
export default HomePage