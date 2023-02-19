import styled from "styled-components"

interface TextProps {
  fontSize?: string;
  fontColour?: string;
  textAlign?: string;
}

export const H1Styled = styled.h1<TextProps>`
font-size: ${({ fontSize }) => fontSize || ''};
color: ${({ fontColour }) => fontColour || 'black'};
text-align: ${({ textAlign }) => textAlign || ''};
`

export const H2Styled = styled.h2<TextProps>`
font-size: ${({ fontSize }) => fontSize || ''};
color: ${({ fontColour }) => fontColour || 'black'};
`

export const PStyled = styled.p<TextProps>`
font-size: ${({ fontSize }) => fontSize || '1rem'};
color: ${({ fontColour }) => fontColour || 'black'};
`

export const Text = styled.div<TextProps>`
font-size: ${({ fontSize }) => fontSize || '1rem'};
color: ${({ fontColour }) => fontColour || 'black'};
`

