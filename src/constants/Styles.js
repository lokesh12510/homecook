import { Box, Button, IconButton, Tab, Typography } from "@mui/material";
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

export const IconBtn = styled(IconButton)`
  object-fit: contain;
  &:hover {
    color: ${secondary.dark};
  }
`;

export const SectionBox = styled(Box)`
  padding: 15px;
`;

export const SectionHeader = styled(Typography)`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
  margin-left: 40px;
`;

export const TabBtn = styled(Tab)`
  & .Mui-selected: {
    background-color: #fff;
    text-align: center;
  }
`;
