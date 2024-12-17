import styled from 'styled-components'

export const Container = styled.span`
  
  > p{
    width: fit-content;
    
    padding: 0.25rem 0.5rem;
    
    background-color: ${({theme}) => theme.COLORS.DARK_1000};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    font-size: 0.875rem;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    
    text-align: center;

    border-radius: 0.3125rem;

  }
`