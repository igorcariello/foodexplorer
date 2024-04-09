import styled from "styled-components"

export const Container = styled.div`
  height: 7.4rem;
  width: 10 0%;
  
  display: flex;
  position: relative;

  border-radius: 2.917px; 

  margin: 2.75rem 1rem 3.875rem 2.25rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%) ;
  
  img {
    width: 11.94rem;
    height: 9.3125rem;
    display: flex;
    position: absolute;
    top: -1.9rem;
    left: -1.9rem;
    z-index: 1;
  }

  >div {
    margin: 2.25rem 1.3125rem 1.375rem 9.5625rem;
    width: 100%;
    
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.125;
      font-style: normal;
      font-weight: 600; 
      line-height: 140%;

    }
    
    p {
      
      font-family: 'Poppins', sans-serif;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400; 
      line-height: 140%;
    }

  }
`



