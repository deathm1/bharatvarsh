import { Grid, Stack, Typography } from "@mui/material";
import ReactColorfulCard from "../../Components/ReactColorfulCard/ReactColorfulCard";

export default function ColorGridController(props) {
  if (props.homeCardContent !== null) {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        <Grid container spacing={2}>
          {props.homeCardContent.map((cardTab, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ReactColorfulCard
                CardContent={
                  <Stack direction="column" spacing={2}>
                    <Typography
                      variant="h4"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {cardTab.cardContent.cardHead}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {cardTab.cardContent.cardBody}
                    </Typography>
                  </Stack>
                }
                CardAction={() => {
                  window.location = cardTab.cardNavLink;
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  }
}
