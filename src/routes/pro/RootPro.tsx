import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import HomePro from "./home/HomePro";
import WorkPro from "./work/WorkPro";
import EducationPro from './education/EducationPro';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  margin-top: 4rem;
  width: 100vw;
  @media only screen and (max-width: 851px) {
    padding: 0 0 0 0;
    width: 100%;
    height: auto;
  }
`

const navItems = [
  {
    text: 'About',
  },
  {
    text: 'Work',
  },
  {
    text: 'Education',
  },
  {
    text: 'Contact',
  }
]
const RootPro = (): React.ReactElement => {
  const [selectedTab, setSelectedTab] = useState<string>('About');

  const scrollToId = (id: string): void => {
    const element = document?.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    setSelectedTab(id)
  }

  return (
    <React.Fragment>
      <NavBar navItems={navItems} selectedTab={selectedTab} scrollToId={scrollToId} />
      <PageWrapper>
        <HomePro scrollId="About" setSelectedTab={setSelectedTab} />
        <WorkPro scrollId="Work" setSelectedTab={setSelectedTab} />
        <EducationPro scrollId="Education" setSelectedTab={setSelectedTab} />
        {/* <WorkPro scrollId="Education" setSelectedTab={setSelectedTab} /> */}
        {/* <WorkPro scrollId="Contact" setSelectedTab={setSelectedTab} /> */}
      </PageWrapper>
    </React.Fragment>
  )
}

export default RootPro