import React, { useState } from 'react'
import styled from 'styled-components'

import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import UnstyledButton from '../UnstyledButton';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  }

  return(
    <SidebarWrapper>
      <SidebarMenu 
      style={isCollapsed?{display: 'none'}:{display: 'flex'}}
      >
      </SidebarMenu>
      <CollapseButton onClick={handleCollapseClick}>
        {isCollapsed?<VscTriangleRight/>:<VscTriangleLeft/>}
      </CollapseButton>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 275pt;
  height: 100vh;
`

const SidebarMenu = styled.div`
  width: 263pt;
  height: 100vh;
  background-color: lightsalmon;
`

const CollapseButton = styled(UnstyledButton)`
  background-color: lightpink;
  width: 12pt;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Sidebar;