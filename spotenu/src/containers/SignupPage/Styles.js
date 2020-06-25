import styled from "styled-components";

export const SignupWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 2rem auto;
width: 30vw;
min-height: 80vh;
justify-content: center;
text-align: center;

@media screen and (max-device-width: 1200px) {
  width: 90vw;
}
`;

export const FormSignupWrapper = styled.form`
display: flex;
flex-direction: column;
`;

export const LogoStyled = styled.img`
    width: 30%;
    height: auto;
    margin: 2rem auto;
  
`

export const RegisterWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;