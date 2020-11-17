import React from 'react';
import styled from 'styled-components';

import { VscTriangleRight, VscTriangleUp} from "react-icons/vsc";
import { PartsDbContext } from '../../Context/PartsDbContext';


const CustomBikeSection = () => {
  const [chainIsCollapsed, setChainIsCollapsed] = React.useState(true);

  const {partsDb, setPartsDb} = React.useContext(PartsDbContext);

  console.log(partsDb.chains);
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
            return <DropdownSelection>{chain[0]}</DropdownSelection>
          })
          :<div>collapsed</div>}

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
  width: 100%;
  height: 20pt;
`

export default CustomBikeSection