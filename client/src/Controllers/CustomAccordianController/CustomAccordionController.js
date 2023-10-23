import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, Stack } from "@mui/material";

export default function CustomAccordianController(props) {
  const [content, setContent] = React.useState(null);
  React.useEffect(() => {
    setContent(props.content);
  }, [props.content]);

  if (content !== null) {
    return (
      <Stack direction="column">
        {content.map((elem, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">{elem.head}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body1">{elem.body}</Typography>
                  <Link variant="body2" href={elem.navlink}>
                    View More
                  </Link>
                </Stack>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Stack>
    );
  } else if (content === null) {
    return (
      <Typography variant="h6">No content to display in Accordion</Typography>
    );
  }
}
