import * as React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, Tooltip } from "@mui/material";

export default function ThemeController(props) {
  function toggleTheme(change) {
    localStorage.setItem("isDarkMode?", change);
    props.setSiteTheme(change);
  }

  return (
    <Tooltip title={props.changeThemeTooltip}>
      <IconButton
        onClick={() => {
          toggleTheme(!props.currentTheme);
        }}
      >
        {props.currentTheme ? (
          <DarkModeIcon color="inherit" />
        ) : (
          <LightModeIcon color="inherit" />
        )}
      </IconButton>
    </Tooltip>
  );
}
