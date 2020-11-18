import React from 'react';
import styled from 'styled-components';

//Context for the selection of parts
import { SelectedPartContext } from '../../Context/SelectedPartContext';
import { SelectedBicycleContext } from '../../Context/SelectedBicycleContext';
import UnstyledButton from '../UnstyledButton';

const PartInfo = ({wearArray, chainWear, cassetteWear, chainringWear, rearTireWear, frontTireWear}) => {
  const {selectedPart} = React.useContext(SelectedPartContext);
  const {selectedBicycle} = React.useContext(SelectedBicycleContext);
  console.log(wearArray);
  let partIndex;
  let wear;
  let title;
    if(selectedPart !== 'none' && selectedBicycle !== 'none') {

      if(selectedPart === 'chain'){
        title = 'Chain';
        partIndex = 0;
        wear = chainWear;
      } else if(selectedPart === 'cassette'){
        title='Cassette';
        partIndex = 1;
        wear = cassetteWear;
      } else if(selectedPart === 'chainrings'){
        title='Chainrings';
        partIndex = 2;
        wear = chainringWear;
      } else if(selectedPart === 'rearTire'){
        title='Rear Tire';
        partIndex = 3;
        wear = rearTireWear;
      } else if(selectedPart === 'frontTire'){
        title='Front Tire'
        partIndex = 4;
        wear = frontTireWear;
      }

    return (
      <PartInfoWrapper>
        <Part>{title}</Part>
        <EntryWrapper>
          <EntryTopWrapper>
            {(selectedPart === 'rearTire' || selectedPart === 'frontTire')
              ?<Entry>{`Model no: ${(wearArray[partIndex].part._id).split("-")[1]}`}</Entry>
              :<Entry>{`Model no: ${wearArray[partIndex].part._id}`}</Entry>
            }

            <Entry>{`Brand: ${wearArray[partIndex].part.brand}`}</Entry>
            {(selectedPart === 'rearTire' || selectedPart === 'frontTire')
              ?<></>
              :<Entry>{`Part Series: ${wearArray[partIndex].part.series}`}</Entry>
            }
            <Entry>{`Current distance: ${Math.round(wearArray[partIndex].partm/1000)} km`}</Entry>
          </EntryTopWrapper>
          <Wear>{`Current wear: `}<Percent>{`${Math.round(wear)}%`}</Percent></Wear>
        </EntryWrapper>
      </PartInfoWrapper>
    )
  } else {
    return (
      <PartInfoWrapper style={{border:"none"}} />
    )
  }
}

const PartInfoWrapper = styled.div`
  padding: 10pt;
  display: flex;
  flex-direction: column;
  margin: 0 5vh 0 0;
  width: 25%;
  min-width: 225pt;
  height: 80vh;
  border-radius: 5pt;
  background-color: #dbdbdb;
  box-shadow: 2px 2px 8px #000000;
`

const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const EntryTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Entry = styled.div`
  font-size: 16pt;
  padding:4pt 2pt;
  border-bottom: 1px solid black;
`

const Part = styled.div`
  font-size: 20pt;
  font-weight: 600;
  margin: 2pt 4pt;
`

const Percent = styled.span`
  font-size: 22pt;
  padding-left: 2pt;
`

const Wear = styled(Entry)`
  margin-bottom:10pt;
  border: none;
  font-weight: 600;
`

export default PartInfo;