import { Fragment } from "react";
import cssStyles from "../../../styles";
import { H2Styled, H3Styled, Text } from "../../../components/Typography";
import { Column, Row } from "../../../components/Structural";
import TreeMapChart from "../../../components/charts/TreeMapChart";

interface treeMapConfigType {
  data: any;
  domain: string[];
  rangeColours: string[];
  id: string;
}

interface WorkProItemProps {
  sectionTitleObj: any;
  iconLink: string;
  treeMapConfig?: treeMapConfigType;
  jobListPoints?: string[];
  keyProjects?: any;
}

const WorkProItem = ({ sectionTitleObj, iconLink, treeMapConfig, jobListPoints, keyProjects }: WorkProItemProps) => (
  <Row>
    <Row className="row" flexDirection="row" justifyContent="flex-start">
      <img width="75px" height="75px" src={iconLink} />
      <H2Styled padding="0 0 0 1rem" fontColour={cssStyles.colours.navy}>{sectionTitleObj.jobTitle} - {sectionTitleObj.companyName}
      <br />
      {sectionTitleObj.location}, {sectionTitleObj.timeRange}
      </H2Styled>
    </Row>
    <Row className="row" flexDirection="row" justifyContent="space-between" padding="0 0 2rem 0">
      <Column className="column" width="50%" padding="0" justifyContent="flex-start">
        <H3Styled padding="0 0 0 1rem" fontColour={cssStyles.colours.navy}>
          Responsibilities
        </H3Styled>
        <ul>
          { jobListPoints?.map((listText) => (<li>{listText}</li>)) }
        </ul>
        <H3Styled padding="0 0 0 1rem" fontColour={cssStyles.colours.navy}>
          Key Projects
        </H3Styled>
        <ul>
          { keyProjects?.map(({ title, desc, colour }: any) => (<Text padding="0.25rem 0"><strong style={{ color: `${colour}`}}>{title}: </strong>{desc}</Text>)) }
        </ul>
      </Column>
      {
        treeMapConfig &&
        <Column className="column" width="50%" padding="0" justifyContent="flex-start" alignItem="center">
          <TreeMapChart data={treeMapConfig.data} domain={treeMapConfig.domain} rangeColours={treeMapConfig.rangeColours} id={treeMapConfig.id}/>
        </Column>
      }
    </Row>
  </Row>
)
export default WorkProItem;