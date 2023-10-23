import { Divider, Grid, Stack, Typography } from "@mui/material";
import CustomList from "../../Components/CustomList/CustomList";
import { useEffect, useState } from "react";
export default function Book() {
  const [bookinfo, setBookinfo] = useState(null);

  useEffect(() => {
    setBookinfo([
      {
        header: "some header some ",
        body: "some bodysome headersome headersome headersome headersome headersome headersome header",
        navigate: "/books/en/somebookid/chapterid",
      },
    ]);
  }, []);
  return (
    <Stack
      sx={{ mt: 4, mb: 2 }}
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Some book title
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomList bookInfo={bookinfo} />
        </Grid>
      </Grid>
    </Stack>
  );
}
