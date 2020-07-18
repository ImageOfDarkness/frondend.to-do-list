import React, { useState } from "react";
import { Button, IconButton, TextField } from "@material-ui/core";

function Header({ addItem }) {
  const [Text, setText] = useState();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addItem(Text);
        setText("");
      }}
      className="header"
    >
      <TextField
        value={Text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        variant="outlined"
        label="task"
        size="small"
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          addItem(Text);
          setText("");
        }}
      >
        Добавить
      </Button>
    </form>
  );
}
export default Header;
