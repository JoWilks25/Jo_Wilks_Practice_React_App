import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useIsElementVisible from "../../utilities/useIsElementVisible";
import { H1Styled, H2Styled } from "../../components/Typography";
import { Column, Row } from "../../components/Structural";
import cssStyles from "../../styles";
import TreeMapChart from '../../components/TreeMapChart';
import calibrateTreeMapData, { domain, rangeColours } from './TreeMapChartData'

const headerFontColour = "#050034"

const PageWrapper = styled.div`
  margin-top: ${cssStyles.size.heightNavbar};
  display: flex;
  flex-direction: column;
  padding: 0 ${cssStyles.size.heightNavbar};
`


interface WorkProProps {
  scrollId: string;
  setSelectedTab: (selectedTab: string) => void;
}

const WorkPro = ({ scrollId, setSelectedTab }: WorkProProps): React.ReactElement => {
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
      {/* Calibrate Consulting */}
      <Row className="row" flexDirection="row" justifyContent="space-between">
        <H1Styled fontColour={headerFontColour} textAlign="left">{scrollId}</H1Styled>
      </Row>
      <Row className="row" flexDirection="row" justifyContent="flex-start">
        <img width="75px" height="75px" src="https://media.licdn.com/dms/image/C4D0BAQEMqnpsjruujA/company-logo_200_200/0/1673258297238?e=1684972800&v=beta&t=89QGb6HTeJyIegF3TzNHJzYd5lfR_ycXAGfZqVPNwzI" />
        <H2Styled padding="0 0 0 1rem">Senior Web Consultant - Calibrate Consulting <br /> London UK, Jan 2020 - Current</H2Styled>
      </Row>
      <Row className="row" flexDirection="row" justifyContent="space-between" padding="0 0 2rem 0">
        <Column className="column" width="50%" padding="0" justifyContent="flex-start">
          <ul>
            <li>Build React Web Apps as per provided UI designs for our large banking client.</li>
            <li>Communicating with technical and non-technical team members to ensure applications are built correctly and on time.</li>
            <li>Managing complex Production Releases involving cherry-picking features and feature toggling.</li>
            <li>Running the Junior Web Developer (JWD) program, and mentoring junior developers.</li>
            <li>Assisting in the technical interview process.</li>
          </ul>
        </Column>
        <Column className="column" width="50%" padding="0" justifyContent="flex-start">
          <TreeMapChart data={calibrateTreeMapData} chartTitle="% Tech Stack allocation for different Projects" domain={domain} rangeColours={rangeColours} />
        </Column>

      </Row>
      {/* Arkera */}
      <Row className="row" flexDirection="row" justifyContent="flex-start">
        <img width="75px" height="75px" src="https://media.licdn.com/dms/image/C4E0BAQFz5TM443jUxA/company-logo_200_200/0/1523023660812?e=1684972800&v=beta&t=ZxpxI9NNUfq_5lg3etZ1F2WBubMX1KeS00u5-0RyaRg" />
        <H2Styled padding="0 0 0 1rem">Software Engineer - Arkera <br /> London UK, Jan 2018 - Dec 2019</H2Styled>
      </Row>
      <Row className="row" flexDirection="row" justifyContent="space-between" padding="0 0 2rem 0">
        <ul>
          <li>Design and code back and frontend services to create scalable processes as required for the company.</li>
          <li>Run and participate in design meetings to help architect new services and process pipelines.</li>
          <li>Implement frontend services in Typescript, React, and write tests using enzyme, jest and selenium.</li>
          <li>Implement backend microservices in python, using flask, protobufs and Object Oriented principles.</li>
          <li>Fixing bugs in frontend and backend services.</li>
          <li>Assist in monitoring services to ensure they are running smoothly.</li>
        </ul>
      </Row>
      {/* Ennovative */}
      <Row className="row" flexDirection="row" justifyContent="flex-start">
        <img width="75px" height="75px" src="https://media.licdn.com/dms/image/C4E0BAQGhCAZEwjjJ3g/company-logo_200_200/0/1519904190459?e=1684972800&v=beta&t=jrtJ5_dR0or-YM1gr_-EztPAqxslNzTDjhJRS40tp40" />
        <H2Styled padding="0 0 0 1rem">Software Consultant - Ennovative PTY LTD<br /> SA, Australia, June 2017 - April 2018</H2Styled>
      </Row>
      <Row className="row" flexDirection="row" justifyContent="space-between" padding="0 0 2rem 0">
        <ul>
          <li>Assisted in the design and helped oversee the development of various software solutions for clients, including mobile apps, web apps and implementing customised instances of cloud-based CRM systems.</li>
        </ul>
      </Row>
    </PageWrapper>
  )
}

export default WorkPro