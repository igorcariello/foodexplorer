import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  margin: 9.875rem 4.0625rem 0;

  > div:first-of-type{
    display: flex;
    gap:10px;
    align-items: center;

    margin-bottom: 4rem;
    img {
      height: 2.7rem;
      width: 2.7rem;
    }

    h1 {
      font-size: 2.3275rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      
    }
  }

  >h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 8px;
  }
  
  >div:nth-of-type(2){
    margin-bottom: 2rem;
  }

  >div:nth-of-type(3){
    margin-bottom: 2rem;
  }

  >button:nth-last-of-type(1){
    margin-top: 2rem;
  }

`

