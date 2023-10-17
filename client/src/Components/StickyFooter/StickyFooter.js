import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" textAlign="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        {props.siteName}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter(props) {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" textAlign="center">
          {props.footerText}
        </Typography>
        <Copyright siteName={props.siteName} />
      </Container>
    </Box>
  );
}
