import styled from "styled-components";

const Header = styled.div<any>`
  width: 100vw;
  height: 4rem;
  background-color: #04002E;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  position: fixed;
`

interface LinkContainerProps {
  selected: boolean;
}

const LinkContainer = styled.button<LinkContainerProps>`
  height: 100%;
  color: ${({ selected }) => selected ? 'red' : 'white'};
  background-color: #04002E;
  text-decoration: none;
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  :hover {
    background-color: #3E55A8;
    color: black;
  }
`

export interface navItem {
  text: string;
}

interface NavBarProps {
  navItems: navItem[];
  // setSelectedTab: (selectedTab: string) => void;
  scrollToId: (id: string) => void;
  selectedTab: string;
}


const NavBar = ({ navItems, selectedTab, scrollToId }: NavBarProps): React.ReactElement => {
  return (
    <Header>
      {
        navItems?.map((navItem, index) => {
          const { text } = navItem;
          return (
            <LinkContainer
              key={`${navItem.text}-${index}`}
              selected={selectedTab === text}
              onClick={() => scrollToId(text)}
            >
              {text}
            </LinkContainer>
          )
        })
      }
    </Header>
  )
}

export default NavBar