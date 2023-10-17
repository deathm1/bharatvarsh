import { useEffect, useState } from "react";
import AppBar from "./Components/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";

function MasterInterface() {
  const [siteInfo, setSiteInfo] = useState({
    siteName: "भारतवर्ष",
    tabs: [
      {
        tabName: "Tab 1",
        tabEndpoint: "/tab1",
      },
      {
        tabName: "Tab 2",
        tabEndpoint: "/tab2",
      },
      {
        tabName: "Tab 3",
        tabEndpoint: "/tab3",
      },
    ],
    changeThemeTooltip: "Toggle Theme",
    menuToolTip: "Open Menu",
    logoTooltip: "भारतवर्ष",
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
      </Container>
    </ThemeProvider>
  );
}

export default MasterInterface;
