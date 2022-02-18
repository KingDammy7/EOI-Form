import React from 'react'
import styled from 'styled-components';
import { MultiStepForm, Step } from 'react-multi-form'
import Confirmation from './Components/Confirmation'
import Button from './Components/Button'
import Personal from './Components/Personal';
import Technical from './Components/Technical';
import Submit from './Components/Submit';
import Header from './Components/Header';



const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  @media(max-width: 590px) {
    width: 300px;
  }
`

const App = () => {
  const [active, setActive] = React.useState(1)
  return (
    <div>
    <Header />
    <Container>
      
      <MultiStepForm activeStep={active}>
        <Step label='personal details'>
          <Personal />
        </Step>
        <Step label='technical details'>
          <Technical />
        </Step>
        <Step label='terms'>
          <Confirmation />
        </Step>
        <Step >
          <Submit />
        </Step>
      </MultiStepForm>

      {active !== 1 && (
        <Button onClick={() => setActive(active - 1)}>Previous</Button>
      )}
      {active !== 4 && (
        <Button
          onClick={() => setActive(active + 1)}
          style={{ float: 'right' }}
        >
          Next
        </Button>
      )}
     
    </Container>
    </div>
  )
}

export default App