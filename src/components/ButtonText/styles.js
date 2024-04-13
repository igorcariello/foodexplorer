import styled from 'styled-components'

export const Container = styled.button`  
  width: 100%;
 
  background-color: transparent;
  border: none;
  
  a {
    display: flex;
    align-items: center;

    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    
    
    border-radius: 0.3125rem;
    border: none;
  
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
  }


`