import styled, { keyframes } from "styled-components";

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

interface FadeInProps {
  duration?: string;
  delay?: string;
}

const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const FadeIn = styled.div<FadeInProps>`
  animation-name: ${fadeInAnimation};
  animation-duration: ${({ duration }) => duration || '0s'};
  animation-delay: ${({ delay }) => delay || '0s'};
  animation-timing-function: ease-in-out;
  animation-fill-mode: backwards;
`;

const Text = styled.div`
  color: white;
  font-size: 2rem;
  font-family: sans-serif;
`

interface LinkButtonProps {
  glowColour?: string;
}

const LinkButton = styled.a<LinkButtonProps>`
  text-decoration: none;
  background-color: black;
  color: white;
  padding: 0.5rem 2rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-family: sans-serif;
  border: 2px solid white;
  border-radius: 4px;
  :hover {
    background-color: white;
    color: black;
    box-shadow: 0px 0px 10px 10px ${({ glowColour }) => glowColour || 'white'};
    border-radius: 25px;
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
  flex-wrap: wrap
`


const Root = (): React.ReactElement =>
  <Background>
    <CenterCard>
      <Row padding="2rem 0">
        <FadeIn duration="2s" delay="0.5s">
          <Text>Welcome to Jo's Portfolio</Text>
        </FadeIn>
      </Row>
      <Row padding="2rem 0">
        <FadeIn duration="2s" delay="2.5s">
          <Text>Please select a flavour</Text>
        </FadeIn>
      </Row>
      <Row justifyContent="space-around" padding="2rem 2rem 0 0">
        <FadeIn duration="2s" delay="4s">
          <LinkButton href='/professional' glowColour="blue">Professional</LinkButton>
        </FadeIn>
        <FadeIn duration="2s" delay="5s">
          <LinkButton href='/fun' glowColour="red">A bit of fun</LinkButton>
        </FadeIn>
      </Row>
    </CenterCard>
  </Background>

export default Root