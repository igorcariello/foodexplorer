import styled from "styled-components"

export const Container = styled.section`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;

  >div {
    display: flex;
    gap: 1rem;
  }

  > h2{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: "Poppins";
    font-size: 1.125rem;
    font-style: normal;
    font-weight:500;
    line-height: 140%;
    margin-bottom: 1.5rem;
  }
`



