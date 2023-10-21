import { useEffect, useState } from "react";
import ColorGridController from "../../Controllers/ColorGridController/ColorGridcontroller";

export default function Books() {
  const [bookList, setBookList] = useState(null);

  useEffect(() => {
    setBookList([
      {
        cardContent: {
          cardHead: "Some book name",
          cardBody: "Lorem Ipsum is simply dummy",
        },
        cardNavLink: "/books/en/somebookid",
      },
    ]);
  }, []);
  return <ColorGridController homeCardContent={bookList} />;
}
