import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterCard = styled.div`
  width: 50vw;
  height: 50vh;
`

const Text = styled.div`
  color: white;
  font-size: 2rem;
  font-family: sans-serif;
`

const LinkButton = styled.a`
  text-decoration : none;
  background-color: black;
  color: white;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  font-family: sans-serif;
  border: 2px solid white;
  border-radius: 4px;
  :hover {
    background-color: white;
    color: black;
    border-color: grey;
  }
`

interface RowProps {
  justifyContent?: string;
  padding?: string;
  width?: string;
}

const Row = styled.div<RowProps>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  padding: ${({ padding }) => padding || '1rem'};
`


const Root = (): React.ReactElement =>
  <Background>
    <CenterCard>
      <Row padding="2rem 0"><Text>Welcome to Jo's Portfolio</Text></Row>
      <Row padding="2rem 0"><Text>Please select a flavour</Text></Row>
      <Row justifyContent="space-around">
        <LinkButton href='/professional'>Professional</LinkButton>
        <LinkButton href='/fun'>A Bit of Fun</LinkButton>
      </Row>
    </CenterCard>
  </Background>

export default Root