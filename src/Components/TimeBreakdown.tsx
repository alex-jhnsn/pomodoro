import React, { FC } from "react";
import styled from "styled-components";

interface TimeBreakdownProps {
  focusTime: number;
  breakTime: number;
  height?: number;
  cornerRadius?: number;
};

const Bar = styled.svg`
  padding: 12px 0;
  height: ${props => props.height};
`;

const TimeBreakdown: FC<TimeBreakdownProps> = ({focusTime, breakTime, height = 12, cornerRadius = 4}) => {
  const focusTimePercentage: number = ((focusTime / (focusTime + breakTime)) * 100) * 3;
  const breakTimePercentage: number = ((breakTime / (focusTime + breakTime)) * 100) * 3;

  return (
    <Bar height={height}>
      <path d={`m ${cornerRadius} 0 h${focusTimePercentage-cornerRadius} v${height} h-${focusTimePercentage-cornerRadius} a ${cornerRadius} ${cornerRadius} 0 0 1 -${cornerRadius} -${cornerRadius} v-${height-(cornerRadius*2)} a ${cornerRadius} ${cornerRadius} 0 0 1 ${cornerRadius} -${cornerRadius} z `} style={{fill:"blue"}}/>
      <path d={`m ${focusTimePercentage} 0 h${breakTimePercentage-cornerRadius} a ${cornerRadius} ${cornerRadius} 0 0 1 ${cornerRadius} ${cornerRadius} v${height-(cornerRadius*2)} a ${cornerRadius} ${cornerRadius} 0 0 1 -${cornerRadius} ${cornerRadius} h-${breakTimePercentage-cornerRadius} v-${height}  z `} style={{fill:"red"}}/>
    </Bar>
  );
}

TimeBreakdown.defaultProps = {
  height: 12,
  cornerRadius: 4
}

export default TimeBreakdown;