import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  height: 2rem;
  
  border-radius: 0.5rem;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.COLORS.LIGHT_500 }` : `none`};

  > input {
    background:none;
    border: none;
    width:8rem;
    
    padding-left:1rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    &::placeholder{

      color: ${({ theme }) => theme.COLORS.LIGHT_500};

      font-family: 'Roboto';
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;

      padding-left:1rem;


      
    }

  }

  > button {
    display:flex;
    justify-self:center;
    align-self:center;
    border:none;
    background:none;

    svg {
      width:1rem;
      height: 1rem;
    }

    padding-right:1rem;


  }


  .button-delete{
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

  }


  .button-add{
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    
  }
`