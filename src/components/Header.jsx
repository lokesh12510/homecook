import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

// style
import styled from "@emotion/styled";
import StaticImages from "../constants/Images";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { PrimaryBtn, TextBtn } from "../constants/Styles";

const pages = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  // Func

  const [state, setState] = React.useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar>
        <img src={StaticImages.LogoLight} alt="logo" />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          {getMenuButtons()}
        </Box>

        <Stack
          sx={{ flexGrow: 0 }}
          direction="row"
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={3}
        >
          <PrimaryBtn variant="outlined" color="primary" round={"true"}>
            Login
          </PrimaryBtn>
          <PrimaryBtn variant="contained" color="primary" round={"true"}>
            Register
          </PrimaryBtn>
        </Stack>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return pages.map((page) => (
      <TextBtn
        active={page.href === "/" ? true : false}
        key={page.label}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {page.label}
      </TextBtn>
    ));
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={StaticImages.LogoLight} alt="logo" />
          <PrimaryBtn variant="outlined" color="primary" round={"true"}>
            Login
          </PrimaryBtn>
        </Box>

        <Sidebar
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <List>{getDrawerChoices({ handleDrawerClose })}</List>
        </Sidebar>
      </Toolbar>
    );
  };

  const getDrawerChoices = ({ handleDrawerClose }) => {
    return pages.map((page) => (
      <ListItem
        disablePadding
        key={page.label}
        onClick={() => handleDrawerClose()}
      >
        <ListItemButton>
          <ListItemText primary={page.label} />
        </ListItemButton>
      </ListItem>
    ));
  };
  return (
    <TopBar elevation={0} position="fixed" style={{ paddingBlock: 10 }}>
      <Container maxWidth="xl">
        {mobileView ? displayMobile() : displayDesktop()}
      </Container>
    </TopBar>
  );
};
export default Header;

const TopBar = styled(AppBar)`
  background-color: transparent;
  @media (max-width: 600px) {
    & .MuiToolbar-root {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const Sidebar = styled(Drawer)`
  & .MuiPaper-root {
    width: 90%;
  }
`;
