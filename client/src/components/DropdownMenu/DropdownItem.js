import React from 'react';
import styled from 'styled-components';

const DropdownItem = (props) => {
  return(
    <DropdownItemWrapper>
      {props.children}
    </DropdownItemWrapper>
  )
}

const DropdownItemWrapper = styled.div`
  height: 22pt;
  width: 263pt;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px black;

  /* animation part */
  transition: background var(--speed);

  &:hover {
    background-color: darkolivegreen;
  }
`

export default DropdownItem;