import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#FEDFBE",
    primary: "#e20f21"
  }
};

interface Props {
  children?: React.ReactNode
};

const Theme = (props: Props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;