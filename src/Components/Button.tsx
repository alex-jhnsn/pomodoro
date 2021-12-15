import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const Button = styled.button`

`;

interface buttonProps {
  name: string
  onClickHandler: MouseEventHandler<HTMLButtonElement>
};

export const PrimaryButton = ({name, onClickHandler}: buttonProps) => {
  return (
    <Button onClick={onClickHandler}>{name}</Button>
  )
}