import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

export default function ReactColorfulCard(props) {
  const [config, setConfig] = React.useState({
    col1: 255,
    col2: 255,
    col3: 255,
  });

  React.useEffect(() => {
    setConfig({
      col1: getRandomInt(255),
      col2: getRandomInt(255),
      col3: getRandomInt(255),
    });
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <Card
      sx={{
        backgroundColor: `rgba(${config.col1}, ${getRandomInt(
          config.col2
        )}, ${getRandomInt(config.col3)}, 0.3)`,
      }}
    >
      <CardActionArea onClick={props.CardAction}>
        <CardContent>{props.CardContent}</CardContent>
      </CardActionArea>
    </Card>
  );
}
