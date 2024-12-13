import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 7.125rem auto 4.81rem;
  grid-template-columns: auto;
  grid-template-areas: 
  'headerMenu'
  'content'
  'footer';


`

export const HeaderMenu = styled.div`
  width: 100%;

  grid-area: headerMenu;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding-top: 3.75rem;
  padding-left: 1.75rem;
  padding-bottom: 1.75rem;

  background-color: ${({theme}) => theme.COLORS.DARK_700};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  
  >svg {
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer;

    &:hover{
      filter: brightness(0.7);
    }

  }

  > h2{
    
    font-family: 'Roboto', sans-serif;
    font-size: 1.323rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  
    cursor: default;
  }
`

export const Content = styled.div`
  grid-area: content;

  margin: 2.25rem 1.75rem;
  min-height: auto;
  > div {
    padding-left: 0.875rem;
    
    svg {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }

  > ul {
    margin-top: 2.25rem;
    li {
      list-style-type: none;
      
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-style: normal;
      line-height: 140%;
      font-weight: 300;

      padding: 0.625rem;

      color: ${({theme}) => theme.COLORS.LIGHT_300};

      border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
      
      &:hover{
      filter: brightness(0.7);
      }
    
      cursor: pointer;
    }
  }

`