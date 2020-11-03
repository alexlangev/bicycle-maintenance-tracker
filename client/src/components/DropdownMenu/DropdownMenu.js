import React from 'react';
import styled from 'styled-components';

import {IoMdArrowDropdown} from 'react-icons/io';
import UnstyledButton from '../UnstyledButton';

const DropdownMenu = () => {

  //Some bit of state that keeps track if the menu is open or closed
  const [isOpen, setIsOpen] = React.useState(false);
  //Function that changes the state of isOpen when clicking on the dropdown menu
  const handleClickOpen  = () => {
    setIsOpen(!isOpen);
  }

  return(
    <DropdownMenuWrapper>
      <MenuButton onClick={handleClickOpen}>
          <p>Choose your bicycle</p>
          <IoMdArrowDropdown size={32}/>
      </MenuButton>
    </DropdownMenuWrapper>
  )
}

const DropdownMenuWrapper = styled.div`
  border: 3px solid black;
  height: 22pt;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuButton = styled(UnstyledButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export default DropdownMenu;