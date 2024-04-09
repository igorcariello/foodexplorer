import styled from 'styled-components'

export const Container = styled.header`  
  width: 100%;
  height: 7.125rem;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  

  display: flex;
  align-items: center;
  justify-content: space-evenly ;


  >div:nth-of-type(1){
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({theme}) => theme.COLORS.LIGHT_100};

    gap: 8px;

    h1 {
      font-size: 1.3225rem;
      line-height: 100%;
    }

  }

  >div:nth-of-type(2){
    display: flex;
    position: relative;
    
    >svg {
      width: 2.375rem;
      height: 2.375rem;       
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -0.2rem;
      right: 0;
      z-index: 1;
      
      background-color: ${({theme}) => theme.COLORS.TOMATO_100};

      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;

      p {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: none;

      }
      
    }

  }

`