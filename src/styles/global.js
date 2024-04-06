import { createGlobalStyle } from "styled-components";
import {DEVICE_BREAKPOINTS} from '../styles/deviceBreakpoints'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  
    -webkit-font-smoothing: antialiased;
  }

  :root{
    font-size: 16px;
    font-family: "Roboto", sans-serif;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 12px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
      font-size: 11px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
      font-size: 10px;
    }
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    outline: none;

  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  .pop-100-med{
    font-family: "Poppins", sans-serif;
    letter-spacing: 0%;
    font-weight: 500;
    text-decoration: none;
    font-size: 0.875rem;
    line-height: 1.5rem;
  } 

  .pop-200-med{
    font-family: "Poppins", sans-serif;
    letter-spacing: 0%;
    font-weight: 500;
    text-decoration: none;
    font-size: 1.25rem;
    line-height: 160%;
  }
  
  .pop-300-bold{
    font-family: "Poppins", sans-serif;
    letter-spacing: 0%;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.5rem;
    line-height: 140%;
  } 

  .pop-300-reg{
    font-family: "Poppins", sans-serif;
    letter-spacing: 0%;
    font-weight: 400;
    text-decoration: none;
    font-size: 1.5rem;
    line-height: 140%;
  } 

  .pop-400-med{
    font-family: "Poppins", sans-serif;
    letter-spacing: 0%;
    font-weight: 500;
    text-decoration: none;
    font-size: 2rem;
    line-height: 140%;
  }

  .pop-500-reg{
    font-family: "Poppins", sans-serif;
    letter-spacing: 0%;
    font-weight: 500;
    text-decoration: none;
    font-size: 2.5rem;
    line-height: 140%;
  }

  .rb-smllest-reg{
    font-family: "Roboto", sans-serif;
    letter-spacing: 0%;
    font-weight: 400;
    text-decoration: none;
    font-size: 0.75rem;
    line-height: 160%;

  }  
  
  .rb-smller-reg{
    font-family: "Roboto", sans-serif;
    letter-spacing: 0%;
    font-weight: 400;
    text-decoration: none;
    font-size: 0.875rem;
    line-height: 160%;
  }

  .rb-smller-bold{
    font-family: "Roboto", sans-serif;
    letter-spacing: 0%;
    font-weight: bold;
    text-decoration: none;
    font-size: 0.875rem;
    line-height: 160%;
  }

  .rb-sm-spaced{
    font-family: "Roboto", sans-serif;
    letter-spacing: 0%;
    font-weight: 400;
    text-decoration: none;
    font-size: 1rem;
    line-height: 160%;
  }

  .rb-sm-reg{
    font-family: "Roboto", sans-serif;
    letter-spacing: 0%;
    font-weight: 400;
    text-decoration: none;
    font-size: 1rem;
    line-height: 100%;
  }

  .rb-bg-bold{
    font-family: "Roboto", sans-serif;
    letter-spacing: 0%;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.25rem;
    line-height: 160%;
  }

  .rb-bger-bold{
    font-family: "Roboto", sans-serif;
    letter-spacing: 0%;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.5rem;
    line-height: normal;
  }

  .rb-bgest-reg{
    font-family: "Roboto", sans-serif;
    letter-spacing: 0%;
    font-weight: 400;
    text-decoration: none;
    font-size: 2rem;
    line-height: 160%;
  }

  .rb-bgest-bold{
    font-family: "Roboto", sans-serif;
    letter-spacing: 0%;
    font-weight: bold;
    text-decoration: none;
    font-size: 2.625rem;
    line-height: normal;
  }
`