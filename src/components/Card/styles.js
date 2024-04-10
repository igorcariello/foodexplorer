import styled from "styled-components"

export const Container = styled.div`
  width: 13.125rem;
  height: 18.25rem;

  padding: 1.5rem;

  border-radius: 0.5rem;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
  background-color: ${({theme}) => theme.COLORS.DARK_200};

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  
  > svg{
    width: 1.5rem;
    height: 1.38rem;
    position: absolute;
    top:1rem;
    right: 1rem;
    z-index: 1;
  }

  > img{
    width: 5.5rem;
    height: 5.5rem;
    margin-bottom: 0.75rem;

    flex-shrink: 0;
  }

  > h3{
    font-size:0.875rem;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;

    text-align: center;

    margin-bottom: 0.75rem;

    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  > span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    text-align: center;

    margin-bottom: 0.75rem;


    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  > button {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    text-align: center;

    color: ${({theme}) => theme.COLORS.LIGHT_100};

    padding: 0.75rem 1.5rem;

    width: 10.125rem;
    height: 2rem;
  }
`



