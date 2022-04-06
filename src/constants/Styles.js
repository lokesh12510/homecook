import { Button } from "@mui/material";
import styled from "styled-components";
import { DefaultTheme } from "./Theme";

const { primary, secondary } = DefaultTheme.palette;

export const PrimaryBtn = styled(Button)`
  padding: 5px 25px;
  ${(props) => props.round && "border-radius : 50px"};
  border: 1px solid ${primary.main};
  font-size: 14px;
  min-width: 80px;
  ${({ variant }) => variant === "outlined" && "background-color:#fff"};
`;

export const TextBtn = styled(Button)`
  ${({ active }) => active && `color:${secondary.main}`};
`;
