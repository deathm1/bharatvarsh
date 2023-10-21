import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ThemeController from "../../Controllers/ThemeController/ThemeController";
import { Tooltip } from "@mui/material";

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [createAppBar, setCreateAppBar] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    setCreateAppBar(true);
  }, [props.siteInfo]);

  if (createAppBar !== false) {
    return (
      <AppBar position="static" elevation={0} color="inherit">
        <Toolbar disableGutters>
          <Tooltip title={props.siteInfo.logoTooltip} placement="left">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                mr: 2,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {props.siteInfo.siteName}
            </Typography>
          </Tooltip>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title={props.siteInfo.menuToolTip} placement="right">
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
            </Tooltip>

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
              {props.siteInfo.tabs.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    setAnchorElNav(null);
                    window.location = page.tabEndpoint;
                  }}
                  href={page.tabEndpoint}
                >
                  <Typography textAlign="center">{page.tabName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Tooltip title={props.siteInfo.logoTooltip}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,

                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {props.siteInfo.siteName}
            </Typography>
          </Tooltip>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {props.siteInfo.tabs.map((page, index) => (
              <Button
                size="small"
                sx={{
                  textTransform: "none",
                }}
                href={page.tabEndpoint}
                key={page.tabEndpoint}
                onClick={handleCloseNavMenu}
                color="inherit"
              >
                {page.tabName}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ThemeController
              changeThemeTooltip={props.siteInfo.changeThemeTooltip}
              currentTheme={props.currentTheme}
              setSiteTheme={props.setSiteTheme}
            />
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}
export default ResponsiveAppBar;
