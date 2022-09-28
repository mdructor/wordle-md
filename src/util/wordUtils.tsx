import { wordList } from "./words";

export function pickWord() {
  const rn = randomNumber(new Date().setHours(0, 0, 0, 0))();

  const word = wordList[Math.floor(rn * (wordList.length - 1))].toUpperCase();

  return word;
}

export function checkIfValid(s: string) {
  return wordList.indexOf(s.toLowerCase()) > -1;
}

function randomNumber(seed: number) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
}
