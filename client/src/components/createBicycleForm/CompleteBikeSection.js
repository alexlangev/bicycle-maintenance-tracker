import React from 'react';
import styled from 'styled-components';

import { VscTriangleDown, VscTriangleUp} from "react-icons/vsc";
import { CompleteBicyclesDbContext } from '../../Context/CompleteBicyclesDbContext';
import {SelectedBicycleContext} from '../../Context/SelectedBicycleContext';
import {CurrentUserContext} from '../../Context/CurrentUserContext';

import UnstyledButton from '../UnstyledButton';

const CompleteBikeSection = () => {

  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [formSelectedBicycle, setFormSelectedBicycle] = React.useState('none');

  const {completeBicyclesDb, setcompleteBicyclesDb} = React.useContext(CompleteBicyclesDbContext);
  const {selectedBicycle, setSelectedBicycle} = React.useContext(SelectedBicycleContext);
  const {currentUser, setCurrentUser} = React.useContext(CurrentUserContext);

  if (isCollapsed === true) {
    return(
      <CompleteBikeSectionWrapper>
      <Form>
        <DropdownSelection
          onClick={() => setIsCollapsed(!isCollapsed)}
        >Select your bicycle<VscTriangleDown /></DropdownSelection>
      </Form>
      <Submit
        onClick={()=>{
        if(formSelectedBicycle !== 'none'){
          console.log(formSelectedBicycle);
        }
        }}
      >Submit</Submit>
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
        return <DropdownSelection
        onClick={() => setFormSelectedBicycle(bike)}
        >{bike._id}</DropdownSelection>
        })
      }
      </Form>
      <Submit
        onClick={()=>{
        if(formSelectedBicycle !== 'none'){
          console.log(formSelectedBicycle);
          fetch('/database/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: formSelectedBicycle,
              user_id: currentUser.userInfo.athlete.id,
              bicycle_id: selectedBicycle.name[0],
            }),
          })
        }
        }}
        
      >Submit</Submit>
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

const Form = styled.div`
`

const DropdownSelection = styled(UnstyledButton)`
  background-color: coral;
`

const Submit = styled(UnstyledButton)`
  background-color: coral;
`

export default CompleteBikeSection;