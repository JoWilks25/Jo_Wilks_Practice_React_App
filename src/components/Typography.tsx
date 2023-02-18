import styled from "styled-components"

interface TextProps {
  fontSize?: string;
  fontColour?: string;
}

export const H1Styled = styled.h1<TextProps>`
font-size: ${({ fontSize }) => fontSize || '1rem'};
color: ${({ fontColour }) => fontColour || 'black'};
`

export const Text = styled.div<TextProps>`
font-size: ${({ fontSize }) => fontSize || '2rem'};
color: ${({ fontColour }) => fontColour || 'black'};
`

