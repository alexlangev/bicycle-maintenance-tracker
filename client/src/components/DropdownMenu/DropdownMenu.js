import React from 'react';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';

const DropdownMenu = () => {
  return(
    <Dropdown className='Dropdown'>
      <DropdownItem>Velo1</DropdownItem>
      <DropdownItem>Velo2</DropdownItem>
    </Dropdown>
  )
}

const Dropdown = styled.div`
  position: absolute;
  top: 50pt;
  overflow: hidden;
`

export default DropdownMenu;