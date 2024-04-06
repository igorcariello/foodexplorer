import styled from 'styled-components'

export const Container = styled.button`  
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 3rem;
  
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  
  border-radius: 0.3125rem;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};


`