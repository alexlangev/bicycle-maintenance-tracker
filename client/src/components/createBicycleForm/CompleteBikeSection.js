import React from 'react';
import styled from 'styled-components';

import { VscTriangleDown, VscTriangleUp} from "react-icons/vsc";


const CompleteBikeSection = () => {

  const [isCollapsed, setIsCollapsed] = React.useState(true);


  if (isCollapsed === true) {
    return(
      <CompleteBikeSectionWrapper>
      <Form>
        <dropdownSelection
          onClick={() => setIsCollapsed(!isCollapsed)}
        >Select your bicycle<VscTriangleDown /></dropdownSelection>
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
        <p>test1</p>
        <p>test1</p>
        <p>test1</p>
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