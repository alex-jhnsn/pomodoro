import React, { FC } from "react";

interface TimerProps {

};

const Timer: FC<TimerProps> = () => {
  return (
    <div>
      <svg height="200" width="200">
        <path d="M 0 60 c 0 -40 40 -40 40 -40.2 c -0.1 0.3 12.9 -8.84 31.78 -2.3 c 5.72 -2.26 13.82 -5.06 17.5 -4.3 c 6.92 0.18 13.78 3.6 15.96 7.66 c 33.06 -3.44 34.62 29.62 34.76 39.14 l -140 0 z" fill="#EE3C31"/>
        <path d="M 0 64 c -0.16 39.66 19.84 39.66 39.84 39.66 h 60 c 20 0 40 0 40 -40 z" fill="#EE3C31"/>
      </svg>
    </div>
  )
}

export default Timer;