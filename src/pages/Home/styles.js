import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  .swiper-pagination-bullet {
    background-color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  .swiper-pagination{
    bottom: -0.2rem;
  }

`

export const Content = styled.div`
  width: 100%;
  

  

`




