import { Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner";
import FoodListTabContainer from "../../features/FoodList/FoodListTabContainer";
import KitchenSliderContainer from "../../features/KitchenSlider/KitchenSliderContainer";

const Home = () => {
  return (
    <>
      <Banner />
      <BodyContainer maxWidth={"xl"}>
        <KitchenSliderContainer />
        <Grid container>
          <Grid item xs={9}>
            <FoodListTabContainer />
          </Grid>
        </Grid>
      </BodyContainer>
    </>
  );
};

export default Home;

const BodyContainer = styled(Container)`
  margin-bottom: 24px;
  padding-block: 25px;
`;
