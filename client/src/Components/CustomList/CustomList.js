import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { ListItemButton, Paper } from "@mui/material";

export default function CustomList(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  if (props.bookInfo !== null) {
    return (
      <List dense={true}>
        {props.bookInfo.map((elem, index) => {
          return (
            <Paper
              sx={{
                backgroundColor: `rgba(${getRandomInt(255)}, ${getRandomInt(
                  255
                )}, ${getRandomInt(255)}, 0.1)`,
                mb: 2,
              }}
              key={index}
            >
              <ListItemButton component="a" href={elem.navigate}>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar>
                      <DoubleArrowIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={elem.header} secondary={elem.body} />
                </ListItem>
              </ListItemButton>
            </Paper>
          );
        })}
      </List>
    );
  }
}
