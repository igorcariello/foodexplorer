import styled from 'styled-components'

export const Container = styled.footer`  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.90625rem 1.735rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.47px;

    svg {
      width: 1.375rem;
      height: 1.125rem;
      line-height: 100%;
    }

    p{
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-size: 0.95375rem;
    }
  }

  >p {
    font-size: 0.75rem;
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};

  }

`