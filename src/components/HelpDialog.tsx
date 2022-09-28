import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

interface HelpDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function HelpDialog({ open, onClose }: HelpDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>HOW TO PLAY</DialogTitle>
      <DialogContent>
        <Typography variant="body2" gutterBottom>
          Guess the <b>WORDLE</b> in 6 tries.
          <br />
          Each guess must be a valid 5-letter word. Hit the enter button to
          submit.
          <br />
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </Typography>
        <Divider />
        <br />
        <Typography variant="body2">
          <b>Examples</b>
        </Typography>
        <Typography variant="h6">Letter is in the correct spot!</Typography>
        <Paper
          style={{
            display: "flex",
            width: 60,
            height: 60,
            background: "#66bb6a",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid",
          }}
          variant="outlined"
          square
        >
          <Typography variant="h3" textAlign="center">
            <b>A</b>
          </Typography>
        </Paper>
        <Typography variant="h6">
          Letter is in the word but not in the right spot.
        </Typography>
        <Paper
          style={{
            display: "flex",
            width: 60,
            height: 60,
            background: "#ce93d8",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid",
          }}
          variant="outlined"
          square
        >
          <Typography variant="h3" textAlign="center">
            <b>B</b>
          </Typography>
        </Paper>
        <Typography variant="h6">Letter is not in the word.</Typography>
        <Paper
          style={{
            display: "flex",
            width: 60,
            height: 60,
            background: "#e57373",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid",
          }}
          variant="outlined"
          square
        >
          <Typography variant="h3" textAlign="center">
            <b>C</b>
          </Typography>
        </Paper>
      </DialogContent>
    </Dialog>
  );
}
