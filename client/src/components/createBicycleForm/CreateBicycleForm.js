import React from 'react';
import styled from 'styled-components';

import CompleteBikeSection from './CompleteBikeSection';
import CustomBikeSection from './CustomBikeSection';

const CreateBicycleForm = () => {
  const [isCompleteBike, setIsCompleteBike] = React.useState(null)
  console.log(isCompleteBike);
  return (
    <CreateBicycleFormWrapper>
      <Title>Please enter your bicycle's information</Title>
      <Form>
        <CompleteBike>
          <input type="radio" id="complete" name="completeBicycle" value="complete" onClick={()=>setIsCompleteBike(true)}/>
          <label for="complete">Complete Bicycle</label>
          <input type="radio" id="custom" name="completeBicycle" value="custom"  onClick={()=>setIsCompleteBike(false)}/>
          <label for="custom">Custom Bicycle</label>
        </CompleteBike>
        
        {isCompleteBike?<CompleteBikeSection />:<CustomBikeSection />}
      </Form>
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

const Form = styled.form`
`

const Title = styled.h2`
`

const CompleteBike = styled.div`

`

export default CreateBicycleForm;