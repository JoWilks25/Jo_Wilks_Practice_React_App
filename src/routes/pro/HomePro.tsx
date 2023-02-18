import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import useIsElementVisible from "../../utilities/useIsElementVisible"

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterCard = styled.div`
  width: 75%;
  height: 75%;
  padding: 5rem;
`

interface HomeProProps {
  scrollId: string;
  setSelectedTab: (selectedTab: string) => void;
}

const HomePro = ({ scrollId, setSelectedTab }: HomeProProps): React.ReactElement => {
  const scrollRef = useRef<any>()
  const [isVisible, setIsVisible] = useState<boolean>(false); // store visibility status

  useIsElementVisible(scrollRef.current, isVisible, setIsVisible);
  console.log({ isVisible, scrollRef });

  useEffect(() => {
    if (isVisible) {
      setSelectedTab(scrollId)
    }
  }, [isVisible]);

  return (
    <PageWrapper id={scrollId} ref={scrollRef} >
      <CenterCard>
        <h1>{scrollId}</h1>
        <p>I am a senior React Developer working within the Banking sector, looking to return to Full Stack work building clean and simple products that provide value to the end user.</p>
        <p>I have a strong focus on developing good development processes and maintaining effective documentation.</p>
      </CenterCard>
    </PageWrapper>
  )
}

export default HomePro