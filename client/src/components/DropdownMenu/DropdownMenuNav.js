import React from 'react';
import styled from 'styled-components';

import {IoMdArrowDropdown} from 'react-icons/io';
import UnstyledButton from '../UnstyledButton';

const DropdownMenuNav = (props) => {

  //Some bit of state that keeps track if the menu is open or closed
  const [isOpen, setIsOpen] = React.useState(false);
  
  //Function that toggles isOpen when clicking on the dropdown menu
  const handleClickOpen  = () => {
    setIsOpen(!isOpen);
  }

  return(
    <DropdownMenuNavWrapper>
      <MenuButton onClick={handleClickOpen}>
          <p>Choose your bicycle</p>
          <IoMdArrowDropdown size={32}/>
      </MenuButton>
      {isOpen && props.children}
    </DropdownMenuNavWrapper>
  )
}

const DropdownMenuNavWrapper = styled.div`
  border: 3px solid black;
  height: 22pt;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuButton = styled(UnstyledButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default DropdownMenuNav;