import { Stack, Typography } from "@mui/material";
import ColorGridController from "../../Controllers/ColorGridController/ColorGridcontroller";
import { useEffect, useState } from "react";

export default function BookLanguage() {
  const [bookList, setBookList] = useState(null);

  useEffect(() => {
    setBookList([
      {
        cardContent: {
          cardHead: "English",
          cardBody: "Books available in english language",
        },
        cardNavLink: "/books/en",
      },
    ]);
  }, []);
  return (
    <>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Select Language
      </Typography>
      <ColorGridController homeCardContent={bookList} />
    </>
  );
}
