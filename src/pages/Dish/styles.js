import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

`

export const Content = styled.div`
  margin: 1rem 3.5rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  
  > button:nth-of-type(1){
    margin-top: 1.25rem;
    margin-bottom: 1rem;
    a {
      color: ${({theme}) => theme.COLORS.LIGHT_300};

      font-size: 1.5rem;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    } 
  }

  > img {
    width: 16.5rem;
    height: 16.5rem;
    margin: 0 auto;
  }

  > h2 {
    margin: 1rem auto 1.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
    font-family: 'Poppins', sans-serif;
    font-style:normal;
    font-weight: 500;
    line-height: 140%;
    font-size: 1.69rem;
  }

  > p{
    width: 19.75rem;
    margin: 0 auto 1.5rem;

    text-align: center;

    font-family: 'Poppins';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  > div:nth-of-type(1) {
    width: 19.75rem;
    height: fit-content;
    margin: 0 auto 3rem;
    padding: 0 1.5rem;

    flex-wrap: wrap;

    display: flex;
    gap: 1.5em;
  }

  > div:nth-of-type(2){
    width: 19.75rem;
    
    display: flex;
    align-content: center;
    justify-content: center;


    gap: 1rem;
    margin: 0 auto;

    
    div{
      
      span{
        font-family: 'Roboto', sans-serif;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%; 
      }
      
      svg{
        width: 1.69rem;
        height: 1.69rem;
      }
    }

    button {
      height: 2.31rem;
      width: 11.75rem;

      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-size: 0.5915rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1rem;
    }
  }
`




