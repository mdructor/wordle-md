import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface MainMenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MainMenuDrawer({ open, onClose }: MainMenuDrawerProps) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Typography variant="h6">
        <b>Mason Dructor</b>
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary={"LinkedIn"} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Github"} />
        </ListItem>
      </List>
    </Drawer>
  );
}
