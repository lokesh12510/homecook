import { SvgIcon } from "@mui/material";

import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/youtube.svg";
import { ReactComponent as StopWatchIcon } from "../assets/stopwatch.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as Breakfast } from "../assets/breakfast.svg";
import { ReactComponent as Lunch } from "../assets/lunch.svg";
import { ReactComponent as Dinner } from "../assets/dinner.svg";
import { ReactComponent as Snacks } from "../assets/snacks.svg";
import { ReactComponent as Popular } from "../assets/popularFlag.svg";
import styled, { css } from "styled-components";

const svgStyles = ({ height, color, hoverColor }) => {
  return css`
    height: ${height || "22px"};
    vertical-align: inherit;
    & path {
      fill: ${color || "#000"};
    }
    &:hover path {
      fill: ${hoverColor || "currentColor"};
    }
  `;
};

export const StyledTwitterIcon = styled(TwitterIcon)`
  ${(props) => svgStyles(props)}
`;
export const StyledFacebookIcon = styled(FacebookIcon)`
  ${(props) => svgStyles(props)}
`;
export const StyledInstagramIcon = styled(InstagramIcon)`
  ${(props) => svgStyles(props)}
`;
export const StyledYoutubeIcon = styled(YoutubeIcon)`
  ${(props) => svgStyles(props)}
`;
export const StyledSnacksIcon = styled(Snacks)`
  ${(props) => svgStyles(props)}
`;
export const StyledLunchIcon = styled(Lunch)`
  ${(props) => svgStyles(props)}
`;
export const StyledDinnerIcon = styled(Dinner)`
  ${(props) => svgStyles(props)}
`;
export const StyledBreakfastIcon = styled(Breakfast)`
  ${(props) => svgStyles(props)}
`;
export const StopwatchIcon = () => <StopWatchIcon />;
export const LocationIcon = () => <Location />;
export const StarIcon = () => <Star />;
export const PopularFlag = () => <Popular />;
