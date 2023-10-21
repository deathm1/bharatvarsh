import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ListItemButton } from "@mui/material";

export default function CustomList(props) {
  if (props.bookInfo !== null) {
    return (
      <List dense={true}>
        {props.bookInfo.map((elem, index) => {
          return (
            <ListItemButton component="a" href={elem.navigate} index={index}>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar>
                    <BookmarkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={elem.header} secondary={elem.body} />
              </ListItem>
            </ListItemButton>
          );
        })}
      </List>
    );
  }
}
