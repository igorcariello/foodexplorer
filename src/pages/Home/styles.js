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
export const ContainerMesseger = styled.div`
  height: 16rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    color: ${({theme}) => theme.COLORS.TOMATO_300};
  }
`




