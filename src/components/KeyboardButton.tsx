import { Backspace } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext } from "react";
import { WordleContext } from "../contexts/WordleContext";
import { KeyboardSpecialAction } from "../enums/KeyboardSpecialAction";

interface KeyboardButtonProps {
  value: string | KeyboardSpecialAction;
}

type ColorOption = "primary" | "success" | "secondary" | "error";

export default function KeyboardButton({ value }: KeyboardButtonProps) {
  const { state, dispatch } = useContext(WordleContext);

  function getButtonColor(): ColorOption {
    if (typeof value === "string") {
      // check if letter has been guessed
      var guessed = new Set<string>();
      for (let i = 0; i < state.currentLine; ++i) {
        state.guesses[i].split("").map((c) => guessed.add(c));
      }
      if (guessed.has(value)) {
        if (state.word.indexOf(value) === -1) {
          // letter not in word
          return "error";
        }
        for (let i = 0; i < 5; ++i) {
          // check if has guessed letter correctly
          if (state.word.charAt(i) === value) {
            for (let k = 0; k < state.currentLine; ++k) {
              if (state.guesses[k].charAt(i) === value) {
                return "success";
              }
            }
          }
        }
        // has been guessed, but not correctly
        return "secondary";
      }
    }
    return "primary";
  }

  function onClick() {
    dispatch({ type: "KeyboardChoice", payload: value });
  }

  return (
    <Button variant="contained" onClick={onClick} color={getButtonColor()}>
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
