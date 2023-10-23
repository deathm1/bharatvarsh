import { Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomList from "../../Components/CustomList/CustomList";

import CustomAccordianController from "../../Controllers/CustomAccordianController/CustomAccordionController";

export default function ChapterController() {
  const [chapterInfo, setChapterInfo] = useState(null);
  useEffect(() => {
    setChapterInfo({
      chapterName: "Chapter Name",
      otherChapters: [
        {
          header: "some header some ",
          body: "some bodysome headersome",
          navigate: "/books/en/somebookid/chapterid",
        },
        {
          header: "some header some 2",
          body: "some bodysome headersome 2",
          navigate: "/books/en/somebookid/chapterid2",
        },
      ],
      chapterIntro:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      chapterVerses: [
        {
          head: "some head 1",
          body: "some Body",
          navlink: "/books/en/somebookid/chapterid/someverseid",
        },
      ],
    });
  }, []);
  if (chapterInfo !== null) {
    return (
      <Stack direction="column">
        <Typography variant="h4" sx={{ mt: 2 }}>
          {chapterInfo.chapterName}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography sx={{ mb: 2 }}>{chapterInfo.chapterIntro}</Typography>
            <CustomAccordianController content={chapterInfo.chapterVerses} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomList bookInfo={chapterInfo.otherChapters} />
          </Grid>
        </Grid>
      </Stack>
    );
  } else if (chapterInfo === null) {
    return <Typography variant="h6">No Content to display.</Typography>;
  }
}
