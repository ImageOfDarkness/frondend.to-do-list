import React, { useState } from "react";
import {
  ListItem as Item,
  Checkbox,
  ListItemIcon,
  TextField,
  IconButton,
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

export default function ListItem({
  text,
  checked,
  onDelete,
  updateChecked,
  updateText,
  id,
}) {
  const [check, setCheck] = useState(checked);
  const [textValue, setTextValue] = useState(text);
  return (
    <Item>
      <ListItemIcon>
        <Checkbox
          checked={check}
          onChange={() => {
            updateChecked({ text: textValue, checked: !check, id });
            setCheck(!check);
          }}
        />
      </ListItemIcon>
      <TextField
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
        onBlur={() => {
          updateText({ text: textValue, checked: check, id });
        }}
      />
      <IconButton
        onClick={() => {
          onDelete(id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Item>
  );
}
