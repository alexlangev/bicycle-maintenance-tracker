import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaBicycle } from 'react-icons/fa'

const ViewToggle = () => {
  return (
    <ViewToggleWrapper>
        <OptionWrapper>
          <Button>
            <AiOutlineUnorderedList size={32}/>
          </Button>
        </OptionWrapper>

        <OptionWrapper>
          <Button>
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
  border: solid 2px white;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled(UnstyledButton)`
  height:50pt;
`

export default ViewToggle;