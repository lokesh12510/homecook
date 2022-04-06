import { Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer maxWidth="xxl">
      <Grid container spacing={3}>
        <Grid item md={3}>
          <FooterList>
            <FooterListHeader className="listTitle">
              Popular Locations
            </FooterListHeader>
            <FooterListItem>Barcelona</FooterListItem>
            <FooterListItem>Brazil</FooterListItem>
            <FooterListItem>Florida</FooterListItem>
            <FooterListItem>France</FooterListItem>
            <FooterListItem>United Kingdom</FooterListItem>
          </FooterList>
        </Grid>
        <Grid item md={3}>
          <FooterList>
            <FooterListHeader className="listTitle">
              Popular Cuisines
            </FooterListHeader>
            <FooterListItem>BB.Q</FooterListItem>
            <FooterListItem>Cheese Burger</FooterListItem>
            <FooterListItem>Hot Dogs</FooterListItem>
            <FooterListItem>Pizza</FooterListItem>
            <FooterListItem>Stakes</FooterListItem>
          </FooterList>
        </Grid>
        <Grid item md={3}>
          <FooterList>
            <FooterListHeader className="listTitle">Menu</FooterListHeader>
            <FooterListItem>Home</FooterListItem>
            <FooterListItem>Blog Large</FooterListItem>
            <FooterListItem>Contact</FooterListItem>
            <FooterListItem>FAQ’s</FooterListItem>
            <FooterListItem>How it works</FooterListItem>
          </FooterList>
        </Grid>
        <Grid item md={3}>
          <FooterList>
            <FooterListHeader className="listTitle">
              Connect With Us{" "}
            </FooterListHeader>
            <FooterListItem>+1255655488</FooterListItem>
            <FooterListItem>info@homecook.com</FooterListItem>
            <FooterListItem>coimbatore, India</FooterListItem>
          </FooterList>
        </Grid>
        {/* <Grid item md={3}>
          <FooterContent>
            <Stack
              alignItems={"center"}
              justifyContent="center"
              direction={"column"}
              spacing="3"
              mb={4}
            >
              <img src={StaticImages.GooglePlay} alt="google play" />
              <img src={StaticImages.AppStore} alt="App Store" />
            </Stack>
          </FooterContent>
        </Grid> */}
      </Grid>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Container)`
  background-color: #282c35;
  color: #fff;
`;

// const FooterContent = styled.div`
//   display: flex;
//   align-items: start;
//   justify-content: space-between;
//   flex-direction: column;
//   gap: 10px;
// `;

const FooterList = styled.ul`
  list-style: none;
  //   width: 100%;
`;

const FooterListHeader = styled.li`
  padding-block: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border-bottom: 2px solid #fff;
  margin-bottom: 15px;
`;

const FooterListItem = styled.li`
  padding-block: 7px;
  font-size: 14px;
  font-weight: bold;
  color: #999999;
  &:last-child {
    margin-bottom: 20px;
  }
`;
