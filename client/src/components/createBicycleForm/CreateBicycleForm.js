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
      <Title>Enter your bicycle's information</Title>
        <CompleteBike>
          <Radio type="radio" id="complete" name="completeBicycle" value="complete" onClick={()=>setIsCompleteBike(true)}/>
          <Label for="complete">Complete Bicycle</Label>
          <Radio type="radio" id="custom" name="completeBicycle" value="custom"  onClick={()=>setIsCompleteBike(false)}/>
          <Label for="custom">Custom Bicycle</Label>
        </CompleteBike>
    </CreateBicycleFormWrapper>
    )
  } else if(isCompleteBike === true){
    return (
      <CreateBicycleFormWrapper>
        <Title>Enter your bicycle's information</Title>
          <CompleteBike>
            <Radio type="radio" id="complete" name="completeBicycle" value="complete" onClick={()=>setIsCompleteBike(true)}/>
            <Label for="complete">Complete Bicycle</Label>
            <Radio type="radio" id="custom" name="completeBicycle" value="custom"  onClick={()=>setIsCompleteBike(false)}/>
            <Label for="custom">Custom Bicycle</Label>
          </CompleteBike>
          <CompleteBikeSection />
      </CreateBicycleFormWrapper>
    )
  } else return (
    <CreateBicycleFormWrapper>
      <Title>Enter your bicycle's information</Title>
        <CompleteBike>
          <Radio type="radio" id="complete" name="completeBicycle" value="complete" onClick={()=>setIsCompleteBike(true)}/>
          <Label for="complete">Complete Bicycle</Label>
          <Radio type="radio" id="custom" name="completeBicycle" value="custom"  onClick={()=>setIsCompleteBike(false)}/>
          <Label for="custom">Custom Bicycle</Label>
        </CompleteBike>
        <CustomBikeSection />
    </CreateBicycleFormWrapper>
  )
}

const CreateBicycleFormWrapper = styled.div`
  padding: 10pt;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Radio = styled.input`
`

const Label = styled.label`
  font-size: 14pt;
  margin-right: 6pt;
`

const Title = styled.h2`
  font-size:18pt;
`

const CompleteBike = styled.div`
  margin-top: 5pt;
`

export default CreateBicycleForm;