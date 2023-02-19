import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import useIsElementVisible from "../../../utilities/useIsElementVisible"
import RadarChart from "../../../components/RadarChart";
import { programmingData, otherSkillsData, chartOptions } from "./RadarChartData";
import { H1Styled, H2Styled, PStyled } from "../../../components/Typography";
import { Row, Column } from "../../../components/Structural";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cssStyles from "../../../styles";

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 ${cssStyles.size.heightNavbar};
  @media only screen and (max-width: 851px) {
    padding: 0 0 0 1rem;
    width: 100%;
  }
`


interface HomeProProps {
  scrollId: string;
  setSelectedTab: (selectedTab: string) => void;
}

const HomePro = ({ scrollId, setSelectedTab }: HomeProProps): React.ReactElement => {
  // Used to keep track of what section scrolled on and to highlight correct nav item accordingly.
  const scrollRef = useRef<any>()
  const [isVisible, setIsVisible] = useState<boolean>(false); // store visibility status
  useIsElementVisible(scrollRef.current, isVisible, setIsVisible);
  useEffect(() => {
    if (isVisible) {
      setSelectedTab(scrollId)
    }
  }, [isVisible]);


  return (
    <PageWrapper id={scrollId} ref={scrollRef} >
      <Row className="row" flexDirection="row" justifyContent="center" padding="0">
        <H1Styled fontColour={cssStyles.colours.navy} textAlign="left">{scrollId}</H1Styled>
      </Row>
      <Row className="row" width="100%" flexDirection="row" justifyContent="center">
        <Column className="column" padding="0" justifyContent="center" width="50%">
          <PStyled textAlign="justify">I'm a Senior React Developer working within the Banking sector. I'm looking to return to Full Stack work building clean and simple products that provide value to the end user. I have a strong focus on developing good development processes and maintaining effective documentation.</PStyled>
        </Column>
        {/* <Column className="column" width="30%" flexDirection="row" justifyContent="flex-start">
          <a href={"https://github.com/JoWilks25"} target="_blank" style={{
            padding: "1rem", textDecoration: "None", color: "black"
          }}><FaGithub size={50} /></a>
          <a href={"https://www.linkedin.com/in/joanne-wilkins-aa3416146/"} target="_blank" style={{ padding: "1rem", textDecoration: "None", color: "#0A66C2" }}><FaLinkedin size={50} /></a>
        </Column> */}
      </Row>
      <Row className="row" flexDirection="row" justifyContent="space-evenly" padding="0" width="100%">
        <Column className="column" width="35%" padding="0" justifyContent="center">
          <H2Styled fontColour={cssStyles.colours.navy}>Technical Skills</H2Styled>
          <RadarChart data={programmingData} options={chartOptions} />
        </Column>
        <Column className="column" width="35%" padding="0" justifyContent="center">
          <H2Styled fontColour={cssStyles.colours.navy}>Other Skills</H2Styled>
          <RadarChart data={otherSkillsData} options={chartOptions} />
        </Column>
      </Row>
    </PageWrapper>
  )
}

export default HomePro