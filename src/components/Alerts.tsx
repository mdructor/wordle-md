import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";
import { WordleContext } from "../contexts/WordleContext";

export default function Alerts() {
  const { state } = useContext(WordleContext);
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.invalidWord}
      >
        <Alert severity="error">Must enter a valid word!</Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.winner}
      >
        <Alert severity="success">Congratulations, you are a winner!</Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.loser}
      >
        <Alert severity="info">
          Sorry, you ran out of guesses and didn't guess the word. The word was{" "}
          <b>{state.word}</b>.
        </Alert>
      </Snackbar>
    </div>
  );
}
