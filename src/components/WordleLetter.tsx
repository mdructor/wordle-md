import { Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { WordleContext } from "../contexts/WordleContext";

interface WordleLetterProps {
  line: number;
  index: number;
}

export default function WordleLetter({ line, index }: WordleLetterProps) {
  const { state } = useContext(WordleContext);

  function getText() {
    if (state.currentLine >= line) {
      if (state.guesses[line].length > index) {
        return state.guesses[line].charAt(index);
      }
    }
  }

  function getColor() {
    if (state.currentLine <= line && !state.gameOver) {
      return "#e3f2fd";
    } else {
      const guess = state.guesses[line];
      const actual = state.word;
      if (guess[index] === actual[index]) {
        return "#66bb6a";
      }
      if (actual.indexOf(guess.charAt(index)) > -1) {
        return "#ce93d8";
      } else {
        return "#aaa";
      }
    }
  }

  return (
    <Paper
      style={{
        display: "flex",
        minWidth: 60,
        minHeight: 60,
        background: getColor(),
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid",
      }}
      variant="outlined"
      square
    >
      <Typography variant="h3" textAlign="center">
        <b>{getText()}</b>
      </Typography>
    </Paper>
  );
}
