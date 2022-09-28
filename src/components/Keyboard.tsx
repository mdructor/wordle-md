import { Stack } from "@mui/material";
import { KeyboardSpecialAction } from "../enums/KeyboardSpecialAction";
import KeyboardButton from "./KeyboardButton";

export default function Keyboard() {
  return (
    <Stack
      style={{
        display: "flex",
        alignItems: "center",
      }}
      spacing={1}
    >
      <Stack direction="row" spacing={1}>
        <KeyboardButton value="Q" />
        <KeyboardButton value="W" />
        <KeyboardButton value="E" />
        <KeyboardButton value="R" />
        <KeyboardButton value="T" />
        <KeyboardButton value="Y" />
        <KeyboardButton value="U" />
        <KeyboardButton value="I" />
        <KeyboardButton value="O" />
        <KeyboardButton value="P" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <KeyboardButton value="A" />
        <KeyboardButton value="S" />
        <KeyboardButton value="D" />
        <KeyboardButton value="F" />
        <KeyboardButton value="G" />
        <KeyboardButton value="H" />
        <KeyboardButton value="J" />
        <KeyboardButton value="K" />
        <KeyboardButton value="L" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <KeyboardButton value={KeyboardSpecialAction.Enter} />
        <KeyboardButton value="Z" />
        <KeyboardButton value="X" />
        <KeyboardButton value="C" />
        <KeyboardButton value="V" />
        <KeyboardButton value="B" />
        <KeyboardButton value="N" />
        <KeyboardButton value="M" />
        <KeyboardButton value={KeyboardSpecialAction.Backspace} />
      </Stack>
    </Stack>
  );
}
