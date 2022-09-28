import { HelpOutline, Menu, Settings } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import HelpDialog from "./HelpDialog";
import MainMenuDrawer from "./MainMenuDrawer";
import OptionsDialog from "./OptionsDialog";

export default function WordleAppBar() {
  const [openHelp, setOpenHelp] = React.useState(false);
  const [openMainMenu, setOpenMainMenu] = React.useState(false);
  const [openSettings, setOpenSettings] = React.useState(false);

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

  const handleSettingsClick = () => {
    setOpenSettings(true);
  };

  const handleSettingsClose = () => {
    setOpenSettings(false);
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
          <IconButton size="large" onClick={handleSettingsClick}>
            <Settings />
          </IconButton>
        </div>
      </Toolbar>
      <HelpDialog open={openHelp} onClose={handleHelpClose} />
      <MainMenuDrawer open={openMainMenu} onClose={handleMainMenuClose} />
      <OptionsDialog open={openSettings} onClose={handleSettingsClose} />
    </AppBar>
  );
}
