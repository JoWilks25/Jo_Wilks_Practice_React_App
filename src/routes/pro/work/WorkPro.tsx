import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useIsElementVisible from "../../../utilities/useIsElementVisible";
import { H1Styled, H2Styled } from "../../../components/Typography";
import { Row } from "../../../components/Structural";
import cssStyles from "../../../styles";
import treeData from './TreeMapChartData'
import WorkProItem from "./WorkProItem";

const PageWrapper = styled.div`
  // height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 ${cssStyles.size.heightNavbar};
  @media only screen and (max-width: 851px) {
    padding: 0 0 0 1rem;
    width: 100%;
  }
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
      <Row className="row" flexDirection="row" justifyContent="center">
        <H1Styled fontColour={cssStyles.colours.navy} textAlign="left">{scrollId}</H1Styled>
      </Row>
      {/* Calibrate Consulting */}
      <WorkProItem
        sectionTitleObj={{
          jobTitle: "Senior Web Consultant",
          companyName: "Calibrate Consulting",
          location: "London UK",
          timeRange: "Jan 2020 - April 2023"
        }}
        iconLink="https://media.licdn.com/dms/image/C4D0BAQEMqnpsjruujA/company-logo_200_200/0/1673258297238?e=1684972800&v=beta&t=89QGb6HTeJyIegF3TzNHJzYd5lfR_ycXAGfZqVPNwzI"
        treeMapConfig={{ ...treeData.calibrate, id: 'calibrate'}}
        jobListPoints={["Build React Web Apps as per provided UI designs for our large banking client.",
        "Communicating with technical and non-technical team members to ensure applications are built correctly and on time.",
        "Managing complex Production Releases involving cherry-picking features and feature toggling.",
        "Running the Junior Web Developer (JWD) program, and mentoring junior developers.",
        "Assisting in the technical interview process."]}
        keyProjects={[
          {
            title: 'LMD',
            desc: 'Built data visualisation dashboards for the banks clients to visualise their data.',
            colour: '#1f3876'
          },
          {
            title: 'LDS',
            desc: 'Wrote a python script to encode financial report files into the format required by the bank’s mainframe system.',
            colour: '#b01514'
          },
          {
            title: 'OMNIA',
            desc: 'Built complex data visualisation dashboards for internal bank employees to see financial data regarding their clients and the products they have with the company.',
            colour: '#006408'
          },
          {
            title: 'CSP',
            desc: 'Built internal applications used by the bank’s Relationship Managers, to help them manage the input of financial data regarding their clients and also to help visualise the financial status of their commercial clients.',
            colour: '#fbdf00'
          },
        ]}
      />
      {/* Arkera */}
      <WorkProItem
        sectionTitleObj={{
          jobTitle: "Software Engineer",
          companyName: "Arkera",
          location: "London UK",
          timeRange: "Jan 2018 - Dec 2019"
        }}
        iconLink="https://media.licdn.com/dms/image/C4E0BAQFz5TM443jUxA/company-logo_200_200/0/1523023660812?e=1684972800&v=beta&t=ZxpxI9NNUfq_5lg3etZ1F2WBubMX1KeS00u5-0RyaRg"
        treeMapConfig={{ ...treeData.arkera, id: 'arkera'}}
        jobListPoints={["Design and code back and frontend services to create scalable processes as required for the company.",
        "Run and participate in design meetings to help architect new services and process pipelines.",
        "Implement frontend services in Typescript, React, and write tests using enzyme, jest and selenium.",
        "Implement backend microservices in python, using flask, protobufs and Object Oriented principles.",
        "Fixing bugs in frontend and backend services.",
        "Assist in monitoring services to ensure they are running smoothly."]}
        keyProjects={[
          {
            title: 'RepoUpdater',
            desc: "Created a tool that updates all the services within the company's github account based on an instructions file, which uses string matching (regex).",
            colour: '#b01514'
          },
          {
            title: 'Frontend web app',
            desc: 'Helped code the frontend service for the client facing web application.',
            colour: '#1f3876'
          },
          {
            title: 'Host Control',
            desc: 'Worked with the CTO and met with key members of the host control team in order to redesign and automate as many manual processes as possible.',
            colour: '#fbdf00'
          },
        ]}
      />
      {/* Ennovative
      <Row className="row" flexDirection="row" justifyContent="flex-start">
        <img width="75px" height="75px" src="https://media.licdn.com/dms/image/C4E0BAQGhCAZEwjjJ3g/company-logo_200_200/0/1519904190459?e=1684972800&v=beta&t=jrtJ5_dR0or-YM1gr_-EztPAqxslNzTDjhJRS40tp40" />
        <H2Styled padding="0 0 0 1rem">Software Consultant - Ennovative PTY LTD<br /> SA, Australia, June 2017 - April 2018</H2Styled>
      </Row>
      <Row className="row" flexDirection="row" justifyContent="space-between" padding="0 0 1rem 0">
        <ul>
          <li>Assisted in the design and helped oversee the development of various software solutions for clients, including mobile apps, web apps and implementing customised instances of cloud-based CRM systems.</li>
        </ul>
      </Row> */}
    </PageWrapper>
  )
}

export default WorkPro