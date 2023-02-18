import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import useIsElementVisible from "../../utilities/useIsElementVisible"
import RadarChart from "../../components/RadarChart";
import { programmingData, otherSkillsData, chartOptions } from "./RadarChartData";

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`

const CenterCard = styled.div`
  width: 75%;
  height: 75%;
  padding: 2rem 5rem 0 5rem;
`

const RowWrapper = styled.div`
  height: 85%;
  width: 100%;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ColumnWrapper = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
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
        <RowWrapper>
          <ColumnWrapper>
            <h2>Technical Skills</h2>
            <RadarChart data={programmingData} options={chartOptions} />
          </ColumnWrapper>
          <ColumnWrapper>
            <h2>Other Skills</h2>
            <RadarChart data={otherSkillsData} options={chartOptions} />
          </ColumnWrapper>
        </RowWrapper>
      </CenterCard>
    </PageWrapper>
  )
}

export default HomePro