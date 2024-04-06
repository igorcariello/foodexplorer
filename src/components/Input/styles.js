import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border-radius: 0.5rem;

  > input {
    height: 3rem;
    width: 100%;

    padding: 1rem 0.875rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

  }
`
