import { useEffect, useState } from "react";
import AppBar from "./Components/AppBar/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline, Link, Stack, Typography } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Divider from "@mui/material/Divider";

import Home from "./Pages/Home/Home";
import BookLanguage from "./Pages/BookLanguage/BookLanguage";
import Books from "./Pages/Books/Books";
import Book from "./Pages/Book/Book";
import ChapterController from "./Pages/ChapterController/ChapterController";
import ChapterVerseController from "./Pages/ChapterVerseController/ChapterVerseController";

import StickyFooter from "./Components/StickyFooter/StickyFooter";
import CustomBreadcrumb from "./Components/CustomBreadcrumb/CustomBreadcrumb";
import FontController from "./Controllers/FontController/FontController";
function MasterInterface() {
  const [siteInfo, setSiteInfo] = useState({
    siteName: "Bharat Archive",
    tabs: [
      {
        tabName: "Books",
        tabEndpoint: "/books",
      },
    ],
    footerText: "Some footer text",
    changeThemeTooltip: "Toggle Theme",
    menuToolTip: "Open Menu",
    logoTooltip: "Bharat Archive",
  });

  const [siteTheme, setSiteTheme] = useState(false);
  const [font, setFont] = useState(14);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      // fontFamily: `vazir`,
      fontSize: font,
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontSize: font,
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
          font={font}
          setFont={setFont}
        />

        <Stack
          sx={{ mt: 1, mb: 1 }}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <CustomBreadcrumb />
          <FontController font={font} setFont={setFont} />
        </Stack>

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

            <Route
              exact
              path="/books"
              element={
                <BookLanguage
                  siteInfo={siteInfo}
                  currentTheme={siteTheme}
                  setSiteTheme={setSiteTheme}
                />
              }
            />

            <Route
              exact
              path="/books/:languageid"
              element={
                <Books
                  siteInfo={siteInfo}
                  currentTheme={siteTheme}
                  setSiteTheme={setSiteTheme}
                />
              }
            />

            <Route
              exact
              path="/books/:languageid/:bookid"
              element={
                <Book
                  siteInfo={siteInfo}
                  currentTheme={siteTheme}
                  setSiteTheme={setSiteTheme}
                />
              }
            />

            <Route
              exact
              path="/books/:languageid/:bookid/:chapterid"
              element={
                <ChapterController
                  siteInfo={siteInfo}
                  currentTheme={siteTheme}
                  setSiteTheme={setSiteTheme}
                />
              }
            />

            <Route
              exact
              path="/books/:languageid/:bookid/:chapterid/:verseid"
              element={
                <ChapterVerseController
                  siteInfo={siteInfo}
                  currentTheme={siteTheme}
                  setSiteTheme={setSiteTheme}
                />
              }
            />

            <Route
              exact
              path="*"
              element={
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ mt: 8, mb: 8 }}
                >
                  <Typography variant="h3">Page Not Found</Typography>
                  <Typography variant="p">
                    We're sorry, but the page you requested could not be found.
                    Please check the URL and try again.
                  </Typography>
                  <Link href="/">Home</Link>
                </Stack>
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
