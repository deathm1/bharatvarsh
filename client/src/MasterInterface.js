import { useEffect, useState } from "react";
import AppBar from "./Components/AppBar/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import StickyFooter from "./Components/StickyFooter/StickyFooter";

function MasterInterface() {
  const [siteInfo, setSiteInfo] = useState({
    siteName: "Bharat Archive",
    tabs: [
      {
        tabName: "Tab 1",
        tabEndpoint: "/tab1",
      },
    ],
    footerText: "Some footer text",
    changeThemeTooltip: "Toggle Theme",
    menuToolTip: "Open Menu",
    logoTooltip: "Bharat Archive",
  });

  const [siteTheme, setSiteTheme] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    console.log("exec master interface use effect");
    if (localStorage.getItem("isDarkMode?") === "true") {
      setSiteTheme(true);
    } else {
      setSiteTheme(false);
    }
    setSiteInfo(siteInfo);
  }, [siteInfo]);
  return (
    <ThemeProvider theme={siteTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar
          siteInfo={siteInfo}
          currentTheme={siteTheme}
          setSiteTheme={setSiteTheme}
        />
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  siteInfo={siteInfo}
                  currentTheme={siteTheme}
                  setSiteTheme={setSiteTheme}
                />
              }
            />
          </Routes>
        </BrowserRouter>
        <StickyFooter
          siteName={siteInfo.siteName}
          footerText={siteInfo.footerText}
        />
      </Container>
    </ThemeProvider>
  );
}

export default MasterInterface;
