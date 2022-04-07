import React from "react";
import styled from "styled-components";
import {
  AppBar,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { SectionBox } from "../../constants/Styles";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import {
  StyledBreakfastIcon,
  StyledDinnerIcon,
  StyledLunchIcon,
  StyledSnacksIcon,
} from "../../constants/Icons";
import { DefaultTheme } from "../../constants/Theme";
import SearchIcon from "@mui/icons-material/Search";
import FoodItemCard from "./FoodItemCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const FoodListTabContainer = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <FoodListContainer>
      <FoodTabs position="static" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProp={{
            style: {
              display: "none",
            },
          }}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            className="tab_btn"
            label="Breakfast"
            {...a11yProps(0)}
            icon={<StyledBreakfastIcon />}
            iconPosition="start"
          />
          <Tab
            label="Lunch"
            {...a11yProps(1)}
            icon={<StyledLunchIcon />}
            iconPosition="start"
          />
          <Tab
            label="Dinner"
            {...a11yProps(2)}
            icon={<StyledDinnerIcon />}
            iconPosition="start"
          />
          <Tab
            label="Snacks"
            {...a11yProps(3)}
            icon={<StyledSnacksIcon />}
            iconPosition="start"
          />
        </Tabs>
      </FoodTabs>
      <TabsContentSection>
        <SearchTextField
          variant="outlined"
          placeholder="Search Food Item"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: "#000" }} />
              </InputAdornment>
            ),
          }}
        />
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            <Grid container spacing={3}>
              {[...new Array(6)].map((item) => {
                return (
                  <Grid item xs={12} md={6} lg={4}>
                    <FoodItemCard />
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </TabsContentSection>
    </FoodListContainer>
  );
};

export default FoodListTabContainer;

const FoodListContainer = styled(Box)`
  padding: 0;
  background-color: #fff;
  border: 1px solid #cbcbcb;
`;

const FoodTabs = styled(AppBar)`
  background-color: #ebedf3;
  color: #000;
  & .MuiTab-root {
    border: 1px solid #cbcbcb;
  }
  & .Mui-selected {
    background-color: #fff;
    text-align: center;
    color: ${DefaultTheme.palette.secondary.dark};
    border: none;
    & .MuiTab-iconWrapper {
      path {
        fill: ${DefaultTheme.palette.secondary.dark};
      }
    }
  }
  & .MuiTabs-indicator {
    display: none;
  }
`;

const SearchTextField = styled(TextField)`
  padding-block: 20px;
  width: 100%;
  color: #000;
  & .MuiOutlinedInput-root {
    width: 100%;
  }

  & .MuiOutlinedInput-input {
    color: #000;
    padding: 11.5px 14px;
    z-index: 1;
  }
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-radius: 50px;
    background-color: #f6f6f6;
  }
  & :hover.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${DefaultTheme.palette.secondary.main};
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${DefaultTheme.palette.secondary.main};
  }
  & .MuiInputAdornment-root {
    z-index: 1;
  }
`;

const TabsContentSection = styled.div`
  padding: 20px;
`;
