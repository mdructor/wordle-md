import { createContext, useReducer } from "react";
import { KeyboardSpecialAction } from "../enums/KeyboardSpecialAction";
import { checkIfValid, pickWord } from "../util/wordUtils";

const initialWordleState = {
  word: pickWord(),
  currentLine: 0,
  guesses: ["", "", "", "", "", ""],
  invalidWord: false,
  gameOver: false,
  winner: false,
  loser: false,
};

type WordleState = typeof initialWordleState;
type Action = {
  type: "KeyboardChoice";
  payload: string | KeyboardSpecialAction;
};

interface WordleProviderProps {
  children: React.ReactNode;
}

function reducer(state: WordleState, action: Action): WordleState {
  if (state.gameOver) {
    return state;
  }

  if (typeof action.payload === "string") {
    // hit letter on keyboard
    if (state.guesses[state.currentLine].length < 5) {
      const updatedGuesses = [...state.guesses];
      updatedGuesses[state.currentLine] += action.payload;
      return { ...state, guesses: updatedGuesses };
    }
  } else {
    // either hit backspace or enter on keyboard
    if (action.payload === KeyboardSpecialAction.Backspace) {
      if (state.guesses[state.currentLine].length > 0) {
        const updatedGuesses = [...state.guesses];
        updatedGuesses[state.currentLine] = updatedGuesses[
          state.currentLine
        ].slice(0, updatedGuesses[state.currentLine].length - 1);
        return { ...state, guesses: updatedGuesses, invalidWord: false };
      } else {
        return { ...state, invalidWord: false };
      }
    } else {
      // check if invalid word
      if (!checkIfValid(state.guesses[state.currentLine])) {
        return { ...state, invalidWord: true };
      }
      // check if winner
      if (state.guesses[state.currentLine] === state.word) {
        return { ...state, gameOver: true, winner: true };
      }
      if (state.guesses[state.currentLine].length === 5) {
        if (state.currentLine === 5) {
          // ran out of guesses
          return { ...state, loser: true, gameOver: true };
        }
        return { ...state, currentLine: state.currentLine + 1 };
      }
    }
  }

  return state;
}

export const WordleContext = createContext<{
  state: WordleState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialWordleState, dispatch: () => {} });

export function WordleProvider({ children }: WordleProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialWordleState);

  return (
    <WordleContext.Provider value={{ state, dispatch }}>
      {children}
    </WordleContext.Provider>
  );
}
