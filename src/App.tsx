import React, { useState } from 'react';
import Theme from './Components/Theme';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { NumberInput } from './Components/Input';
import TimeBreakdown from './Components/TimeBreakdown';
import Timer from './Components/Timer'

const Page = styled.div`
  background-color: ${ ({ theme: { colors } }) => colors.background };
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Content = styled.section`
  margin: auto;
  display: flex;
`;

const Form = styled.form`
  
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 12px;

  > svg {
    width: 16px;
    height: 16px;
  }
`;

const InputRow = styled.div`
  display: flex;
`;

function App() {

  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [loops, setLoops] = useState(4);

  return (
    <Theme>
      <Page>
        <Content>
          <Form>
            <Title><h1>Pomodoro</h1> <IconButton title="About"><FontAwesomeIcon icon={faInfoCircle} /></IconButton></Title>
            <InputRow>
              <NumberInput name="Focus" increment={5} value={focusTime} change={setFocusTime} />
              <NumberInput name="Break" increment={5} value={breakTime} change={setBreakTime} />
            </InputRow>
            <TimeBreakdown breakTime={breakTime} focusTime={focusTime} />
            <NumberInput name="Loops" increment={1} value={loops} change={setLoops} />
          </Form>
          <Timer />
        </Content>
      </Page>
    </Theme>
  );
}

export default App;
