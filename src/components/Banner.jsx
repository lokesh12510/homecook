import styled from "@emotion/styled";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import StaticImages from "../constants/Images";
import { DefaultTheme } from "../constants/Theme";

// Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Banner = () => {
  return (
    <BannerContainer minHeight={500} src={StaticImages.Banner}>
      <BannerContent>
        <>
          <HeroText>Order Food Online From</HeroText>
          <HeroSubText>the Best Homecook</HeroSubText>
        </>
        <Typography variant="h5" component={"div"} fontWeight="500">
          Homecook In Your Mobile ! Get Our App
        </Typography>
        <Typography
          variant="h6"
          component={"p"}
          fontWeight="400"
          fontSize="14px"
        >
          Get our app, it's the fastest way to order food on the go.
        </Typography>
        <Stack
          alignItems={"center"}
          justifyContent="center"
          direction={"row"}
          spacing="3"
          mb={4}
        >
          <img src={StaticImages.GooglePlay} alt="google play" />
          <img src={StaticImages.AppStore} alt="App Store" />
        </Stack>
        <LocationTextField
          variant="outlined"
          placeholder="Choose Location"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon style={{ color: "#fff" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <ArrowDropDownIcon style={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
        />
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  width: 100%;
  min-height: ${(props) => props.minHeight}px;
  background-color: #e6e6e6;
  background-image: url(${(props) => props.src});
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000078;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  padding-top: 100px;
`;

const HeroText = styled(Typography)`
  color: ${DefaultTheme.palette.secondary.main};
  font-size: 50px;
  text-align: center;
  margin-bottom: 0;
  line-height: 0.7;
  font-family: "Wendy One", sans-serif;
`;
const HeroSubText = styled(Typography)`
  color: inherit;
  font-size: 50px;
  text-align: center;
  margin-bottom: 10px;
  line-height: 0.7;
  font-family: "Wendy One", sans-serif;
`;

const LocationTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    min-width: 500px;
  }
  & .MuiOutlinedInput-input {
    color: white;
    padding: 11.5px 14px;
  }
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: white;
    color: white;
    border-radius: 50px;
    background-color: #ffffff35;
  }
  & :hover.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${DefaultTheme.palette.secondary.main};
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${DefaultTheme.palette.secondary.main};
  }
`;
