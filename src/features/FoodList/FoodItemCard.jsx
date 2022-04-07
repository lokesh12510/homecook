import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Food from "../../assets/food.png";
import styled from "styled-components";
import { PopularFlag } from "../../constants/Icons";
import { Stack } from "@mui/material";
import { DefaultTheme } from "../../constants/Theme";

import StarIcon from "@mui/icons-material/Star";

export default function FoodItemCard() {
  return (
    <FoodCard sx={{ maxWidth: 345 }}>
      <div className="popularFlag">
        <PopularFlag />
      </div>
      <CardMedia component="img" height="140" image={Food} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Veg Omelette
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Egg, Tomoto, Onion , Coriander
        </Typography>

        <Stack direction={"row"} spacing={1}>
          <div className="ratingIndicator">
            <StarIcon style={{ fontSize: 15 }} /> 4.5
          </div>
          <Typography>(300)</Typography>
        </Stack>
      </CardContent>
    </FoodCard>
  );
}

const FoodCard = styled(Card)`
  padding: 0;
  & .MuiCardMedia-root {
    height: 200px;
  }
  position: relative;
  & .popularFlag {
    position: absolute;
    top: 0;
    left: 0;
  }
  & .MuiCardContent-root {
    padding: 10px;
  }
  & .ratingIndicator {
    width: auto;
    background-color: ${DefaultTheme.palette.secondary.dark};
    color: #fff;
    display: inline-flex;
    padding: 2px;
    text-align: center;
    min-width: 40px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
`;
