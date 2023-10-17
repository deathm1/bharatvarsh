import { useEffect, useState } from "react";
import ColorGridController from "../../Controllers/ColorGridController/ColorGridcontroller";

function Home() {
  const [homeCardContent, setHomeCardContent] = useState(null);

  useEffect(() => {
    setHomeCardContent([
      {
        cardContent: {
          cardHead:
            "Card Heading Card Heading Card Heading Card Heading Card Heading Card Heading ",
          cardBody:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        cardNavLink: "/",
      },
      {
        cardContent: {
          cardHead: "Card Heading2",
          cardBody:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        cardNavLink: "/",
      },
      {
        cardContent: {
          cardHead: "Card Heading3",
          cardBody:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        cardNavLink: "/",
      },
      {
        cardContent: {
          cardHead: "Card Heading4",
          cardBody:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        cardNavLink: "/",
      },
    ]);
  }, []);
  return <ColorGridController homeCardContent={homeCardContent} />;
}

export default Home;
