import { Dialog, DialogContent, DialogTitle } from "@mui/material";

interface OptionsDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function OptionsDialog({ open, onClose }: OptionsDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>SETTINGS</DialogTitle>
      <DialogContent></DialogContent>
    </Dialog>
  );
}
