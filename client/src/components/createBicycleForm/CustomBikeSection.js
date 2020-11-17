import React from 'react';
import styled from 'styled-components';

import { VscTriangleRight, VscTriangleUp} from "react-icons/vsc";


const CustomBikeSection = () => {

  const [chainIsCollapsed, setChainIsCollapsed] = React.useState(true);

    return (
    <CustomBikeSectionWrapper>
      <Form>
        <DropdownPrompt
          onClick={()=>setChainIsCollapsed(!chainIsCollapsed)}
        >chain<VscTriangleRight/></DropdownPrompt>
        {chainIsCollapsed?<p>test</p>:<div/>}

      </Form>
    </CustomBikeSectionWrapper>
  )
}

const CustomBikeSectionWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const DropdownPrompt = styled.div`
  background-color: coral;
`

const DropdownSelection = styled.div`
  background-color: coral;
`

export default CustomBikeSection