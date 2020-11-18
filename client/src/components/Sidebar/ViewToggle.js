import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaBicycle } from 'react-icons/fa'

import { ViewToggleContext } from '../../Context/ViewToggleContext';

const ViewToggle = (props) => {

  const {viewToggle, setViewToggle} = React.useContext(ViewToggleContext);
  
  return (
    <ViewToggleWrapper>
        <OptionWrapper>
          <Button onClick={() => setViewToggle('list')}>
            <AiOutlineUnorderedList size={32}/>
          </Button>
        </OptionWrapper>

        <OptionWrapper style={{borderLeft: "2px solid black"}}>
          <Button onClick={() => setViewToggle('image')}>
            <FaBicycle size={32}/>
          </Button>
        </OptionWrapper>
    </ViewToggleWrapper>
  )
}

const ViewToggleWrapper = styled.div`
  border: 3px solid black;
  height: 100pt;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const OptionWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid #ffa500;;
  }
`

const Button = styled(UnstyledButton)`
  height:50pt;
`

export default ViewToggle;