import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg)}
  100% { transform: rotate(360deg)}
`

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const SpinnerImage = styled.div`
  border: 8px solid ${({theme}) => theme.COLORS.TOMATO_100};
  border-top: 8px solid ${({theme}) => theme.COLORS.TOMATO_400};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: ${spin} 1s linear infinite;
`