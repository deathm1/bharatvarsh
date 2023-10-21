import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Tooltip } from "@mui/material";

export default function FontController(props) {
  const handleChange = (event) => {
    props.setFont(event.target.value);
  };

  return (
    <Tooltip title="Change Font" placement="right">
      <FormControl sx={{ minWidth: 180 }} size="small" variant="standard">
        <Select
          labelId="select-font-label"
          id="font-select-small"
          value={props.font}
          label="Font"
          onChange={handleChange}
        >
          <MenuItem value={10}>Small Text</MenuItem>
          <MenuItem value={14}>Default Text</MenuItem>
          <MenuItem value={20}>Large Text</MenuItem>
          <MenuItem value={25}>Huge Text</MenuItem>
        </Select>
      </FormControl>
    </Tooltip>
  );
}
