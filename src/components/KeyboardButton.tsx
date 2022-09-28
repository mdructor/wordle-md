import { Backspace } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext } from "react";
import { WordleContext } from "../contexts/WordleContext";
import { KeyboardSpecialAction } from "../enums/KeyboardSpecialAction";

interface KeyboardButtonProps {
  value: string | KeyboardSpecialAction;
}

export default function KeyboardButton({ value }: KeyboardButtonProps) {
  const { dispatch } = useContext(WordleContext);

  function onClick() {
    dispatch({ type: "KeyboardChoice", payload: value });
  }

  return (
    <Button variant="contained" onClick={onClick}>
      {typeof value === "string" ? (
        value.toUpperCase()
      ) : value === KeyboardSpecialAction.Backspace ? (
        <Backspace />
      ) : (
        "Enter"
      )}
    </Button>
  );
}
