import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import HomePro from "./HomePro";
import WorkPro from "./WorkPro/WorkPro";

const PageWrapper = styled.div`
  height: calc(100vh - 4rem);
  width: 100vw;
`

const navItems = [
  {
    text: 'Home',
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
  const [selectedTab, setSelectedTab] = useState<string>('Home');

  const scrollToId = (id: string): void => {
    const element = document?.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    setSelectedTab(id)
  }

  return (
    <React.Fragment>
      <NavBar navItems={navItems} selectedTab={selectedTab} scrollToId={scrollToId} />
      <PageWrapper>
        <HomePro scrollId="Home" setSelectedTab={setSelectedTab} />
        <WorkPro scrollId="Work" setSelectedTab={setSelectedTab} />
        {/* <WorkPro scrollId="Education" setSelectedTab={setSelectedTab} /> */}
        {/* <WorkPro scrollId="Contact" setSelectedTab={setSelectedTab} /> */}
      </PageWrapper>
    </React.Fragment>
  )
}

export default RootPro