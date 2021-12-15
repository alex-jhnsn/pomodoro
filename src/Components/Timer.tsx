import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { PrimaryButton } from "./Button";

interface TimerProps {
  time: number;
};

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 24px;
`;

const Timer: FC<TimerProps> = ({ time }) => {
  const divisions: number = 12;

  return (
    <TimerContainer>
      <svg height="300" width="300" viewBox="0 0 140 140" overflow="visible">
        <defs>
          <clipPath id="tomato-bottom">
            {/* <path d="M 0 64 c -0.16 39.66 19.84 39.66 39.84 39.66 h 60 c 20 0 40 0 40 -40 z"/> */}
            <rect width="199" height="70" />
          </clipPath>
        </defs>

        <path d="M 0 60 c 0 -40 40 -40 40 -40.2 c -0.1 0.3 12.9 -8.84 31.78 -2.3 c 5.72 -2.26 13.82 -5.06 17.5 -4.3 c 6.92 0.18 13.78 3.6 15.96 7.66 c 33.06 -3.44 34.62 29.62 34.76 39.14 l -140 0 z" fill="#EE3C31"/>
        <path d="M 0 64 c -0.16 39.66 19.84 39.66 39.84 39.66 h 60 c 20 0 40 0 40 -40 z" fill="#EE3C31"/>
        <path d="M 54 15 C 38 22 32 28 29 34 C 39 25 49 22 60 22 C 55.3333 29.3333 48 34 51 44 C 59 33 64 30 73 25 C 80 28 86 34 93 43 C 93 32 92 27 87 19 C 94 23 101 26 110 34 C 109 27 108 23 103 18 C 100 15 94 13 89 13 C 84 13 78 14 72 17 C 65 14 60 13 54 15 Z" fill="#019650"/>
        <polygon points="65,50 75,50 70,55" fill="#ffffff" />
        
        <svg x="0" y="30" overflow="visible" viewBox="0 0 200 100" clipPath="url(#tomato-bottom)">
          {/* <Scale divisions={divisions} /> */}
          <svg x={99-time} overflow="visible">{Scale(12)}</svg>
        </svg>
      </svg>
    </TimerContainer>
  )
}

interface ScaleProps {
  divisions: number
}

const Scale = (divisions: number) => {

  const lines: ReactElement[] = [];

  for (let i = 0; i < divisions; i++) {
    const section = 
    <svg key={i} x={50*i} overflow="visible">
      <rect x="0" width="2" height="10" fill="#fff" />
      <rect x="10" width="2" height="5" fill="#fff" />
      <rect x="20" width="2" height="5" fill="#fff" />
      <rect x="30" width="2" height="5" fill="#fff" />
      <rect x="40" width="2" height="5" fill="#fff" />
      <text x="-2" y="25" fontSize="14" fill="#fff">{i*5}</text>
    </svg>;
    lines.push(section);
  }

  return lines;
}

export default Timer;