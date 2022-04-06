import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

// style
import styled from "@emotion/styled";
import StaticImages from "../constants/Images";
import { DefaultTheme } from "../constants/Theme";
import { Stack } from "@mui/material";
import { PrimaryBtn, TextBtn } from "../constants/Styles";

const { primary, secondary } = DefaultTheme.palette;

const pages = ["Home", "Menu", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <TopBar elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ paddingBlock: 10 }}>
          <img src={StaticImages.LogoLight} alt="logo" />
          {/* Mobile Nav */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            {pages.map((page) => (
              <TextBtn
                active={page === "Home" ? true : false}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </TextBtn>
            ))}
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
      </Container>
    </TopBar>
  );
};
export default Header;

const TopBar = styled(AppBar)`
  background-color: transparent;
  position: absolute;
  top: 0;
`;
