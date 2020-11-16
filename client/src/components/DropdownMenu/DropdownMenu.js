import React from 'react';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';

import { CurrentUserContext } from '../../Context/CurrentUserContext';

const DropdownMenu = (props) => {
  const {currentUser, setCurrentUser} = React.useContext(CurrentUserContext);
  const bicycleList = Object.entries(currentUser.BikeData);
  console.log(bicycleList);

  return(
      <Dropdown className='Dropdown'>
        {bicycleList.map((bike) => {
          return <DropdownItem>{bike[1].bikeData.name}</DropdownItem>
        })}
      </Dropdown>
  )
}

const Dropdown = styled.div`
  position: absolute;
  top: 50pt;
  overflow: hidden;
`

export default DropdownMenu;