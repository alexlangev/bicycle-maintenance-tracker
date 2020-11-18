import React from 'react';
import styled from 'styled-components';

import { VscTriangleDown, VscTriangleUp} from "react-icons/vsc";
import { PartsDbContext } from '../../Context/PartsDbContext';
import {SelectedBicycleContext} from '../../Context/SelectedBicycleContext';
import {CurrentUserContext} from '../../Context/CurrentUserContext';
import UnstyledButton from '../UnstyledButton';

const CustomBikeSection = () => {
  const [chainIsCollapsed, setChainIsCollapsed] = React.useState(true);
  const [cassetteIsCollapsed, setCassetteIsCollapsed] = React.useState(true);
  const [chainringsIsCollapsed, setChainringsIsCollapsed] = React.useState(true);
  const [frontTiresIsCollapsed, setFrontTiresIsCollapsed] = React.useState(true);
  const [rearTiresIsCollapsed, setRearTiresIsCollapsed] = React.useState(true);

  const [selectedChain, setSelectedChain] = React.useState('none');
  const [selectedCassette, setSelectedCassette] = React.useState('none');
  const [selectedChainrins, setSelectedChainrings] = React.useState('none');
  const [selectedFrontTire, setSelectedFrontTire] = React.useState('none');
  const [selectedRearTire, setSelectedRearTire] = React.useState('none');

  const {selectedBicycle, setSelectedBicycle} = React.useContext(SelectedBicycleContext);
  const {currentUser, setCurrentUser} = React.useContext(CurrentUserContext);
  const {partsDb, setPartsDb} = React.useContext(PartsDbContext);
  //importing bike part database

    return (
    <CustomBikeSectionWrapper>
      <Form>
      <DropWrapper>
        {/* Chains */}
        {chainIsCollapsed
        ?<DropdownPrompt onClick={()=>{setChainIsCollapsed(!chainIsCollapsed)}}>Chain<VscTriangleDown/></DropdownPrompt>
        :<DropdownPrompt onClick={()=>{setChainIsCollapsed(!chainIsCollapsed)}}>Chain<VscTriangleUp/></DropdownPrompt>
        }

        {!chainIsCollapsed
          ?partsDb.chains.map(chain =>{
            return <DropdownSelection
            onClick={()=>{setSelectedChain(chain)}}
            >{chain[0]}</DropdownSelection>
          })
          :<div></div>}
      </DropWrapper>

        {/* Cassettes */}
      <DropWrapper>
      {cassetteIsCollapsed
        ?<DropdownPrompt onClick={()=>{setCassetteIsCollapsed(!cassetteIsCollapsed)}}>Cassette<VscTriangleDown/></DropdownPrompt>
        :<DropdownPrompt onClick={()=>{setCassetteIsCollapsed(!cassetteIsCollapsed)}}>Cassette<VscTriangleUp/></DropdownPrompt>
        }

        {!cassetteIsCollapsed
          ?partsDb.cassettes.map(cassette =>{
            return <DropdownSelection
            onClick={()=>{setSelectedCassette(cassette)}}
            >{cassette[0]}</DropdownSelection>
          })
          :<div></div>}
      </DropWrapper>

          {/* front Tires */}
      <DropWrapper>
      {frontTiresIsCollapsed
        ?<DropdownPrompt onClick={()=>{setFrontTiresIsCollapsed(!frontTiresIsCollapsed)}}>Front Tire<VscTriangleDown/></DropdownPrompt>
        :<DropdownPrompt onClick={()=>{setFrontTiresIsCollapsed(!frontTiresIsCollapsed)}}>Front Tire<VscTriangleUp/></DropdownPrompt>
        }

        {!frontTiresIsCollapsed
          ?partsDb.tires.map(tire =>{
            return <DropdownSelection
            onClick={()=>{setSelectedFrontTire(tire)}}
            >{tire[0]}</DropdownSelection>
          })
          :<div></div>}
        </DropWrapper>

        {/* rear Tires */}
      <DropWrapper>
      {rearTiresIsCollapsed
        ?<DropdownPrompt onClick={()=>{setRearTiresIsCollapsed(!rearTiresIsCollapsed)}}>Rear Tire<VscTriangleDown/></DropdownPrompt>
        :<DropdownPrompt onClick={()=>{setRearTiresIsCollapsed(!rearTiresIsCollapsed)}}>Rear Tire<VscTriangleUp/></DropdownPrompt>
        }

        {!rearTiresIsCollapsed
          ?partsDb.tires.map(tire =>{
            return <DropdownSelection
            onClick={()=>{setSelectedRearTire(tire)}}
            >{tire[0]}</DropdownSelection>
          })
          :<div></div>}
      </DropWrapper>
        {/* Chainrings */}
      <DropWrapper>
      {chainringsIsCollapsed
        ?<DropdownPrompt onClick={()=>{setChainringsIsCollapsed(!chainringsIsCollapsed)}}>Chainrings<VscTriangleDown/></DropdownPrompt>
        :<DropdownPrompt onClick={()=>{setChainringsIsCollapsed(!chainringsIsCollapsed)}}>Chainrings<VscTriangleUp/></DropdownPrompt>
        }


        {!chainringsIsCollapsed
          ?partsDb.chainrings.map(chainring =>{
            return <DropdownSelection
            onClick={()=>{setSelectedChainrings(chainring)}}
            >{chainring[0]}</DropdownSelection>
          })
          :<div></div>}
      </DropWrapper>
      </Form>
      <Submit
        onClick={()=>{
          if(selectedChain && selectedCassette && selectedChainrins && selectedFrontTire && selectedRearTire){
            const data = {_id: 'custom', price: 'N/A', parts:{
                            chain:selectedChain[1],
                            cassette:selectedCassette[1],
                            chainring: selectedChainrins[1],
                            fontTire: selectedFrontTire[1],
                            rearTire: selectedRearTire[1],
                          }}
            console.log("data",data);
            fetch('/database/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body:  JSON.stringify({
                data: data,
                user_id: currentUser.userInfo.athlete.id,
                bicycle_id: selectedBicycle.name[0],
              }),
            })
          }
        }}
      >Submit</Submit>
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
  flex-direction: row;
  height:22vh;
`

const DropdownPrompt = styled.div`
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

const DropWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3pt;
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

export default CustomBikeSection