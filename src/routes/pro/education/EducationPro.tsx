import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import useIsElementVisible from "../../../utilities/useIsElementVisible"
import { H1Styled, H2Styled, PStyled } from "../../../components/Typography";
import { Row, Column } from "../../../components/Structural";
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


interface EducationProProps {
  scrollId: string;
  setSelectedTab: (selectedTab: string) => void;
}

const EducationPro = ({ scrollId, setSelectedTab }: EducationProProps): React.ReactElement => {
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
          <PStyled textAlign="justify">
            Software Development Immersive
          </PStyled>
          <PStyled textAlign="justify">
            Flatiron School, London UK
          </PStyled>
        </Column>
      </Row>
      <Row className="row" width="100%" flexDirection="row" justifyContent="center">
        <Column className="column" padding="0" justifyContent="center" width="50%">
          <PStyled textAlign="justify">
            Bachelor of Science (Honours) in Physiology
            University of Adelaide, South Australia
            Project: Filter properties of jumping spider photoreceptors
            Supervisor: Dr David O'Carroll
            Key Achievements: Awarded a Physiology Department Honours Scholarship
          </PStyled>
        </Column>
      </Row>
      <Row className="row" width="100%" flexDirection="row" justifyContent="center">
        <Column className="column" padding="0" justifyContent="center" width="50%">
          <PStyled textAlign="justify">
            Bachelor of Biomedical Science
            University of Adelaide, South Australia
            Major in Immunology and Microbiology, and Physiology
            Key Achievements: Member of Golden Key, Internation~~al Honours Society.
          </PStyled>
        </Column>
      </Row>
    </PageWrapper>
  )
}

export default EducationPro