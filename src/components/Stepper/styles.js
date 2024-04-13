import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;

  margin-bottom: 1rem;

  > svg{
    width: 1.5rem;
    height: 1.5rem;

    cursor: pointer;
    
    &:hover{
      filter: brightness(0.6);
    }
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }


`



