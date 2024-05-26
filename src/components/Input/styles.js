import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border-radius: 0.5rem;

  > input {

    width: 100%;
    padding: 1rem 0.875rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: transparent;
    border: none;

    &::placeholder {
      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
    
    

  }
`
