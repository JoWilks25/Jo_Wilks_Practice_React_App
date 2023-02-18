import styled from "styled-components";


export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CenterCard = styled.div`
  width: 50vw;
  height: 50vh;
`

interface RowProps {
  justifyContent?: string;
  padding?: string;
  width?: string;
}

export const Row = styled.div<RowProps>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  padding: ${({ padding }) => padding || '1rem'};
  flex-wrap: wrap
`