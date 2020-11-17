import React from 'react';
import styled from 'styled-components';

import { VscTriangleRight, VscTriangleUp} from "react-icons/vsc";
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

        {/* Chains */}
        <DropdownPrompt
          onClick={()=>{setChainIsCollapsed(!chainIsCollapsed)}}
        >chain<VscTriangleRight/>
        </DropdownPrompt>

        {!chainIsCollapsed
          ?partsDb.chains.map(chain =>{
            return <DropdownSelection
            onClick={()=>{setSelectedChain(chain)}}
            >{chain[0]}</DropdownSelection>
          })
          :<div></div>}

        {/* Cassettes */}
        <DropdownPrompt
          onClick={()=>{setCassetteIsCollapsed(!cassetteIsCollapsed)}}
        >cassette<VscTriangleRight/>
        </DropdownPrompt>

        {!cassetteIsCollapsed
          ?partsDb.cassettes.map(cassette =>{
            return <DropdownSelection
            onClick={()=>{setSelectedCassette(cassette)}}
            >{cassette[0]}</DropdownSelection>
          })
          :<div></div>}

          {/* front Tires */}
        <DropdownPrompt
          onClick={()=>{setFrontTiresIsCollapsed(!frontTiresIsCollapsed)}}
        >front tire<VscTriangleRight/>
        </DropdownPrompt>

        {!frontTiresIsCollapsed
          ?partsDb.tires.map(tire =>{
            return <DropdownSelection
            onClick={()=>{setSelectedFrontTire(tire)}}
            >{tire[0]}</DropdownSelection>
          })
          :<div></div>}

        {/* rear Tires */}
        <DropdownPrompt
          onClick={()=>{setRearTiresIsCollapsed(!rearTiresIsCollapsed)}}
        >rear tire<VscTriangleRight/>
        </DropdownPrompt>

        {!rearTiresIsCollapsed
          ?partsDb.tires.map(tire =>{
            return <DropdownSelection
            onClick={()=>{setSelectedRearTire(tire)}}
            >{tire[0]}</DropdownSelection>
          })
          :<div></div>}

        {/* Chainrings */}
        <DropdownPrompt
          onClick={()=>{setChainringsIsCollapsed(!chainringsIsCollapsed)}}
        >chainrings<VscTriangleRight/>
        </DropdownPrompt>

        {!chainringsIsCollapsed
          ?partsDb.chainrings.map(chainring =>{
            return <DropdownSelection
            onClick={()=>{setSelectedChainrings(chainring)}}
            >{chainring[0]}</DropdownSelection>
          })
          :<div></div>}

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
  flex-direction: column;
`

const DropdownPrompt = styled.div`
  background-color: coral;
`

const DropdownSelection = styled.div`
  background-color: coral;
  width: 100%;
  height: 20pt;
`

const Submit = styled(UnstyledButton)`
  background-color: coral;
`

export default CustomBikeSection