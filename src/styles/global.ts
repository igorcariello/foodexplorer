import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints'

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


`