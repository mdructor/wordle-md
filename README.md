# Wordle clone

Basic Wordle clone written with Typescript and React. Uses MUI material components for the UI. No other external libraries were used.

It currently chooses 1 word per 24 hours by seeding a hand-rolled RNG method seeded by the current day (GMT) (check out src/util/wordUtils.tsx). The game currently doesn't keep record of wins/losses over a period of time, 
and if you lose, you can try again by refreshing the page. The word will be revealed if you lose, which should help for testing win/loss conditions.

There are currently no global keybindings implemented, so the on-screen keyboard will need to be used to play.

Most of the game logic is implemented via React context api via the reducer found in src/contexts/WordleContext.tsx.

Notable features missing from the official Wordle is no hard-mode, keybindings, player statistics, and dark-mode. They might be implemented for fun at a later time.

## To Run: 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

