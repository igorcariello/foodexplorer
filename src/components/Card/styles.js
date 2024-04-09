import styled from "styled-components"

export const Container = styled.div`
  width: 13.125rem;
  height: 18.25rem;

  padding: 1.5rem;

  border-radius: 0.5rem;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
  background-color: ${({theme}) => theme.COLORS.DARK_200} ;
`



