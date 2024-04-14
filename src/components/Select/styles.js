import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 0.5rem;

  > select {
    height: 3rem;
    width: 100%;

    padding: 1rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: transparent;
    border: none;
    
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; ;

  }
`
