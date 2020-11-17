import React from 'react';
import styled from 'styled-components';

import { VscTriangleDown, VscTriangleUp} from "react-icons/vsc";
import { CompleteBicyclesDbContext } from '../../Context/CompleteBicyclesDbContext';


const CompleteBikeSection = () => {

  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const {completeBicyclesDb, setcompleteBicyclesDb} = React.useContext(CompleteBicyclesDbContext);

  console.log(completeBicyclesDb, completeBicyclesDb[0]);

  if (isCollapsed === true) {
    return(
      <CompleteBikeSectionWrapper>
      <Form>
        <DropdownSelection
          onClick={() => setIsCollapsed(!isCollapsed)}
        >Select your bicycle<VscTriangleDown /></DropdownSelection>
      </Form>
    </CompleteBikeSectionWrapper>
    )
  }
  return (
    <CompleteBikeSectionWrapper>
      <Form>
        <DropdownSelection
          onClick={() => setIsCollapsed(!isCollapsed)}
        >Select your bicycle<VscTriangleUp /></DropdownSelection>
      {
        completeBicyclesDb.map(bike => {
        return <DropdownSelection>{bike._id}</DropdownSelection>
        })
      }
      </Form>
    </CompleteBikeSectionWrapper>
  )
}

const CompleteBikeSectionWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.p`
`

const Form = styled.form`
`

const DropdownSelection = styled.div`
  background-color: coral;
`

export default CompleteBikeSection;