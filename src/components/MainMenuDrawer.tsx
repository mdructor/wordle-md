import {
  Box,
  Divider,
  Drawer,
  Link,
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
      <Box sx={{ width: 250 }}>
        <Typography variant="h6" textAlign="center">
          <b>Mason Dructor</b>
        </Typography>
        <Divider />
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/mdructor/" target="_blank">
              <ListItemText primary={"LinkedIn"} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/mdructor" target="_blank">
              <ListItemText primary={"Github"} />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
