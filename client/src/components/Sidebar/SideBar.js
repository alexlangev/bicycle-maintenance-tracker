import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';

import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import UnstyledButton from '../UnstyledButton';
import ViewToggle from './ViewToggle';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('main');

  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  }

  console.log(activeMenu);

  return(
    <SidebarWrapper>
      <SidebarMenu 
        style={isCollapsed?{display: 'none', width: '0%'}:{display: 'flex', width: '275pt'}}
      >

        <CSSTransition 
          in={activeMenu === 'main'} 
          unmountOnExit 
          timeout={0}
          classNames='menu-primary'
        >
          <MainMenu>
            <SelectBicycle>
              <Button onClick={() => setActiveMenu('secondary')}>
                <p>Select your Bicycle <VscTriangleRight/></p>
              </Button>
            </SelectBicycle>
            <ViewToggle />
          </MainMenu>
        </CSSTransition>

        <CSSTransition 
          in={activeMenu === 'secondary'} 
          unmountOnExit 
          timeout={0}
          classNames='menu-secondary'
        >
          <SecondaryMenu>
          <SelectBicycle>
              <Button onClick={() => setActiveMenu('main')}>
                <p>Bike1 <VscTriangleRight/></p>
              </Button>
            </SelectBicycle>
            <p>bike2</p>
            
          </SecondaryMenu>
        </CSSTransition>



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
  /* width property is inline for conditionnal purpose*/
  height: 100%;
`

const SidebarMenu = styled.div`
  width: 263pt;
  height: 100%;
  background-color: lightsalmon;
  display: flex;
  flex-direction: column;
`

const MainMenu = styled.div`
  position: relative;
  width: 275pt;
  height: 100%;
  overflow: hidden;
`

const SecondaryMenu = styled.div`
  position: relative;
  width:275pt;
  height: 100%;
  overflow: hidden;
  background-color: orange;
`

const SelectBicycle = styled.div`
  width: 100%;
  height: 100pt;
`

const Button = styled(UnstyledButton)`
  width: 100%;
  height: 100%;
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