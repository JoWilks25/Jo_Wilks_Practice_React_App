import { RefObject } from "react";
import styled from "styled-components"

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 4rem;
`

interface HomeProProps {
  scrollId: string;
}

const HomePro = ({ scrollId }: HomeProProps): React.ReactElement => {
  return (
    <PageWrapper id={scrollId}>
      <h1>{scrollId}</h1>
      <p>I am a senior React Developer working within the Banking sector, looking to return to Full Stack work building clean and simple products that provide value to the end user.</p>
      <p>I have a strong focus on developing good development processes and maintaining effective documentation.</p>
    </PageWrapper>
  )
}

export default HomePro