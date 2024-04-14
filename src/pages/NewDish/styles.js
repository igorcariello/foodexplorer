import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 0.6875rem 2rem 3.31rem;
  
  > button{
    display: flex;
    margin-bottom: 2.1875rem;
  
    svg {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
  
      width: 1.375rem;
      height: 1.375rem;
    }
  
    a {
      color: ${({theme}) => theme.COLORS.LIGHT_300};
  
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
   }
  
  }
  
  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
    margin-bottom: 2.3125rem;
  }
  
  
  `

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > .imageDish{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    
    
    div{
      display: flex;
      background-color: ${({theme}) => theme.COLORS.DARK_800};
      border-radius: 0.5rem;
      svg {
        position: absolute;
        
        width: 2rem;
        height: 2rem;

        top: 2.5rem;
        left: 2rem;
        
        color: ${({theme}) => theme.COLORS.LIGHT_100};
      }

      p {
        position: absolute;
        top: 2.8rem;
        left: 4.5rem;

        color: ${({theme}) => theme.COLORS.LIGHT_100};

        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem; 
      }

      
      div {
        input{
          display: none;
        }
      }
    }
  
  }
  
  #category{
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;

  }

  #ingredients {
    width: 100%;
    height: 3rem;
    
    border-radius: 0.5rem;

    
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    
    padding: 0.25rem 0.5rem;
    
    flex-shrink: 0;
  }
  
  > label {
      display: block;

      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; 
      
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      
      
      margin-bottom: 1rem;
    }
    
    > div {
      margin-bottom: 1.5rem;
      background-color: ${({theme}) => theme.COLORS.DARK_800};
      
    }
    
    
    
    
  > button {
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
    font-family: 'Poppins',sans-serif;
    line-height: 1.5rem;
    font-style: normal;
    font-size: 0.875rem;
    font-weight: 500;
  }
    
`




