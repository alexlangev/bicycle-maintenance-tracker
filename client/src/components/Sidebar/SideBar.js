import React, { useState } from 'react'
import styled from 'styled-components'

import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import UnstyledButton from '../UnstyledButton';
import ViewToggle from './ViewToggle';
import DropdownMenuNav from '../DropdownMenu/DropdownMenuNav';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import SelectedBicycle from '../Sidebar/SelectedBicycle';

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
        <DropdownMenuNav>
          <DropdownMenu />
        </DropdownMenuNav>

        <SelectedBicycle>
          <p>Bicycle Choice here</p>
        </SelectedBicycle>
        <ViewToggle />
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
  height: 100%;
`

const SidebarMenu = styled.div`
  width: 263pt;
  height: 100%;
  background-color: lightsalmon;
  display: flex;
  flex-direction: column;
`

const CollapseButton = styled(UnstyledButton)`
  background-color: lightpink;
  width: 12pt;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Sidebar;