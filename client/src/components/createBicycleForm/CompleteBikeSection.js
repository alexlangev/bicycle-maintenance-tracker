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
  console.log(formSelectedBicycle);
  if (isCollapsed === true) {
    return(
      <CompleteBikeSectionWrapper>
      <Form>
        {(formSelectedBicycle === 'none' || formSelectedBicycle === null )
          ?<DropdownSelection onClick={() => setIsCollapsed(!isCollapsed)}>Select your bicycle<VscTriangleDown /></DropdownSelection>
          :<DropdownSelection onClick={() => setIsCollapsed(!isCollapsed)}>{formSelectedBicycle._id}<VscTriangleDown /></DropdownSelection>
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
  return (
    <CompleteBikeSectionWrapper>
      <DropWrapper>
      <Form>
        <DropdownSelection
          onClick={() => setIsCollapsed(!isCollapsed)}
        >{'Select your bicycle '}<TriUp /></DropdownSelection>
      {
        completeBicyclesDb.map(bike => {
        return <DropdownSelection
        onClick={() => {setFormSelectedBicycle(bike); setIsCollapsed(!isCollapsed)}}
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
        
      ><strong>Submit</strong></Submit>
      </DropWrapper>
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
  margin-top: 7pt;
`

const DropWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TriUp = styled(VscTriangleUp)`
`

const DropdownSelection = styled(UnstyledButton)`
  border: 1px black solid;
  background-color: #dbdbdb;
  width: 135pt;
  height: 15pt;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover{
    filter:brightness(70%);
  }
`

const Submit = styled(UnstyledButton)`
  background-color:#ff4500;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:13pt;
  border-radius:10px;
  border: 1px black solid;
  margin-top: 10pt;
  background-color: coral;
  width: 65pt;
`

export default CompleteBikeSection;