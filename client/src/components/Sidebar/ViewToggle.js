import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaBicycle } from 'react-icons/fa'

import { ViewToggleContext } from '../../Context/ViewToggleContext';

const ViewToggle = (props) => {

  const {setViewToggle} = React.useContext(ViewToggleContext);
  
  return (
    <ViewToggleWrapper>
        <OptionWrapper onClick={() => setViewToggle('list')}>
          <Button >
            <AiOutlineUnorderedList size={32}/>
          </Button>
        </OptionWrapper>

        <OptionWrapper onClick={() => setViewToggle('image')} style={{borderLeft: "2px solid black"}}>
          <Button >
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

const OptionWrapper = styled(UnstyledButton)`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid #ffa500;;
  }
`

const Button = styled.div`
  margin-top: 22pt;
  height:50pt;
`

export default ViewToggle;