import React from 'react';
import styled from 'styled-components';

import { VscTriangleDown, VscTriangleUp} from "react-icons/vsc";


const CustomBikeSection = () => {

  const [isCollapsed, setIsCollapsed] = React.useState(true);


  if (isCollapsed === true) {
    return(
      <CompleteBikeSectionWrapper>
      <Form>
        <p>Select your bike parts</p>
      </Form>
    </CompleteBikeSectionWrapper>
    )
  }
}

const CompleteBikeSectionWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Form = styled.form`
`


export default CustomBikeSection;