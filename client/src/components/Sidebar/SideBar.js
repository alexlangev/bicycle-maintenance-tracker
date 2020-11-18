import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';

import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import UnstyledButton from '../UnstyledButton';
import ViewToggle from './ViewToggle';

import { CurrentUserContext } from '../../Context/CurrentUserContext';
import { SelectedBicycleContext } from '../../Context/SelectedBicycleContext';
import { IsTrackedContext } from '../../Context/IsTrackedContext';

const Sidebar = () => {
  //subsribing to user context and creating an array of his bicycles
  const {currentUser} = React.useContext(CurrentUserContext);
  const bicycleList = Object.entries(currentUser.BikeData);
  const userId = currentUser.userInfo.athlete.id;

  const {setSelectedBicycle} = React.useContext(SelectedBicycleContext);
  const {isTracked, setIsTracked} = React.useContext(IsTrackedContext);


  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('main');
  
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
              <Button onClick={() => setActiveMenu('main')}><p><VscTriangleRight/></p></Button>
              {bicycleList.map(bike => {
                return <Button 
                onClick={async () => {
                  const tracking = await fetch(`/selectBike/${userId}/${bike[0]}`)
                  const isTrackedRes = await tracking.json();

                  if(isTrackedRes.tracked === true){
                    //create bike?
                    setIsTracked(true);
                    setActiveMenu('main');
///////////////////////// update tracked parts fetch???? and add them to setSelectedBicycle Context                    
                    setSelectedBicycle({
                      name:bike,
                      parts:'temp value'
                    })
                  } else if(isTrackedRes.tracked === false) {
                    //show bike and update parts automaticaly
                    setIsTracked(false);
                    setSelectedBicycle({
                      name:bike,
                      parts: 'none',
                    })
                    console.log('from sibebar selection', isTracked)
                  }
                }}
                >{bike[1].bikeData.name}</Button>
              })}
          </SelectBicycle> 
          </SecondaryMenu>
        </CSSTransition>

      </SidebarMenu>
      <CollapseButton onClick={() => setIsCollapsed(!isCollapsed)}>
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
  border: solid 1px black;
`

const SidebarMenu = styled.div`
  width: 263pt;
  height: 100%;
  background-color: #dbdbdb;
  display: flex;
  flex-direction: column;
  border-right: solid 1px black;
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
  background-color: #dbdbdb;
  border-right: solid 1px black;
`

const SelectBicycle = styled.div`
  width: 100%;
  height: 100pt;
`

const Button = styled(UnstyledButton)`
  border: solid 2px black;
  width: 100%;
  height: 100%;

  &:hover {
    border: 3px solid black;
  }
`

const CollapseButton = styled(UnstyledButton)`
  background-color: #ffa500;;
  width: 12pt;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border:solid  0px 1px 0px 1px black;
`

export default Sidebar;