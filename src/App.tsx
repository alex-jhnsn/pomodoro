import React, { useEffect, useState } from 'react';
import Theme from './Components/Theme';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { NumberInput } from './Components/Input';
import TimeBreakdown from './Components/TimeBreakdown';
import Timer from './Components/Timer';
import { PrimaryButton } from './Components/Button';

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

const Form = styled.div`
  
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

  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState<number>();
  const [focus, setFocus] = useState(true);

  const startClickHandler = () => {
    console.log("Pressed");
    if (currentTime == null)
      setCurrentTime(focusTime);

    setPaused(!paused);
  }

  useEffect(
    () => {
      let interval: NodeJS.Timeout;
      if (currentTime != null && !paused) {
        interval = setInterval(() => {
          setCurrentTime(currentTime => {
            if (currentTime !== undefined)
              return currentTime + 1;
          });
        }, 1000);
      } else if (paused && currentTime !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    },
    [paused, currentTime]
  );

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
            <PrimaryButton name={ paused ? "Start" : "Pause" } onClickHandler={startClickHandler} />
          </Form>
          <Timer time={currentTime ?? 0} />
        </Content>
      </Page>
    </Theme>
  );
}

export default App;
