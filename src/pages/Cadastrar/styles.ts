import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  h1 {
    color: ${colors.preto};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  form {
    backdrop-filter: blur(40px);
    border: 0.2rem solid ${colors.lite};
    border-radius: 1rem;
    padding: 1.5rem;
    font-size: 20px;
    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.lite};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        color: ${colors.lite};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    a {
        text-decoration: none;
        color: ${colors.preto};
        font-weight: bold;
       
      }
      button{
        text-decoration: none;
        background-color: ${colors.lite};
        font-size: 19px;
        color: ${colors.white};
      }
  }
`