import styled from "styled-components";

const backgroundColour = '#050034'

const Header = styled.div<any>`
  width: 100vw;
  height: 4rem;
  background-color: ${backgroundColour};
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
  color: ${({ selected }) => selected ? 'gold' : 'white'};
  background-color: ${backgroundColour};
  text-decoration: none;
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  :hover {
    background-color: #3E55A8;
    color: gold;
  }
`

export interface navItem {
  text: string;
}

interface NavBarProps {
  navItems: navItem[];
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