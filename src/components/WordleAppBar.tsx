import { HelpOutline, Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import HelpDialog from "./HelpDialog";
import MainMenuDrawer from "./MainMenuDrawer";

export default function WordleAppBar() {
  const [openHelp, setOpenHelp] = React.useState(false);
  const [openMainMenu, setOpenMainMenu] = React.useState(false);

  const handleHelpClick = () => {
    setOpenHelp(true);
  };

  const handleHelpClose = () => {
    setOpenHelp(false);
  };

  const handleMainMenuClick = () => {
    setOpenMainMenu(true);
  };

  const handleMainMenuClose = () => {
    setOpenMainMenu(false);
  };

  return (
    <AppBar position="static">
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton size="large" onClick={handleMainMenuClick}>
          <Menu />
        </IconButton>
        <Typography variant="h4" textAlign={"center"}>
          <b>Wordle</b>
        </Typography>
        <div>
          <IconButton size="large" onClick={handleHelpClick}>
            <HelpOutline />
          </IconButton>
        </div>
      </Toolbar>
      <HelpDialog open={openHelp} onClose={handleHelpClose} />
      <MainMenuDrawer open={openMainMenu} onClose={handleMainMenuClose} />
    </AppBar>
  );
}
