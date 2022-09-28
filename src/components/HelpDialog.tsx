import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
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
      </DialogContent>
    </Dialog>
  );
}
