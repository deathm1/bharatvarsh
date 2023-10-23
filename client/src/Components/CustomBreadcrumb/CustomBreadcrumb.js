import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

export default function CustomBreadcrumb() {
  const [myBreadcrumbs, setMyBreadcrumbs] = React.useState([]);
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  React.useEffect(() => {
    const fullPathString = window.location.pathname;
    const pathListuf = fullPathString.split("/");
    const pathList = removeDuplicates(pathListuf);
    setMyBreadcrumbs([]);

    pathList.forEach((element) => {
      if (element === "") {
        setMyBreadcrumbs((revrec) => {
          return [...revrec, "Home"];
        });
      } else {
        setMyBreadcrumbs((revrec) => {
          return [...revrec, element];
        });
      }
    });
  }, []);

  return (
    <Breadcrumbs separator=">" aria-label="breadcrumb">
      {myBreadcrumbs.map((element, index) => {
        if (myBreadcrumbs.length === 1) {
          return (
            <Typography key={index} color="text.primary">
              Home
            </Typography>
          );
        } else if (index === myBreadcrumbs.length - 1) {
          return (
            <Typography key={index} color="text.primary">
              {element}
            </Typography>
          );
        } else {
          return (
            <Typography key={index} color="text.primary">
              {element}
            </Typography>
          );
        }
      })}
    </Breadcrumbs>
  );
}
