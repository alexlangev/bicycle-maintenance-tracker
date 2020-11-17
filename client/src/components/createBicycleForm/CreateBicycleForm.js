import React from 'react';
import styled from 'styled-components';

import CompleteBikeSection from './CompleteBikeSection';
import CustomBikeSection from './CustomBikeSection';

const CreateBicycleForm = () => {
  const [isCompleteBike, setIsCompleteBike] = React.useState(null)
  console.log(isCompleteBike);
  if(isCompleteBike === null){
    return(
      <CreateBicycleFormWrapper>
      <Title>Please enter your bicycle's information</Title>
        <CompleteBike>
          <input type="radio" id="complete" name="completeBicycle" value="complete" onClick={()=>setIsCompleteBike(true)}/>
          <label for="complete">Complete Bicycle</label>
          <input type="radio" id="custom" name="completeBicycle" value="custom"  onClick={()=>setIsCompleteBike(false)}/>
          <label for="custom">Custom Bicycle</label>
        </CompleteBike>
    </CreateBicycleFormWrapper>
    )
  } else if(isCompleteBike === true){
    return (
      <CreateBicycleFormWrapper>
        <Title>Please enter your bicycle's information</Title>
          <CompleteBike>
            <input type="radio" id="complete" name="completeBicycle" value="complete" onClick={()=>setIsCompleteBike(true)}/>
            <label for="complete">Complete Bicycle</label>
            <input type="radio" id="custom" name="completeBicycle" value="custom"  onClick={()=>setIsCompleteBike(false)}/>
            <label for="custom">Custom Bicycle</label>
          </CompleteBike>
          <CompleteBikeSection />
      </CreateBicycleFormWrapper>
    )
  } else return (
    <CreateBicycleFormWrapper>
      <Title>Please enter your bicycle's information</Title>
        <CompleteBike>
          <input type="radio" id="complete" name="completeBicycle" value="complete" onClick={()=>setIsCompleteBike(true)}/>
          <label for="complete">Complete Bicycle</label>
          <input type="radio" id="custom" name="completeBicycle" value="custom"  onClick={()=>setIsCompleteBike(false)}/>
          <label for="custom">Custom Bicycle</label>
        </CompleteBike>
        <CustomBikeSection />
    </CreateBicycleFormWrapper>
  )
}

const CreateBicycleFormWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h2`
`

const CompleteBike = styled.div`

`

export default CreateBicycleForm;